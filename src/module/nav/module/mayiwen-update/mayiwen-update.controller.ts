import { Controller, Get, Request, Post, UseGuards, Body, Delete, Param, Patch, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { NavMaywienUpdateService } from './mayiwen-update.service';
import { AnyFilesInterceptor, FileFieldsInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Express } from 'express'
@Controller('uploadUpdate')
export class NavMaywienUpdateController {
  constructor(private readonly service: NavMaywienUpdateService) {}
  // @Post('')
  // @UseInterceptors(FileFieldsInterceptor([
  //   { name: 'avatear', maxCount: 1},
  //   { name: 'background', maxCount: 1 },
  // ]))
  // @UseInterceptors(AnyFilesInterceptor())
  // addUser(@UploadedFile() files:Express.Multer.File,@Body() body){
  //         console.log(body); 
  //         console.log(files);     
  //         // const writeImage = createWriteStream(join(__dirname, '..','../public/upload', `${file.originalname}`))
  //         // writeImage.write(file.buffer)
  //         return files;
  // }
}
