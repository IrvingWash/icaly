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

export const enum GamePlatformCategory {
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
	series: GameSeries;
	cover: GameCover;
	dlcs: Game[];
	expandedGames: Game[];
	expansions: Game[];
	releaseDate: number;
	franchise: GameFranchise;
	franchises: GameFranchise[];
	genres: GameGenre[];
	developers: GameCompany[];
	publishers: GameCompany[];
	parentGame: Game;
	platforms: GamePlatform[];
	remakes: Game[];
	remasters: Game[];
	similarGames: Game[];
	standalonExpansions: Game[];
	status: GameStatus;
	storyline: string;
	description: string;
	websites: string[];
}

export interface GameSeries {
	title: string;
	games: Game[];
}

export interface GameCover {
	url: string;
}

export interface GameFranchise {
	title: string;
	games: Game[];
}

export interface GameGenre {
	title: string;
}

export interface GameCompany {
	title: string;
	country: number;
	description: string;
	games: Game[];
	logo: string;
}

export interface GamePlatform {
	title: string;
	abbreviation: string;
	alternativeTitle: string;
	generation: number;
	category: GamePlatformCategory,
	logo: string;
	family: string;
	description: string;
}

