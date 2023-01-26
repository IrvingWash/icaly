import { CommonGamesCapability } from '../../capabilities/common-games-capability';
import { Game } from '../../game-db-objects-and-constants';
import { convertIGDBGame } from '../converters/igdb-game-converter';
import { IIGDBTransport } from '../igdb-transport';

export class IGDBGamesCapability implements CommonGamesCapability {
	private _transport: IIGDBTransport;

	public constructor(transport: IIGDBTransport) {
		this._transport = transport;
	}

	public async getGames(): Promise<Game[]> {
		const igdbGames = await this._transport.games();

		return igdbGames.map(convertIGDBGame);
	}
}
