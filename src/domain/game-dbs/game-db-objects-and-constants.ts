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

export const enum PlatformCategory {
	Console,
	Arcade,
	Platform,
	OperatingSystem,
	PortableConsole,
	Computer,
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
	title: string;
	alternativeTitles: string[];
	category: GameCategory;
	series: Series;
	cover: Cover;
	dlcs: Game[];
	expandedGames: Game[];
	expansions: Game[];
	releaseDate: number;
	franchise: Franchise;
	franchises: Franchise[];
	genres: Genre[];
	developers: Company[];
	publishers: Company[];
	parentGame: Game;
	platforms: Platform[];
	remakes: Game[];
	remasters: Game[];
	similarGames: Game[];
	standalonExpansions: Game[];
	status: GameStatus;
	storyline: string;
	description: string;
	websites: string[];
}

export interface Series {
	title: string;
	games: Game[];
}

export interface Cover {
	url: string;
}

export interface Franchise {
	title: string;
	games: Game[];
}

export interface Genre {
	title: string;
}

export interface Company {
	title: string;
	country: number;
	description: string;
	games: Game[];
	logo: string;
}

export interface Platform {
	title: string;
	abbreviation: string;
	alternativeTitle: string;
	generation: number;
	category: PlatformCategory,
	logo: string;
	family: string;
	description: string;
}

