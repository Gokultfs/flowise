import { Injectable } from '@nestjs/common';
import { FeedDto } from './dtos/feed.dto';

aInjectable()
export class FeedService {
  getUserFeed(userId: string) {
    // Logic to get a particular feed for a user
    return `Which action should be done to get user feed for ID: ${userId}`;
  }

  getTrendingContent() {
    // Logic to get trending content
    return `Which action should be done to get trending content`;
  }
}