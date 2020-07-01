import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { Base } from '../common/base.entity';
import { User } from '../users/users.entity';
import { CommentEntity } from '../comment/comment.entity';

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
  
  @OneToMany(
    () => CommentEntity,
    comments => comments.message
  )
  comments: CommentEntity
}