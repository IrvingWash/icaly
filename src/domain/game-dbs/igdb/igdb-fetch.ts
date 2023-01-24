import axios from 'axios';

import { RequestMetaInfo } from '../request-metainfo';

export async function igdbFetch<T>(input: RequestMetaInfo, body?: object): Promise<T> {
	const response = await axios.request({
		url: input.url.href,
		method: input.method,
		headers: {
			'Content-Type': 'application/json',
		},
		data: body,
	});

	return response.data;
}
