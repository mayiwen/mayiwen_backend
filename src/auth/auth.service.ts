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
      // 判断当前用户名的 count 是否大于0 
    // 先根据用户名检索在数据库中是否存在
    const userBefore = await this.userService.findByNmae(name)
    console.log('userBefore')
    console.log(userBefore)
    if (userBefore) {
      if (userBefore.login_count > 5) {
        return null
      }
       // 登录记入次数
       await this.userService.update(userBefore.id, {
        loginCount: userBefore.login_count + 1
      }) 
    } else {
      return null
    }
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
