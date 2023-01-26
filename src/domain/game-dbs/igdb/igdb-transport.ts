import { IGDBFetch } from './igdb-fetch';
import { IGDBGame } from './igdb-objects-and-constants';
import { IIGDBRequestEnvironment } from './igdb-request-environment';

export interface IIGDBTransport {
	games(): Promise<IGDBGame[]>;
}

export class IGDBTransport implements IIGDBTransport {
	private _igdbFetch: IGDBFetch;
	private _requestEnvironment: IIGDBRequestEnvironment;

	public constructor(igdbFetch: IGDBFetch, requestEnvironment: IIGDBRequestEnvironment) {
		this._igdbFetch = igdbFetch;
		this._requestEnvironment = requestEnvironment;
	}

	public async games(): Promise<IGDBGame[]> {
		return await this._igdbFetch<IGDBGame[]>(this._requestEnvironment.gamesRequestMetaInfo(), 'fields id, alternative_names.name, category, collection.name, cover.url, dlcs.name, expanded_games.name, expansions.name, first_release_date, franchise.name, franchises.name, genres.name, involved_companies.company.name, involved_companies.company.country, involved_companies.company.logo, involved_companies.publisher, name, parent_game.name, platforms.name, platforms.platform_logo.url, remakes.name, remasters.name, similar_games.name, standalone_expansions.name, status, storyline, summary; limit 10;');
	}
}
