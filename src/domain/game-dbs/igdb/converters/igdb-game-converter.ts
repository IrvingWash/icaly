import {
	GameDBCommonEntity,
	Company,
	Game,
	GameCategory,
	GameStatus,
	Platform,
} from '../../game-db/game-db-objects-and-constants';

import {
	IGDBAlternativeName,
	IGDBCommonEntity,
	IGDBGame,
	IGDBInvolvedCompany,
	IGDBPlatform,
} from '../igdb-objects-and-constants';

export function convertIGDBGame(igdbGame: IGDBGame): Game {
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
		dlcs: convertCommonEntities(dlcs),
		expandedGames: convertCommonEntities(expanded_games),
		expansions: convertCommonEntities(expansions),
		franchise: convertCommonEntity(franchise),
		franchises: convertCommonEntities(franchises),
		genres: convertCommonEntities(genres),
		id: String(id),
		parentGame: convertCommonEntity(parent_game),
		platforms: convertPlatforms(platforms),
		publishers: convertInvolvedCompaniesToPublishers(involved_companies),
		releaseDate: first_release_date,
		title: name,
		similarGames: convertCommonEntities(similar_games),
		remakes: convertCommonEntities(remakes),
		storyline: storyline,
		status: status as unknown as GameStatus ?? GameStatus.Released,
		remasters: convertCommonEntities(remasters),
		standaloneExpansions: convertCommonEntities(standalone_expansions),
		series: convertCommonEntity(collection),
	};
}

function convertAlternativeNames(igdbAlternativeNames: IGDBAlternativeName[] | undefined): string[] {
	return igdbAlternativeNames?.map((alternativeName) => alternativeName.name) ?? [];
}

// TODO: Remove repeating code
function convertInvolvedCompaniesToDevelopers(igdbInvolvedCompanies: IGDBInvolvedCompany[] | undefined): Company[] {
	if (igdbInvolvedCompanies === undefined) {
		return [];
	}

	const developers: Company[] = [];

	for (const company of igdbInvolvedCompanies) {
		if (company.publisher) {
			continue;
		}

		developers.push({
			id: String(company.company.id),
			country: company.company.country,
			logo: company.company.logo?.url,
			title: company.company.name,
		});
	}

	return developers;
}

function convertInvolvedCompaniesToPublishers(igdbInvolvedCompanies?: IGDBInvolvedCompany[]): Company[] {
	if (igdbInvolvedCompanies === undefined) {
		return [];
	}

	const publishers: Company[] = [];

	for (const company of igdbInvolvedCompanies) {
		if (!company.publisher) {
			continue;
		}

		publishers.push({
			id: String(company.company.id),
			country: company.company.country,
			logo: company.company.logo?.url,
			title: company.company.name,
		});
	}

	return publishers;
}

function convertCommonEntities(igdbCommonEntities: IGDBCommonEntity[] | undefined): GameDBCommonEntity[] {
	return igdbCommonEntities?.map((dlc) => ({
		id: String(dlc.id),
		title: dlc.name,
	})) ?? [];
}

function convertCommonEntity(igdbCommonEntity: IGDBCommonEntity | undefined): GameDBCommonEntity | undefined {
	if (igdbCommonEntity === undefined) {
		return undefined;
	}

	return {
		id: String(igdbCommonEntity.id),
		title: igdbCommonEntity.name,
	};
}

function convertPlatforms(igdbPlatforms: IGDBPlatform[] | undefined): Platform[] {
	return igdbPlatforms?.map((platform) => ({
		id: String(platform.id),
		title: platform.name,
		logo: platform.platform_logo.url,
	})) ?? [];
}

