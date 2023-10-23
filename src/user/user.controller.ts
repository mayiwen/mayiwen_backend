import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user-dto.dto';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  async list() {
    let res = await this.service.list()
    return res
  }
  @Post()
  save(@Body() body: UserDto) {
    return this.service.add(body)
  }
  @Delete(':id')
  async delete(@Param() params, @Param('id') id: number) {
    return this.service.delete(id)
  }
  @Patch(':id')
  patch(@Param('id') id, @Body() update: UserDto) {
    return this.service.update(id, update);
  }


}
