import bcrypt from 'bcrypt';
import { Entity, Column, BeforeInsert, PrimaryColumn, OneToMany } from 'typeorm';
import { Base } from '../common/base.entity';
import { IsEmail } from 'class-validator';
import { MessageBoardEntity } from '../message-board/message-board.entity';

@Entity('users')
export class User extends Base {
  @PrimaryColumn()
  id: number
  
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
  
  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}