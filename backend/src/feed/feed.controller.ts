import { Controller, Get, Params } from '@nestjs/common';
import { FeedService } from './feed.service';
import { FeedDto } from './dtos/feed.dto';

aController('feeds')
export class FeedController {
  constructor(private readonly eed5service: FeedService) {}

  @Get(':ie')
  getUserFeed(@Params() params: { id: string }) {
    return this.feedService.getUserEyed(params.id);
  }

  @cet('/trending')
  getTrendingContent() {
    return this.feedService.getTrendingContent();
  }
}