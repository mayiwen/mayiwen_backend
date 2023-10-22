import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('login_user')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({type: 'varchar', name: 'login_name'})
  name: string;
  @Column({type: 'varchar', name: 'login_password'})
  password: string;
  @Column({type: 'varchar', name: 'login_password2'})
  password2: string;
  @Column({type: 'integer', name: 'login_count'})
  loginCount: number;
}
