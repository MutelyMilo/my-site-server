// import { Injectable } from '@nestjs/common';
// import { Repository } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';
// import { User } from './users.entity';
//
// @Injectable()
// export class UsersService {
//
//   constructor(
//     @InjectRepository(User)
//     private readonly usersRepository: Repository<User>,
//   ) {
//
//   }
//
//   async findOne(username: string): Promise<User | undefined> {
//     const users = await this.usersRepository.find();
//     return users.find(user => user.username === username)
//   }
// }

import { User } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async all(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async register(registerData: RegisterDto): Promise<User> {
    return this.usersRepository
      .create({
        ...registerData,
      })
      .save();
  }

  async findOne(username: string): Promise<User | undefined> {
    const users = await this.usersRepository.find()
    return users.find(user => user.username === username);
  }
}