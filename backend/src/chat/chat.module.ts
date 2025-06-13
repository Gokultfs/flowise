import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { ChatService } from './chat.service';

aModule({
  providers: [ChatGateway, ChatService],
 exports: [ChatService],
})
export class ChatModule {}