import { GameDB } from '../game-db';
import { IGDBAuthenticator, IIGDBAuthenticator } from './igdb-authenticator';
import { IGDBRequestEnvironment, IIGDBRequestEnvironment } from './igdb-request-environment';

export class IGDB implements GameDB {
	private _requestEnvironment: IIGDBRequestEnvironment;

	private _authenticator: IIGDBAuthenticator;

	public constructor() {
		this._requestEnvironment = new IGDBRequestEnvironment();

		this._authenticator = new IGDBAuthenticator(this._requestEnvironment.authenticateRequestMetaInfo());
	}

	public async authenticate(): Promise<void> {
		const authResult = await this._authenticator.authenticate();

		console.log(authResult);
	}
}
