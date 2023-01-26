import {
	Injectable,
	InternalServerErrorException,
	UnauthorizedException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

import {
	AuthResult,
	Tokens,
} from './auth.objects';

import { getErrorMessage } from 'src/utils/helpers';

import { AuthDTO } from './auth.dto';
import { TokenService } from './token.service';
import { User } from '../user/user.entity';

@Injectable()
export class AuthService {
	public constructor(
		@InjectRepository(User)
		private readonly _userRepository: Repository<User>,

		private readonly _tokenService: TokenService
	) {}

	public async signUp(dto: AuthDTO): Promise<AuthResult> {
		const {
			username,
			password,
		} = dto;

		const hashedPassword = await bcrypt.hash(password, 5);

		const tokens = this._tokenService.generateTokens(username);

		try {
			const user = this._userRepository.create({
				username,
				password: hashedPassword,
			});

			await this._userRepository.save(user);

			return {
				tokens,
				username: user.username,
			};
		} catch (error) {
			throw new InternalServerErrorException(getErrorMessage(error));
		}
	}

	public async signIn(dto: AuthDTO): Promise<AuthResult> {
		const { username, password } = dto;

		const user = await this._userRepository.findOneBy({ username });

		if (user === null) {
			throw new UnauthorizedException();
		}

		const isCorrectPassword = await bcrypt.compare(password, user.password);

		if (!isCorrectPassword) {
			throw new UnauthorizedException();
		}

		const tokens = this._tokenService.generateTokens(username);

		user.refreshToken = tokens.refreshToken;

		await this._userRepository.save(user);

		return {
			tokens,
			username: user.username,
		};
	}

	public async refresh(refreshToken: string): Promise<Tokens> {
		const validationResult = this._tokenService.validateRefreshToken(refreshToken);

		const userWithToken = await this._userRepository.findOneBy({ username: validationResult.username });

		if (userWithToken === null) {
			throw new UnauthorizedException();
		}

		const tokens = this._tokenService.generateTokens(userWithToken.username);

		userWithToken.refreshToken = tokens.refreshToken;

		await this._userRepository.save(userWithToken);

		return tokens;
	}

	public async logout(accessToken: string): Promise<void> {
		const validationResult = this._tokenService.validateAccessToken(accessToken);

		const user = await this._userRepository.findOneBy({ username: validationResult.username });

		if (user === null) {
			throw new UnauthorizedException();
		}

		user.refreshToken = '';

		await this._userRepository.save(user);
	}
}
