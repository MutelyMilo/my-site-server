import { User } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import jwt from 'jsonwebtoken';
import configuration from '../config/configuration';
import { UpdateDto } from './dto/update.dto';
import { DeleteUserDto } from './dto/deleteUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async all(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async register(registerData: CreateUserDto): Promise<User> {
    return this.usersRepository
      .create({
        ...registerData,
      })
      .save();
  }

  async findOne(email: string): Promise<User | undefined> {
    const users = await this.usersRepository.find()
    return users.find(users => users.email === email);
  }

  async login(data: LoginDto) {
    const payload = { email: data.email, password: data.password };
    return {
      token: jwt.sign(payload, configuration.auth.secretKey, { expiresIn: '1d' })
    };
  }

  async update(id: number, updateDto: UpdateDto): Promise<UpdateResult> {
    // 这里必须解构，拿到需要的字段，否则如果客户端发送冗余字段后会 500
    const { username } = updateDto;
    return this.usersRepository.update(id, { username })
  }

  async deleteUser(deleteUserDto: DeleteUserDto) {
    return await this.usersRepository.delete(deleteUserDto.id)
  }
}