import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import bcrypt from 'bcrypt';
import { LoginDto } from '../users/dto/login.dto';
import jwt from 'jsonwebtoken';
import configuration from '../config/configuration';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    console.log(123123123);
    const user = await this.usersService.findOne(email);
    if (!user) return
    const match = await bcrypt.compare(pass, user.password);
    if (match) {
      const { ...result } = user;
      return result;
    }
    return null;
  }

  async login(data: LoginDto) {
    return {
      token: jwt.sign(data, configuration.auth.secretKey, { expiresIn: '1d' })
    };
  }
}
