import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { FileService } from './file.service';
import { Public } from 'src/auth/directive/public.directive';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}
  @Public()
  @Get()
  getHello(): string {
    return this.fileService.getHello();
  }
  @Post('/list')
  list(@Body() req: any) {
    return this.fileService.listByPath(req.path);
  }
  @Post('/delete')
  delete(@Body() req: any) {
    return this.fileService.delete(req.path);
  }



  
}
