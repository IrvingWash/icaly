export type IGDBReferenceID = string;

export interface IGDBGame {
	alternative_names: IGDBReferenceID[];
	category: IGDBGameCategory;
	collection: IGDBReferenceID[];
	cover: IGDBReferenceID;
	dlcs: IGDBReferenceID[];
	expanded_games: IGDBReferenceID[];
	expansions: IGDBReferenceID[];
	first_release_date: number;
	franchise: IGDBReferenceID;
	franchises: IGDBReferenceID[];
	genres: IGDBReferenceID[];
	involved_companies: IGDBReferenceID[];
	name: string;
	parent_game: IGDBReferenceID;
	platforms: IGDBReferenceID[];
	remakes: IGDBReferenceID[];
	remasters: IGDBReferenceID[];
	similar_games: IGDBReferenceID[];
	standalon_expansions: IGDBReferenceID[];
	status: IGDBGameStatus;
	storyline: string;
	summary: string;
}

export interface IGDBAlternativeNames {
	name: string;
}

export interface IGDBGameCollection {
	name: string;
}

export interface IGDBCover {
	url: string;
}

export interface IGDBFranchise {
	games: string[];
	name: string;
}

export interface IGDBGenre {
	name: string;
}

export interface IGDBInvolvedCompany {
	company: IGDBReferenceID;
	developer: boolean;
	porting: boolean;
	publisher: boolean;
	supporting: boolean;
}

export interface IGDBCompany {
	country: number;
	description: string;
	developed: IGDBReferenceID[];
	logo: IGDBReferenceID;
	name: string;
	published: IGDBReferenceID;
}

export interface IGDBCompanyLogo {
	url: string;
}

export interface IGDBPlatform {
	abbreviation: string;
	alternative_name: string;
	category: IGDBReferenceID;
	generation: number;
	name: string;
	platform_family: IGDBReferenceID;
	platform_logo: IGDBReferenceID;
	summary: string;
}

export interface IGDBPlatformFamily {
	name: string;
}

export interface IGDBPlatformLogo {
	url: string;
}

const enum IGDBGameCategory {
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

export const enum IGDBPlatformCategory {
	Console,
	Arcade,
	Platform,
	OperatingSystem,
	PortableConsole,
	Computer,
}

export const enum IGDBGameStatus {
	Released,
	Alpha,
	Beta,
	EarlyAccess,
	Offline,
	Cancelled,
	Rumored,
	Delisted,
}
