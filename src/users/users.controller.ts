import { UsersService } from './users.service';
import { User } from './users.entity';
import { CreateUserDto } from './dto/createUser.dto';
import { Body, Controller, Delete, Get, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdateDto } from './dto/update.dto';
import { DeleteUserDto } from './dto/deleteUser.dto';

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
  async register(@Body() registerDto: CreateUserDto): Promise<User> {
    return this.usersService.register(registerDto)
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.usersService.login(loginDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch()
  async update(@Body() updateDto: UpdateDto, @Request() req: { user: User }) {
    const id = req.user.id;
    console.log(id);
    return this.usersService.update(id, updateDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('checkToken')
  getProfile(@Request() req: { user: User }) {
    return req.user;
  }

  @Delete()
  deleteUser(@Body() deleteUserDto: DeleteUserDto) {
    console.log(deleteUserDto);
    return this.usersService.deleteUser(deleteUserDto)
  }
}
