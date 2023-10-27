import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('link')
export class NavLinkEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', name: 'title'})
  title: string;

  @Column({type: 'varchar', name: 'src'})
  src: string;

  @Column({type: 'varchar', name: 'title_id'})
  titleId: number;

  @Column({type: 'int', name: 'index_link', default: 99999999})
  indexLink: number;
}
