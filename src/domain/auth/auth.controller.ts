import {
	Body,
	Controller,
	Post,
	Req,
	Res,
} from '@nestjs/common';

import { Request, Response } from 'express';

import {
	AuthResult,
	Tokens,
} from './auth.objects';

import { ITokenParser, TokenParser } from 'src/utils/token-parser';
import { AuthDTO } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
	private readonly _thirtyDays = 30 * 24 * 60 * 60 * 1000;
	private readonly _refreshTokenText = 'refreshToken';

	private readonly _tokenParser: ITokenParser;

	public constructor(
		private readonly _authService: AuthService
	) {
		this._tokenParser = new TokenParser();
	}

	@Post('sign-up')
	public async signUp(
		@Body()
		dto: AuthDTO,

		@Res({ passthrough: true })
		response: Response
	): Promise<AuthResult> {
		const signUpResult = await this._authService.signUp(dto);

		this._sendCookies(response, signUpResult.tokens.refreshToken);

		return signUpResult;
	}

	@Post('sign-in')
	public async signIn(
		@Body()
		dto: AuthDTO,

		@Res({ passthrough: true })
		response: Response
	): Promise<AuthResult> {
		const signInResult = await this._authService.signIn(dto);

		this._sendCookies(response, signInResult.tokens.refreshToken);

		return signInResult;
	}

	@Post('refresh')
	public async refresh(
		@Req()
		request: Request,

		@Res({ passthrough: true })
		response: Response
	): Promise<Tokens> {
		const refreshToken = this._tokenParser.getRefreshToken(request);

		const refreshResult = await this._authService.refresh(refreshToken);

		this._sendCookies(response, refreshResult.refreshToken);

		return refreshResult;
	}

	@Post('sign-out')
	public async logout(
		@Req()
		request: Request,

		@Res({ passthrough: true })
		response: Response
	): Promise<void> {
		const accessToken = this._tokenParser.getAccessToken(request);

		const logoutResult = await this._authService.logout(accessToken);

		response.cookie(
			this._refreshTokenText,
			''
		);

		return logoutResult;
	}

	private _sendCookies(response: Response, refreshToken: string): void {
		response.cookie(
			this._refreshTokenText,
			refreshToken,
			{
				maxAge: this._thirtyDays,
				httpOnly: true,
			}
		);
	}
}
