import axios from 'axios';

import { RequestMetaInfo } from '../request-metainfo';

export type IGDBFetch = <T>(input: RequestMetaInfo, body?: object) => Promise<T>;

export function makeIGDBFetch(clientID: string, accessToken: string): IGDBFetch {
	return (input: RequestMetaInfo, body?: object) => igdbFetch(clientID, accessToken, input, body);
}

async function igdbFetch<T>(
	clientID: string,
	accessToken: string,
	input: RequestMetaInfo,
	body?: object,
): Promise<T> {
const response = await axios.request({
	url: input.url.href,
		method: input.method,
		headers: {
			'Content-Type': 'application/json',
			'Client-ID': clientID,
			Authorization: `Bearer ${accessToken}`,
		},
		data: body,
	});

	return response.data;
}
