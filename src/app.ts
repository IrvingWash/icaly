import {
	INestApplication,
	Logger,
	ValidationPipe,
} from '@nestjs/common';

import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';

import { AppModule } from './app.module';
import { EnvExtractor } from './utils/env-extractor';

export class App {
	private _app: INestApplication;

	private readonly _port = EnvExtractor.port;
	private readonly _clientURL = EnvExtractor.clientURL;

	private readonly _logger = new Logger(App.name);

	public async bootstrap(): Promise<void> {
		this._app = await NestFactory.create(AppModule);

		this._configure();

		await this._app.listen(
			this._port,
			() => this._logger.log(`Server started at port ${this._port}`)
		);
	}

	private _configure(): void {
		this._app.enableCors({
			origin: this._clientURL,
		});

		this._app.use(cookieParser());

		this._app.setGlobalPrefix('api');

		this._app.useGlobalPipes(
			new ValidationPipe({ whitelist: true, transform: true })
		);
	}
}
