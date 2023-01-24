import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { EnvExtractor } from 'src/utils/env-extractor';

type DBType = 'postgres' | 'mongodb';

export class DatabaseConfig implements TypeOrmOptionsFactory {
	public createTypeOrmOptions(): TypeOrmModuleOptions {
		return {
			type: this._getDBType(),
			host: EnvExtractor.dbHost,
			port: this._getPort(),
			database: EnvExtractor.dbName,
			username: EnvExtractor.dbUser,
			password: EnvExtractor.dbPassword,
			entities: [],
			synchronize: this._isSynchronizeEnabled(),
		};
	}

	private _getDBType(): DBType {
		return EnvExtractor.dbType as DBType;
	}

	private _getPort(): number {
		const port = Number(EnvExtractor.dbPort);

		return isNaN(port) ? 5432 : port;
	}

	private _isSynchronizeEnabled(): boolean {
		return EnvExtractor.dbSynchronize === 'true';
	}
}
