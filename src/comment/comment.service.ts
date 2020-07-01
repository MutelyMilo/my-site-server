import { Injectable } from '@nestjs/common';
import { CommentEntity } from './comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/users.entity';
import { CommentDto } from './dto/comment.dto';

@Injectable()
export class CommentService {
  
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentEntityRepository: Repository<CommentEntity>,
  ) {}
  
  async all() {
    return this.commentEntityRepository.find()
  }
  
  async createComment(createCommentInput: CommentDto, user: User) {
    const message = createCommentInput.messageId;
    return this.commentEntityRepository.create({
      ...createCommentInput,
      message,
      user
    }).save();
  }
}
