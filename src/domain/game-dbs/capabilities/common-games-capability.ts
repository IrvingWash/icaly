import { Game } from '../game-db-objects-and-constants';

export interface CommonGamesCapability {
	getGames(): Promise<Game[]>;
}
