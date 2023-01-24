import { Injectable } from '@nestjs/common';

import { GameDB } from './game-db';
import { gameDBFactory } from './game-db-factory';

@Injectable()
export class GameDBService {
	private _gameDB: GameDB;

	public constructor() {
		this._gameDB = gameDBFactory();
	}

	public async authenticate(): Promise<void> {
		await this._gameDB.authenticate();
	}
}
