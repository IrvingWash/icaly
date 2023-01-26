export const enum GameCategory {
	Main,
	dlcAddon,
	Expansion,
	Bundle,
	StandaloneExpansion,
	Mod,
	Episode,
	Season,
	Remake,
	Remaster,
	ExpandedGame,
	Port,
	Fork,
	Pack,
	Update,
}

export const enum GameStatus {
	Released,
	Alpha,
	Beta,
	EarlyAccess,
	Offline,
	Cancelled,
	Rumored,
	Delisted,
}

export interface Game {
	id: string;
	title: string;
	alternativeTitles: string[];
	category: GameCategory;
	series?: GameDBCommonEntity;
	cover?: string;
	dlcs: GameDBCommonEntity[];
	expandedGames: GameDBCommonEntity[];
	expansions: GameDBCommonEntity[];
	releaseDate: number;
	franchise?: GameDBCommonEntity;
	franchises: GameDBCommonEntity[];
	genres: GameDBCommonEntity[];
	developers: Company[];
	publishers: Company[];
	parentGame?: GameDBCommonEntity;
	platforms: Platform[];
	remakes: GameDBCommonEntity[];
	remasters: GameDBCommonEntity[];
	similarGames: GameDBCommonEntity[];
	standaloneExpansions: GameDBCommonEntity[];
	status: GameStatus;
	storyline: string;
	description: string;
}

export interface GameDBCommonEntity {
	id: string;
	title: string;
}

export interface Company {
	id: string;
	title: string;
	country: number;
	logo: string;
}

export interface Platform {
	id: string;
	title: string;
	logo: string;
}

