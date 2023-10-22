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
  async delete(id: number):Promise<any> {
    return await this.repository.delete(id);
  }
}
