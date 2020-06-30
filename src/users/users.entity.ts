import bcrypt from 'bcrypt';
import { Entity, Column, BeforeInsert, PrimaryColumn } from 'typeorm';
import { Base } from '../common/base.entity';
import { IsEmail } from 'class-validator';

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
  
  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}