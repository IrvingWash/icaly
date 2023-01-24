import { ensureDefined } from './helpers';

enum EnvVariables {
	Port = 'PORT',
	ClientURL = 'CLIENT_URL',
}

export class EnvExtractor {
	public static get port(): string {
		return this._getVariable(EnvVariables.Port);
	}

	public static get clientURL(): string {
		return this._getVariable(EnvVariables.ClientURL);
	}

	private static _getVariable(name: EnvVariables): string {
		return ensureDefined(process.env[name], `Environment variable ${name} is not specified`);
	}
}
