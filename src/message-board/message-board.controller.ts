import { MessageBoardService } from './message-board.service';
// import { User } from './message-board.entity';
import {
  Body,
  Controller,
  // Get,
  Post,
  Request,
  UseGuards,
  // UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateDto } from './dto/create.dto';

@Controller('message-board')
export class MessageBoardController {
  constructor(
    private readonly messageBoardService: MessageBoardService,
  ) {}
  
  // @Get()
  // async all(): Promise<User[]> {
  //   return this.usersService.all()
  // };
  
  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  async create(@Body() createDto: CreateDto, @Request() req: any): Promise<any> {
    console.log(req);
    return this.messageBoardService.create(createDto, req.user)
  }
  
  // @Post('login')
  // async login(@Body() loginDto: LoginDto) {
  //   return this.authService.login(loginDto);
  // }
  //
  // @UseGuards(AuthGuard('jwt'))
  // @Get('checkToken')
  // getProfile(@Request() req: any) {
  //   return req.user;
  // }
}
