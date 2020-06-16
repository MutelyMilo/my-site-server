import bcrypt from 'bcrypt';
import { Entity, Column, BeforeInsert, PrimaryColumn } from 'typeorm';
import { Base } from '../common/base.entity';

@Entity('users')
export class User extends Base {
  @PrimaryColumn()
  id: number
  
  @Column()
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