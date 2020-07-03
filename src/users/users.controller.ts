import { UsersService } from './users.service';
import { User } from './users.entity';
import { RegisterDto } from './dto/register.dto';
import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('user')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Get()
  async all(): Promise<User[]> {
    return this.usersService.all()
  };

  @Post('register')
  async register(@Body() registerDto: RegisterDto): Promise<User> {
    return this.usersService.register(registerDto)
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.usersService.login(loginDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('checkToken')
  getProfile(@Request() req: any) {
    return req.user;
  }
}
