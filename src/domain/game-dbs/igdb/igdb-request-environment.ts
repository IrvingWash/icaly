import { EnvExtractor } from 'src/utils/env-extractor';

import { HTTPMethod, RequestMetaInfo } from '../request-metainfo';

export interface IIGDBRequestEnvironment {
	authenticateRequestMetaInfo(): RequestMetaInfo;
}

export class IGDBRequestEnvironment implements IIGDBRequestEnvironment {
	public authenticateRequestMetaInfo(): RequestMetaInfo {
		const url = new URL('https://id.twitch.tv/oauth2/token');

		url.searchParams.append('client_id', EnvExtractor.igdbClientID);
		url.searchParams.append('client_secret', EnvExtractor.igdbClientSecret);
		url.searchParams.append('grant_type', 'client_credentials');

		return {
			url,
			method: HTTPMethod.Post,
		};
	}
}
