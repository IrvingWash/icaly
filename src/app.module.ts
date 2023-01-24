import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseConfig } from './database/database-config';
import { TestModule } from './test/test.module';

@Module({
	imports: [
		TypeOrmModule.forRootAsync({ useClass: DatabaseConfig }),
		TestModule,
	],
})
export class AppModule {}
