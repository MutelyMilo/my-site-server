import { Module } from '@nestjs/common';
import { MessageBoardService } from './message-board.service';
import { MessageBoardController } from './message-board.controller';
import { JwtModule } from '@nestjs/jwt';
import configuration from '../config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageBoardEntity } from './message-board.entity';

@Module({
  imports: [
    JwtModule.register({ secret: configuration.auth.secretKey }),
    TypeOrmModule.forFeature([MessageBoardEntity])
  ],
  controllers: [MessageBoardController],
  providers: [MessageBoardService],
  exports: [MessageBoardService]
})
export class MessageBoardModule {}
