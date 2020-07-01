import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { Base } from '../common/base.entity';
import { MessageBoardEntity } from '../message-board/message-board.entity';
import { User } from '../users/users.entity';

@Entity('comments')

export class CommentEntity extends Base {
  @PrimaryColumn()
  id: number
  
  @Column()
  body: string
  
  @ManyToOne(
    () => MessageBoardEntity,
    message => message.comment,
    { eager: true },
  )
  message: MessageBoardEntity;
  
  @ManyToOne(
    () => User,
    user => user.message,
    { eager: true },
  )
  user: User;
}