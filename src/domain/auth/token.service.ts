import {
	Injectable,
	UnauthorizedException,
} from '@nestjs/common';

import * as jwt from 'jsonwebtoken';

import { EnvExtractor } from 'src/utils/env-extractor';
import { Tokens } from './auth.objects';

@Injectable()
export class TokenService {
	private readonly _accessSecret: string;
	private readonly _refreshSecret: string;

	public constructor() {
		this._accessSecret = EnvExtractor.accessSecret;
		this._refreshSecret = EnvExtractor.refreshSecret;
	}

	public generateTokens(name: string): Tokens {
		const accessToken = jwt.sign(
			{ name },
			this._accessSecret,
			{ expiresIn: '1h' }
		);

		const refreshToken = jwt.sign(
			{ name },
			this._refreshSecret,
			{ expiresIn: '30d' }
		);

		return {
			accessToken,
			refreshToken,
		};
	}

	public validateAccessToken(accessToken: string): jwt.JwtPayload {
		try {
			return jwt.verify(accessToken, this._accessSecret) as jwt.JwtPayload;
		} catch {
			throw new UnauthorizedException();
		}
	}

	public validateRefreshToken(refreshToken: string): jwt.JwtPayload {
		try {
			return jwt.verify(refreshToken, this._refreshSecret) as jwt.JwtPayload;
		} catch {
			throw new UnauthorizedException();
		}
	}
}
