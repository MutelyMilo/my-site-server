import { Entity, Column, ManyToOne } from 'typeorm';
import { Base } from '../common/base.entity';
import { User } from '../users/users.entity';

@Entity('messageBoard')
export class MessageBoardEntity extends Base {
  
  @Column("varchar")
  body: string
  
  @ManyToOne(
    () => User,
    user => user.message,
    { eager: true },
  )
  user: User;
}