export const gamesQuery = `
	fields id, alternative_names.name, category, collection.name, cover.url, dlcs.name,
	expanded_games.name, expansions.name, first_release_date, franchise.name, franchises.name,
	genres.name, involved_companies.company.name, involved_companies.company.country, involved_companies.company.logo, involved_companies.publisher,
	name, parent_game.name, platforms.name, platforms.platform_logo.url, remakes.name, remasters.name, similar_games.name, standalone_expansions.name,
	status, storyline, summary;
	limit 10;
`;
