import { Module } from '@nestjs/common';
import { FileModule } from './module/hello/file.module';

@Module({
  imports: [FileModule],
  providers: [],
  exports: []
})
export class UtilModule {}
