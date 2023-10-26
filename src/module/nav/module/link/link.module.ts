import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NavLinkEntity } from './entity/link.entity';
import { NavLinkService } from './link.service';
import { NavLinkController } from './link.controller';

@Module({
  imports: [TypeOrmModule.forFeature([NavLinkEntity])],
  providers: [NavLinkService],
  controllers: [NavLinkController],
  exports: []
})
export class NavLinkModule {}
