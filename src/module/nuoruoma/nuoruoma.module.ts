import { Module } from '@nestjs/common';
import { NuoruomaService } from './nuoruoma.service';
import { NuoruomaController } from './nuoruoma.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FontEntity } from './entity/font.entity';


@Module({
  imports: [TypeOrmModule.forFeature([FontEntity])],
  controllers: [NuoruomaController],
  providers: [NuoruomaService],
  exports: []
})
export class NuoruomaModule {}
