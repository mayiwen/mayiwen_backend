import { Injectable } from '@nestjs/common';

@Injectable()
export class NuoruomaService {
  getHello(): string {
    return 'this is hello router get';
  }
  postHello(): string {
    return 'this is hello router post';
  }
}
