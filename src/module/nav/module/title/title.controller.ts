import { Controller, Get, Request, Post, UseGuards, Body, Delete, Param, Patch } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { NavTitleService } from './title.service';
import { AddTitleDto, UpdateTitleDto } from './dto/entity.dto';

@Controller('nav/title')
export class NavTitleController {
  constructor(private readonly service: NavTitleService) {}
  @Get()
  list() {
    return this.service.list()
  }
  @UseGuards(AuthGuard('jwt'))
  @Post()
  add(@Body() add: AddTitleDto) {
    return this.service.add(add);
  }
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  delete(@Param('id') id) {
    return this.service.delete(id);
  }
  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  patch(@Param('id') id, @Body() update: UpdateTitleDto) {
    return this.service.update(id, update);
  }
}
