import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user-dto.dto';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  async list() {
    let res = await this.service.list()
    console.log(res)
    return res
  }
  @Post()
  save(@Body() body: UserDto) {
    this.service.add(body)
  }
}
