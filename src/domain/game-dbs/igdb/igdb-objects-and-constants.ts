export interface IGDBGame {
	id: number;
	alternative_names?: IGDBAlternativeName[];
	category: IGDBGameCategory;
	collection?: IGDBGameCollection;
	cover?: IGDBCover;
	dlcs?: IGDBDLC[];
	expanded_games?: IGDBDLC[];
	expansions?: IGDBDLC[];
	first_release_date: number;
	franchise?: IGDBFranchise;
	franchises: IGDBFranchise[];
	genres: IGDBGenre[];
	involved_companies: IGDBInvolvedCompany[];
	name: string;
	parent_game?: IGDBParentGame;
	platforms: IGDBPlatform[];
	remakes?: IGDBRemake[];
	remasters?: IGDBRemaster[];
	similar_games: IGDBSimilarGame[];
	standalone_expansions?: IGDBDLC[];
	status?: IGDBGameStatus;
	storyline: string;
	summary: string;
}

export interface IGDBRemake {
	id: number;
	name: string;
}

export interface IGDBRemaster {
	id: number;
	name: string;
}

export interface IGDBSimilarGame {
	id: number;
	name: string;
}

export interface IGDBParentGame {
	id: number;
	name: string;
}

export interface IGDBDLC {
	id: number;
	name: string;
}

export interface IGDBAlternativeName {
	name: string;
}

export interface IGDBGameCollection {
	id: number;
	name: string;
}

export interface IGDBCover {
	url: string;
}

export interface IGDBFranchise {
	id: number;
	name: string;
}

export interface IGDBGenre {
	id: number;
	name: string;
}

export interface IGDBInvolvedCompany {
	id: number;
	company: IGDBCompany;
	publisher: boolean;
}

export interface IGDBCompany {
	id: number;
	country: number;
	logo: IGDBCompanyLogo;
	name: string;
}

export interface IGDBCompanyLogo {
	url: string;
}

export interface IGDBPlatform {
	id: number;
	name: string;
	platform_logo: IGDBPlatformLogo;
}

export interface IGDBPlatformFamily {
	id: number;
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
