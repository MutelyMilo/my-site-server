import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../users/dto/login.dto';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (!user) return
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const { ...result } = user;
      return result;
    }
    return null;
  }

  async login(loginDto: LoginDto) {
    return {
      access_token: this.jwtService.sign(loginDto),
    };
  }
}
