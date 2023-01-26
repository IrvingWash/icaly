export interface Tokens {
	accessToken: string;
	refreshToken: string;
}

export interface AuthResult {
	tokens: Tokens;
	username: string;
}
