import { Controller, Get, Request, Post, UseGuards, Body, Delete, Param, Patch } from '@nestjs/common';
import { NavTitleService } from './title.service';
import { AddTitleDto, UpdateTitleDto } from './dto/entity.dto';
import { Public } from 'src/auth/directive/public.directive';

@Controller('nav/title')
export class NavTitleController {
  constructor(private readonly service: NavTitleService) {}
  @Public()
  @Get()
  list() {
    return this.service.list()
  }
  @Post()
  add(@Body() add: AddTitleDto) {
    return this.service.add(add);
  }
  @Delete(':id')
  delete(@Param('id') id) {
    return this.service.delete(id);
  }
  @Patch(':id')
  patch(@Param('id') id, @Body() update: UpdateTitleDto) {
    return this.service.update(id, update);
  }
}
