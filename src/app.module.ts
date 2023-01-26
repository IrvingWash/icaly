import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseConfig } from './database/database-config';
import { AuthModule } from './domain/auth/auth.module';
import { TestModule } from './test/test.module';

@Module({
	imports: [
		TypeOrmModule.forRootAsync({ useClass: DatabaseConfig }),
		AuthModule,
		TestModule,
	],
})
export class AppModule {}
