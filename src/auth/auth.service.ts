import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from '../user/user.service';
import { Repository } from 'typeorm';
@Injectable()
export class AuthService {
  constructor(
     private readonly userService: UserService
  ) {
  }
  /**
   * 登录校验
   * @param name 
   * @param pwd 
   * @returns 
   */
  async validateUser(name: string, pwd: string): Promise<any> {
    const user = await this.userService.findOne(name, pwd);
    console.log('这是返回的user')
    console.log(user)
    if (user && user.login_password === pwd) {
      return user;
    }
    return null;
  }

}
