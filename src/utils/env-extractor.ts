import { ensureDefined } from './helpers';

enum EnvVariables {
	Port = 'PORT',
	ClientURL = 'CLIENT_URL',

	DBType = 'DB_TYPE',
	DBHost = 'DB_HOST',
	DBPort = 'DB_PORT',
	DBName = 'DB_NAME',
	DBUser = 'DB_USER',
	DBPassword = 'DB_PASSWORD',
	DBSynchronize = 'DB_SYNCHRONIZE',

	IGDBClientID = 'IGDB_CLIENT_ID',
	IGDBClientSecret = 'IGDB_CLIENT_SECRET',
}

export class EnvExtractor {
	public static get port(): string {
		return this._getVariable(EnvVariables.Port);
	}

	public static get clientURL(): string {
		return this._getVariable(EnvVariables.ClientURL);
	}

	public static get dbType(): string {
		return this._getVariable(EnvVariables.DBType);
	}

	public static get dbHost(): string {
		return this._getVariable(EnvVariables.DBHost);
	}

	public static get dbPort(): string {
		return this._getVariable(EnvVariables.DBPort);
	}

	public static get dbName(): string {
		return this._getVariable(EnvVariables.DBName);
	}

	public static get dbUser(): string {
		return this._getVariable(EnvVariables.DBUser);
	}

	public static get dbPassword(): string {
		return this._getVariable(EnvVariables.DBPassword);
	}

	public static get dbSynchronize(): string {
		return this._getVariable(EnvVariables.DBSynchronize);
	}

	public static get igdbClientID(): string {
		return this._getVariable(EnvVariables.IGDBClientID);
	}

	public static get igdbClientSecret(): string {
		return this._getVariable(EnvVariables.IGDBClientSecret);
	}

	private static _getVariable(name: EnvVariables): string {
		return ensureDefined(process.env[name], `Environment variable ${name} is not specified`);
	}
}
