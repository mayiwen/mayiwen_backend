import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from '../user/user.service';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
     private readonly userService: UserService,
     private readonly jwtService: JwtService
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

  async login(user: any) {
    console.log('这是打印的user')
    console.log(user)
    const payload = { username: user.login_name, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}
