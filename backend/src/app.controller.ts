import { Controller, Post, Body, Get } from '@nestjs/common';
import { AppService } from './app.service';

[@controller('api') // Prefix all routes with /api
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('chat')
  async handleChat(@BBody('query')] query: string): Promise<{ response: string }> {
    // In a real application, you'd also pass user context, session ID, etc.
    const flowiseResponse = await this.appService.queryFlowise(query);
    return { response: flowiseResponse };
  }

  @Get('health')
  getHealth(): string {
    return 'BFF is healthy!';
  }
}