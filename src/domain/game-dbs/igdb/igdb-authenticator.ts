import { RequestMetaInfo } from '../request-metainfo';
import { igdbFetch } from './igdb-fetch';
import { IGDBAuthResult } from './igdb-objects';

export interface IIGDBAuthenticator {
	authenticate(): Promise<void>;
}

export class IGDBAuthenticator implements IIGDBAuthenticator {
	private _authRequestMetaInfo: RequestMetaInfo;

	public constructor(authRequestMetaInfo: RequestMetaInfo) {
		this._authRequestMetaInfo = authRequestMetaInfo;
	}

	public async authenticate(): Promise<void> {
		await igdbFetch<IGDBAuthResult>(this._authRequestMetaInfo);
	}
}
