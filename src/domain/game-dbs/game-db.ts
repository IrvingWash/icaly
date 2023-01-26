import { Game } from './game-db-objects-and-constants';

export interface GameDB {
	init?: () => Promise<void>;
	getGames(): Promise<Game[]>;
}
