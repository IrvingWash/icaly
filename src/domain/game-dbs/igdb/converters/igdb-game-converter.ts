import {
	Company,
	DLC,
	Franchise,
	Game,
	GameCategory,
	GameStatus,
	Genre,
	ParentGame,
	Platform,
	Remake,
	Series,
	SimilarGame,
} from '../../game-db-objects-and-constants';

import {
	IGDBAlternativeName,
	IGDBDLC,
	IGDBFranchise,
	IGDBGame,
	IGDBGameCollection,
	IGDBGenre,
	IGDBInvolvedCompany,
	IGDBParentGame,
	IGDBPlatform,
	IGDBRemake,
	IGDBSimilarGame,
} from '../igdb-objects-and-constants';

export function convertIGDBGameToGame(igdbGame: IGDBGame): Game {
	const {
		alternative_names,
		category,
		cover,
		summary,
		involved_companies,
		dlcs,
		expanded_games,
		expansions,
		franchise,
		franchises,
		genres,
		id,
		parent_game,
		platforms,
		first_release_date,
		name,
		similar_games,
		remakes,
		storyline,
		status,
		remasters,
		collection,
		standalone_expansions,
	} = igdbGame;

	return {
		alternativeTitles: convertAlternativeNames(alternative_names),
		category: category as unknown as GameCategory,
		cover: cover?.url,
		description: summary,
		developers: convertInvolvedCompaniesToDevelopers(involved_companies),
		dlcs: convertDLCs(dlcs),
		expandedGames: convertDLCs(expanded_games),
		expansions: convertDLCs(expansions),
		franchise: convertFranchise(franchise),
		franchises: convertFranchises(franchises),
		genres: convertGenres(genres),
		id: String(id),
		parentGame: convertParentGame(parent_game),
		platforms: convertPlatforms(platforms),
		publishers: convertInvolvedCompaniesToPublishers(involved_companies),
		releaseDate: first_release_date,
		title: name,
		similarGames: convertSimilarGames(similar_games),
		remakes: convertRemakes(remakes),
		storyline: storyline,
		status: status as unknown as GameStatus ?? GameStatus.Released,
		remasters: convertRemakes(remasters),
		standalonExpansions: convertDLCs(standalone_expansions),
		series: convertCollection(collection),
	}
}

function convertAlternativeNames(igdbAlternativeNames: IGDBAlternativeName[] | undefined): string[] {
	return igdbAlternativeNames?.map((alternativeName) => alternativeName.name) ?? [];
}

function convertInvolvedCompaniesToDevelopers(igdbInvolvedCompanies: IGDBInvolvedCompany[]): Company[] {
	const developers: Company[] = [];

	for (const company of igdbInvolvedCompanies) {
		if (company.publisher) {
			continue;
		}

		developers.push({
			id: String(company.company.id),
			country: company.company.country,
			logo: company.company.logo.url,
			title: company.company.name,
		});
	}

	return developers;
}

function convertInvolvedCompaniesToPublishers(igdbInvolvedCompanies: IGDBInvolvedCompany[]): Company[] {
	const publishers: Company[] = [];

	for (const company of igdbInvolvedCompanies) {
		if (!company.publisher) {
			continue;
		}

		publishers.push({
			id: String(company.company.id),
			country: company.company.country,
			logo: company.company.logo.url,
			title: company.company.name,
		});
	}

	return publishers;
}

function convertDLCs(igdbDLCs: IGDBDLC[] | undefined): DLC[] {
	return igdbDLCs?.map((dlc) => ({
		id: String(dlc.id),
		title: dlc.name,
	})) ?? [];
}

function convertFranchise(igdbFranchise: IGDBFranchise | undefined): Franchise | undefined {
	if (igdbFranchise === undefined) {
		return undefined;
	}

	return {
		id: String(igdbFranchise.id),
		title: igdbFranchise.name,
	};
}

function convertFranchises(igdbFranchises: IGDBFranchise[] | undefined): Franchise[] {
	return igdbFranchises?.map((franchise) => ({
		id: String(franchise.id),
		title: franchise.name,
	})) ?? [];
}

function convertGenres(igdbGenres: IGDBGenre[]): Genre[] {
	return igdbGenres.map((genre) => ({
		id: String(genre.id),
		title: genre.name,
	}));
}

function convertParentGame(igdbParentGame: IGDBParentGame | undefined): ParentGame | undefined {
	if (igdbParentGame === undefined) {
		return undefined;
	}

	return {
		id: String(igdbParentGame.id),
		title: igdbParentGame.name,
	};
}

function convertPlatforms(igdbPlatforms: IGDBPlatform[]): Platform[] {
	return igdbPlatforms.map((platform) => ({
		id: String(platform.id),
		title: platform.name,
		logo: platform.platform_logo.url,
	}));
}

function convertSimilarGames(igdbSimilarGames: IGDBSimilarGame[] | undefined): SimilarGame[] {
	if (igdbSimilarGames === undefined) {
		return [];
	}

	return igdbSimilarGames.map((similarGame) => ({
		id: String(similarGame.id),
		title: similarGame.name,
	}));
}

function convertRemakes(igdbRemakes: IGDBRemake[] | undefined): Remake[] {
	return igdbRemakes?.map((remake) => ({
		id: String(remake.id),
		title: remake.name,
	})) ?? [];
}

function convertCollection(igdbCollection?: IGDBGameCollection): Series | undefined {
	if (igdbCollection === undefined) {
		return undefined;
	}

	return {
		id: String(igdbCollection.id),
		title: igdbCollection.name,
	}
}
