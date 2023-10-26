import { Controller, Get, Request, Post, UseGuards, Body, Delete, Param, Patch } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { NavLinkService } from './link.service';
import { AddLinkDto, UpdateLinkDto } from './dto/link.dto';

@Controller('nav/link')
export class NavLinkController {
  constructor(private readonly service: NavLinkService) {}
  @UseGuards(AuthGuard('jwt'))
  @Get()
  list() {
    return this.service.list()
  }
  @Get(':id')
  findByTitle(@Param('id') titleid) {
    return this.service.findByTitle(titleid)
  }
  @UseGuards(AuthGuard('jwt'))
  @Post()
  add(@Body() add: AddLinkDto) {
    return this.service.add(add);
  }
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  delete(@Param('id') id) {
    return this.service.delete(id);
  }
  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  patch(@Param('id') id, @Body() update: UpdateLinkDto) {
    return this.service.update(id, update);
  }
  @UseGuards(AuthGuard('jwt'))
  @Post('/update_list')
  async patchList(@Body() updateList: UpdateLinkDto[]) {
    for (let index = 0; index < updateList.length; index++) {
      const element = updateList[index];
      await this.service.update(element.id, element)
    }
  }
}
