import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '../user/user.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';

@Module({
	imports: [TypeOrmModule.forFeature([User])],
	providers: [AuthService, TokenService],
	controllers: [AuthController],
})
export class AuthModule {}
