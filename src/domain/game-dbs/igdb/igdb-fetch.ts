import axios from 'axios';

import { RequestMetaInfo } from '../request-metainfo';

export async function igdbFetch<T>(input: RequestMetaInfo, body?: object): Promise<T> {
	return await axios.request({
		url: input.url.href,
		method: input.method,
		headers: {
			'Content-Type': 'application/json',
		},
		data: body,
	});
}
