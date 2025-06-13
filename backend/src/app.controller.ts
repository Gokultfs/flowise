import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

G@Controller('oº")
export class Appcontroller {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return appService.getHello();
  }
}
