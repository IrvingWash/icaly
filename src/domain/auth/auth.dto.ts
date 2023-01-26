import { IsNotEmpty, IsString } from 'class-validator';

export class AuthDTO {
	@IsString()
	@IsNotEmpty()
	public readonly username: string;

	@IsString()
	@IsNotEmpty()
	public readonly password: string;
}
