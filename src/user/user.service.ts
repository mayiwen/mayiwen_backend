import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { AddUserDto, UserDto } from './dto/user-dto.dto';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository (UserEntity) private readonly repository: Repository<UserEntity>,
  ) {
  }
  getHello(): string {
    return 'this is hello router get';
  }
  postHello(): string {
    return 'this is hello router post';
  }
  /**
   * sql: select * from login_user
   */
  async list() {
    return await this.repository.find();
  }
  /**
   * 
   * @param add 
   * @returns 
   * sql: INSERT INTO login_user (login_name,login_password,login_password2,login_count) VALUES('hello',1,11,0);
   */
  async add(add: AddUserDto): Promise<any> {
    return await this.repository.save(add);
  }
  /**
   * 
   * @param id 
   * @returns 
   * DELETE FROM login_user WHERE id = 9;
   */
  async delete(id: number):Promise<any> {
    return await this.repository.delete(id);
  }
  /**
   * sql UPDATE "login_user" SET "login_name" = $1, "login_password" = $2, "login_password2" = $3, "login_count" = $4 WHERE "id" IN ($5) -- PARAMETERS: ["mayiwen12","12345612","1234567812",0,"12"]
   */
  async update(id: number, updateUser: UserDto) {
    return this.repository.update(id, updateUser)
  }
  /**
   * 
   * @param name 用户名
   * @param password 密码
   * @returns 
   * select * from login_user where login_name = 'mayiwen12' and login_password = '12345612'
   */
  async findOne(name: string, password: string) {
    let res = await this.repository.query(
      `select * from login_user where login_name = '${name}' and login_password = '${password}'`
    )
    if (res && res.length > 0) {
      return res[0]
    } else{
      return null
    }
    ;
  }
}
