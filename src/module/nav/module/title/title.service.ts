import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NavTitleEntity } from './entity/title.entity';
import { AddTitleDto, UpdateTitleDto } from './dto/entity.dto';

export type User = any;

@Injectable()
export class NavTitleService {
  constructor(
    @InjectRepository (NavTitleEntity) private readonly repository: Repository<NavTitleEntity>,
  ) {
  }

  list() {
    return this.repository.find()
  }
  async add(addLinkDto: AddTitleDto): Promise<any> {
    return await this.repository.save(addLinkDto);
  }
  
  async update(id: number, updateLinkDto: UpdateTitleDto): Promise<any> {
    return await this.repository.update(id, updateLinkDto);
  }
  async delete(id: number): Promise<any> {
    return await this.repository.delete(id);
  }
}
