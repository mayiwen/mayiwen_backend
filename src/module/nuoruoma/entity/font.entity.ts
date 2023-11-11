import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('font')
export class FontEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', name: 'zi'})
  /** 单字 */
  zi: string;

  @Column({type: 'varchar', name: 'pinyin'})
  /** 拼音 */
  pinyin: string;

  @Column({type: 'varchar', name: 'bihua'})
  /** 笔画 */
  bihua: string;

  @Column({type: 'varchar', name: 'level'})
  /** 等级 */
  level: string;
  
  @Column({type: 'varchar', name: 'ma1'})
  /** 第1码 */
  ma1: string;
  
  @Column({type: 'varchar', name: 'ma2'})
  /** 第1码 */
  ma2: string;
  
  @Column({type: 'varchar', name: 'ma3'})
  /** 第1码 */
  ma3: string;
  
  @Column({type: 'varchar', name: 'ma4'})
  /** 第1码 */
  ma4: string;
  
  @Column({type: 'varchar', name: 'ma5'})
  /** 第1码 */
  ma5: string;


  @Column({type: 'varchar', name: 'zigen'})
  /** 字根 */
  zigen: string;

  @Column({type: 'varchar', name: 'bihuama'})
  /** 笔画码 */
  bihuama: string;

}
