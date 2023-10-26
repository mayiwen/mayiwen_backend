import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NavTitleController } from './title.controller';
import { NavTitleService } from './title.service';
import { NavTitleEntity } from './entity/title.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NavTitleEntity])],
  providers: [NavTitleService],
  controllers: [NavTitleController],
  exports: []
})
export class NavTitleModule {}
