import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseAddAccessTokenToHeaderInterceptor } from './a/interceptor/response-add-access-token-to-header.interceptor';
import { join } from 'node:path';
import express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalInterceptors(new ResponseAddAccessTokenToHeaderInterceptor());
  await app.listen(3000);
}
bootstrap();
