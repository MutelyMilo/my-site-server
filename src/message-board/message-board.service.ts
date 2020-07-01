import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageBoardEntity } from './message-board.entity';
import { Repository } from 'typeorm';
import { CreateDto } from './dto/create.dto';
import { User } from '../users/users.entity';

@Injectable()
export class MessageBoardService {
  constructor(
    @InjectRepository(MessageBoardEntity)
    private readonly messageBoardEntityRepository: Repository<MessageBoardEntity>,
  ) {}
  
  async all(): Promise<MessageBoardEntity[]> {
    return this.messageBoardEntityRepository.find()
  }
  
  async create(createDto: CreateDto, user: User): Promise<MessageBoardEntity> {
    return this.messageBoardEntityRepository
      .create({
        ...createDto,
        user
      })
      .save();
  }
}
