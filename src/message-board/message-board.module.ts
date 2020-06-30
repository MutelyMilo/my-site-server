import { Module } from '@nestjs/common';
import { MessageBoardService } from './message-board.service';

@Module({
  providers: [MessageBoardService]
})
export class MessageBoardModule {}
