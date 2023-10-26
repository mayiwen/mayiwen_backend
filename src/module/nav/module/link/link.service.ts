import { Body, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NavLinkEntity } from './entity/link.entity';
import { AddLinkDto, UpdateLinkDto } from './dto/link.dto';

export type User = any;

@Injectable()
export class NavLinkService {
  private readonly users: User[];

  constructor(
    @InjectRepository (NavLinkEntity) private readonly repository: Repository<NavLinkEntity>,
  ) {
  }

  list() {
    return this.repository.find()
  }
  findByTitle(titleid: number) {
    return this.repository.query('select * from link where title_id = ' + titleid + ' ORDER BY index_link')
  }
  async add(addLinkDto: AddLinkDto): Promise<any> {
    return await this.repository.save(addLinkDto);
  }
  
  async update(id: number, updateLinkDto: UpdateLinkDto): Promise<any> {
    return await this.repository.update(id, updateLinkDto);
  }
 
  async delete(id: number): Promise<any> {
    return await this.repository.delete(id);
  }
  
}
