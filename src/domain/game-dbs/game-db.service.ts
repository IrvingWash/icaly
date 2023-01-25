import { Injectable, OnModuleInit } from '@nestjs/common';

import { GameDB } from './game-db';
import { gameDBFactory } from './game-db-factory';

@Injectable()
export class GameDBService implements OnModuleInit {
	private _gameDB: GameDB;

	public constructor() {
		this._gameDB = gameDBFactory();
	}

	public async onModuleInit(): Promise<void> {
		if (this._gameDB.init === undefined) {
			return;
		}

		await this._gameDB.init();
	}

	public async getGames(): Promise<void> {
		await this._gameDB.getGames();
	}
}
