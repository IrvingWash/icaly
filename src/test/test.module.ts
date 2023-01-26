import { Module } from '@nestjs/common';
import { GameDBService } from 'src/domain/game-dbs/game-db/game-db.service';
import { TestController } from './test.controller';

@Module({
	providers: [GameDBService],
	controllers: [TestController],
})
export class TestModule {}
