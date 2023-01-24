import { HTTPMethod, RequestMetaInfo } from '../request-metainfo';

export interface IIGDBRequestEnvironment {
	authenticateRequestMetaInfo(): RequestMetaInfo;
	gamesRequestMetaInfo(): RequestMetaInfo;
}

export class IGDBRequestEnvironment implements IIGDBRequestEnvironment {
	private _baseURL: string;
	private _clientID: string;
	private _clientSecret: string;

	public constructor(baseURL: string, clientID: string, clientSecret: string) {
		this._baseURL = baseURL;
		this._clientID = clientID;
		this._clientSecret = clientSecret;
	}

	public authenticateRequestMetaInfo(): RequestMetaInfo {
		const url = new URL('https://id.twitch.tv/oauth2/token');

		url.searchParams.append('client_id', this._clientID);
		url.searchParams.append('client_secret', this._clientSecret);
		url.searchParams.append('grant_type', 'client_credentials');

		return {
			url,
			method: HTTPMethod.Post,
		};
	}

	public gamesRequestMetaInfo(): RequestMetaInfo {
		return {
			url: new URL('games', this._baseURL),
			method: HTTPMethod.Post,
		};
	}
}
