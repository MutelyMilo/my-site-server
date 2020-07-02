import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { Base } from '../common/base.entity';
import { User } from '../users/users.entity';
import { CommentEntity } from '../comment/comment.entity';

@Entity('message-board')
export class MessageBoardEntity extends Base {

  @Column("varchar")
  body: string

  @ManyToOne(
    () => User,
    user => user.message,
    { eager: true },
  )
  user: User;

  @OneToMany(
    () => CommentEntity,
    comment => comment.message
  )
  comment: CommentEntity[]
}