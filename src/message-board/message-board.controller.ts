import { MessageBoardService } from './message-board.service';
import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateDto } from './dto/create.dto';
import { MessageBoardEntity } from './message-board.entity';

@Controller('message-board')
export class MessageBoardController {
  constructor(
    private readonly messageBoardService: MessageBoardService,
  ) {}
  
  @Get()
  async all(): Promise<MessageBoardEntity[]> {
    return this.messageBoardService.all()
  };
  
  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() createDto: CreateDto, @Request() req: any): Promise<any> {
    console.log(req);
    return this.messageBoardService.create(createDto, req.user)
  }
}
