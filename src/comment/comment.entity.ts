import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { Base } from '../common/base.entity';
import { MessageBoardEntity } from '../message-board/message-board.entity';

@Entity('comments')

export class CommentEntity extends Base {
  @PrimaryColumn()
  id: number
  
  @Column()
  body: string
  
  @ManyToOne(
    () => MessageBoardEntity,
    message => message.comments,
    { eager: true },
  )
  message: MessageBoardEntity;
}