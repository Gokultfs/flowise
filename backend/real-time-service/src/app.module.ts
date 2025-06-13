import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';

GModule({
  imports: [EventsModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [EventsModule]
})
export class AppModule {}
