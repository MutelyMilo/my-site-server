import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';

@Entity('users')
export abstract class Base extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
    comment: '创建时间',
  })
  createdAt: Date;
  
  @UpdateDateColumn({
    type: 'timestamp',
    name: 'update_at',
    comment: '更新时间',
  })
  updatedAt: Date;
}