import { RequestMetaInfo } from '../request-metainfo';

export async function igdbFetch<T>(input: RequestMetaInfo, body?: object): Promise<T> {
	const response = await fetch(
		input.url,
		{
			headers: {
				'Content-Type': 'application/json',
			},
			method: input.method,
			body: body !== undefined ? JSON.stringify(body) : undefined,
		}
	);

	return await response.json();
}
