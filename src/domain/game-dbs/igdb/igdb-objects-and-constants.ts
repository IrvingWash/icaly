export interface IGDBAuthResult {
	access_token: string;
	expires_in: number;
	token_type: string;
}

export interface IGDBGame {
	id: number;
	alternative_names?: IGDBAlternativeName[];
	category: IGDBGameCategory;
	collection?: IGDBCommonEntity;
	cover?: IGDBCover;
	dlcs?: IGDBCommonEntity[];
	expanded_games?: IGDBCommonEntity[];
	expansions?: IGDBCommonEntity[];
	first_release_date: number;
	franchise?: IGDBCommonEntity;
	franchises?: IGDBCommonEntity[];
	genres: IGDBCommonEntity[];
	involved_companies?: IGDBInvolvedCompany[];
	name: string;
	parent_game?: IGDBCommonEntity;
	platforms?: IGDBPlatform[];
	remakes?: IGDBCommonEntity[];
	remasters?: IGDBCommonEntity[];
	similar_games?: IGDBCommonEntity[];
	standalone_expansions?: IGDBCommonEntity[];
	status?: IGDBGameStatus;
	storyline: string;
	summary: string;
}

export interface IGDBCommonEntity {
	id: number;
	name: string;
}

export interface IGDBAlternativeName {
	name: string;
}

export interface IGDBCover {
	url: string;
}

export interface IGDBInvolvedCompany {
	id: number;
	company: IGDBCompany;
	publisher: boolean;
}

export interface IGDBCompany {
	id: number;
	country: number;
	logo?: IGDBCompanyLogo;
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
