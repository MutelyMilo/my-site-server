import { User } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register.dto';
import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import jwt from 'jsonwebtoken';
import configuration from '../config/configuration';

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

  async findOne(email: string): Promise<User | undefined> {
    const users = await this.usersRepository.find()
    return users.find(users => users.email === email);
  }

  async login(data: LoginDto) {
    const payload = { email: data.email, password: data.password };
    return {
      token: jwt.sign(payload, configuration.auth.secretKey, { expiresIn: '1min' })
    };
  }
}