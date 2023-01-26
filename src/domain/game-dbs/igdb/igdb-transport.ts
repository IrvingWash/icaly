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
		return await this._igdbFetch<IGDBGame[]>(this._requestEnvironment.gamesRequestMetaInfo());
	}
}
