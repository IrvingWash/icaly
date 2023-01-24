import axios from 'axios';
import { RequestMetaInfo } from '../request-metainfo';
import { IGDBFetch } from './igdb-fetch';
import { IGDBAuthResult } from './igdb-objects';

export interface IIGDBAuthenticator {
	authenticate(): Promise<IGDBAuthResult>;
}

export class IGDBAuthenticator implements IIGDBAuthenticator {
	private _authRequestMetaInfo: RequestMetaInfo;

	public constructor(authRequestMetaInfo: RequestMetaInfo) {
		this._authRequestMetaInfo = authRequestMetaInfo;
	}

	public async authenticate(): Promise<IGDBAuthResult> {
		const response = await axios.post(this._authRequestMetaInfo.url.href);

		return response.data;
	}
}
