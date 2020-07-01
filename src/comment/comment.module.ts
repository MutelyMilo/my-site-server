import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { JwtModule } from '@nestjs/jwt';
import configuration from '../config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentEntity } from './comment.entity';

@Module({
  imports: [
    JwtModule.register({ secret: configuration.auth.secretKey }),
    TypeOrmModule.forFeature([CommentEntity])
  ],
  providers: [CommentService],
  controllers: [CommentController],
  exports: [CommentService]
})
export class CommentModule {}
