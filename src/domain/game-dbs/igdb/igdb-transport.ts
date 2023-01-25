import { IGDBFetch } from './igdb-fetch';
import { IIGDBRequestEnvironment } from './igdb-request-environment';

export interface IIGDBTransport {
	games(): Promise<void>;
}

export class IGDBTransport implements IIGDBTransport {
	private _igdbFetch: IGDBFetch;
	private _requestEnvironment: IIGDBRequestEnvironment;

	public constructor(igdbFetch: IGDBFetch, requestEnvironment: IIGDBRequestEnvironment) {
		this._igdbFetch = igdbFetch;
		this._requestEnvironment = requestEnvironment;
	}

	public async games(): Promise<void> {
		await this._igdbFetch(this._requestEnvironment.gamesRequestMetaInfo());
	}
}
