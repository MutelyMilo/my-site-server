import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentEntity } from './comment.entity';
import { AuthGuard } from '@nestjs/passport';
import { CommentDto } from './dto/comment.dto';

@Controller('comment')
export class CommentController {
  constructor(
    private readonly commentService: CommentService
  ) {}
  
  @Get()
  async all(): Promise<CommentEntity[]> {
    return this.commentService.all()
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Post()
  async createComment(@Body() createCommentDto: CommentDto, @Request() req: any): Promise<CommentEntity> {
    return this.commentService.createComment(createCommentDto, req.user)
  }
}
