import { EnvExtractor } from 'src/utils/env-extractor';
import { GameDB } from '../game-db';
import { IGDBAuthenticator, IIGDBAuthenticator } from './igdb-authenticator';
import { IGDBFetch, makeIGDBFetch } from './igdb-fetch';
import { IGDBRequestEnvironment, IIGDBRequestEnvironment } from './igdb-request-environment';

export class IGDB implements GameDB {
	private readonly _baseURL = 'https://api.igdb.com/v4';
	private readonly _clientID = EnvExtractor.igdbClientID;
	private readonly _clientSecret = EnvExtractor.igdbClientSecret;
	private _igdbFetch!: IGDBFetch;

	private readonly _requestEnvironment: IIGDBRequestEnvironment;
	private readonly _authenticator: IIGDBAuthenticator;

	public constructor() {
		this._requestEnvironment = new IGDBRequestEnvironment(
			this._baseURL,
			this._clientID,
			this._clientSecret
		);

		this._authenticator = new IGDBAuthenticator(this._requestEnvironment.authenticateRequestMetaInfo());
	}

	public async authenticate(): Promise<void> {
		const authResult = await this._authenticator.authenticate();

		this._igdbFetch = makeIGDBFetch(this._clientID, authResult.access_token);
	}
}
