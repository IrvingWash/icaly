import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseConfig } from './database/database-config';

@Module({
	imports: [
		TypeOrmModule.forRootAsync({ useClass: DatabaseConfig }),
	],
})
export class AppModule {}
