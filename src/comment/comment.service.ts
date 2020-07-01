import { Injectable } from '@nestjs/common';
import { CommentEntity } from './comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDto } from '../message-board/dto/create.dto';

@Injectable()
export class CommentService {
  
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentEntityRepository: Repository<CommentEntity>
  ) {}
  
  async createComment(createCommentInput: CreateDto) {
    return this.commentEntityRepository.create({
      ...createCommentInput,
    }).save();
  }
}
