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
	series: Series;
	cover?: string;
	dlcs: DLC[];
	expandedGames: DLC[];
	expansions: DLC[];
	releaseDate: number;
	franchise?: Franchise;
	franchises: Franchise[];
	genres: Genre[];
	developers: Company[];
	publishers: Company[];
	parentGame?: ParentGame;
	platforms: Platform[];
	remakes: Game[];
	remasters: Game[];
	similarGames: SimilarGame[];
	standalonExpansions: Game[];
	status: GameStatus;
	storyline: string;
	description: string;
	websites: string[];
}

export interface SimilarGame {
	id: string;
	title: string;
}

export interface DLC {
	id: string;
	title: string;
}

export interface Series {
	title: string;
	games: Game[];
}

export interface Franchise {
	id: string;
	title: string;
}

export interface Genre {
	id: string;
	title: string;
}

export interface ParentGame {
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

