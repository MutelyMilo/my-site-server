import { UsersService } from './users.service';
import { User } from './users.entity';
import { RegisterDto } from './dto/register.dto';
import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { LoginDto } from './dto/login.dto';
// import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { LocalAuthGuard } from '../auth/local-auth.guard';

@Controller('user')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService
  ) {}

  @Get()
  async all(): Promise<User[]> {
    return this.usersService.all()
  };

  @Post('register')
  async register(@Body() registerDto: RegisterDto): Promise<User> {
    return this.usersService.register(registerDto)
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('checkToken')
  checkToken(@Request() req: any) {
    return req.user;
  }
}
