import { IsNotEmpty } from 'class-validator';
import { MessageBoardEntity } from '../../message-board/message-board.entity';


export class CommentDto {
  @IsNotEmpty()
  messageId: MessageBoardEntity
  
  @IsNotEmpty()
  body: string
}