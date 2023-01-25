export interface GameDB {
	init?: () => Promise<void>;
	getGames(): Promise<void>;
}
