import bcrypt from 'bcrypt';
import { Entity, Column, BeforeInsert, OneToMany } from 'typeorm';
import { Base } from '../common/base.entity';
import { IsEmail } from 'class-validator';
import { MessageBoardEntity } from '../message-board/message-board.entity';
import { CommentEntity } from '../comment/comment.entity';

@Entity('users')
export class User extends Base {

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  username: string;

  @Column('varchar')
  password: string;


  @OneToMany(
    () => MessageBoardEntity,
    message => message.user,
  )
  message: MessageBoardEntity[];

  @OneToMany(
    () => CommentEntity,
    comment => comment.user,
  )
  comment: CommentEntity[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}