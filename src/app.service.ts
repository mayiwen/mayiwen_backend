import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '这是马一文的后端服务!主页是http://mayiwen.com';
  }
}
