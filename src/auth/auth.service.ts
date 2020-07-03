import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import bcrypt from 'bcrypt';
import { LoginDto } from '../users/dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user) {
      const match = await bcrypt.compare(pass, user.password);
      if (match) {
        const { password, ...result } = user;
        return result;
      } else {
        throw new UnauthorizedException("Password is wrong.");
      }
    }
    return null
  }

  async login(data: LoginDto) {
    const payload = { email: data.email, password: data.password };
    return {
      token: this.jwtService.sign(payload)
    };
  }
}
