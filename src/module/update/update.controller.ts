import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UpdateService } from './update.service';
import { Public } from 'src/auth/directive/public.directive';
import { FileInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';
@Controller('update')
export class UpdateController {
  constructor(private readonly updateService: UpdateService) { }
  // @Public()
  // @Get('upload')
  // getUpload(): string {
  //   return this.updateService.getHello();
  // }
  @Public()
  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  /**
   * 系统管理上，将新版本的文件打包完成后，通过上传操作，发版新版本
   */
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    if (file.mimetype === 'application/zip') {
      console.log('上传文件的类型是对的')
      // 首先将获取倒文件传到
      console.log('这是打印的fs')

      fs.writeFile('C:\\Users\\mayiw\\Desktop\\sss\\' + file.originalname, file.buffer, err => {
        if (err) {
          console.error(err);
        }
      });
      return '上传成功'
    }
    return '文件不正确'
  }
}
