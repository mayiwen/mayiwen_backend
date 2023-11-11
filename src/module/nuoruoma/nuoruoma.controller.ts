import { All, Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { Public } from 'src/auth/directive/public.directive';
import { FileInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';
@Controller('nuoruoma')
export class NuoruomaController {
  constructor() { }
  @Public()
  @Get()
  getHello(): string {
    return 'nuoruoma hello';
  }
}
