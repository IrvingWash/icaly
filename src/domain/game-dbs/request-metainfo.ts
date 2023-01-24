export const enum HTTPMethod {
	Get = 'GET',
	Post = 'POST',
	Patch = 'PATCH',
	Put = 'PUT',
	Delete = 'DELETE',
}

export interface RequestMetaInfo {
	url: URL,
	method: HTTPMethod,
}
