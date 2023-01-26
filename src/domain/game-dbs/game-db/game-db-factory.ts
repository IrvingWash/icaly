import { EnvExtractor } from 'src/utils/env-extractor';

import { GameDB } from './game-db';
import { IGDB } from '../igdb/igdb';

export function gameDBFactory(): GameDB {
	switch (EnvExtractor.gameDB) {
		case 'igdb':
			return new IGDB();

		default:
			throw new Error(`${EnvExtractor.gameDB} API is not supported yet`);
	}
}
