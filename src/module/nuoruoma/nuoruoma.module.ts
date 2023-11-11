import { Module } from '@nestjs/common';
import { NuoruomaService } from './nuoruoma.service';
import { NuoruomaController } from './nuoruoma.controller';


@Module({
  imports: [],
  controllers: [NuoruomaController],
  providers: [NuoruomaService],
  exports: []
})
export class NuoruomaModule {}
