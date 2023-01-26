import { Controller, Get } from '@nestjs/common';
import { GameDBService } from 'src/domain/game-dbs/game-db/game-db.service';

@Controller('test')
export class TestController {
	public constructor(
		private readonly _gameDBService: GameDBService
	) {}

	@Get('games')
	public async getAllGames(): Promise<void> {
		await this._gameDBService.getGames();
	}
}
