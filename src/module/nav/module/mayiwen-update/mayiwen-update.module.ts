import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NavMaywienUpdateController } from './mayiwen-update.controller';
import { NavMaywienUpdateService } from './mayiwen-update.service';

@Module({
  imports: [],
  providers: [NavMaywienUpdateService],
  controllers: [NavMaywienUpdateController],
  exports: []
})
export class NavMayiwenUpdateModule {}
