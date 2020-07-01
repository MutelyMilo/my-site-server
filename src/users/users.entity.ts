import bcrypt from 'bcrypt';
import { Entity, Column, BeforeInsert, PrimaryColumn, OneToMany } from 'typeorm';
import { Base } from '../common/base.entity';
import { IsEmail } from 'class-validator';
import { MessageBoardEntity } from '../message-board/message-board.entity';
import { CommentEntity } from '../comment/comment.entity';

@Entity('users')
export class User extends Base {
  @PrimaryColumn()
  id: number
  
  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  username: string;

  @Column('varchar', { select: false })
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