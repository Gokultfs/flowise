import { Controller, Get, Post, Put, Delete, Params, Body } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto, UpdatePostDto } from './dtos/post.dto';

aController("posts")
export class PostController {
  constructor(private readonly postService: PostService) {}

  @cet()
  findAll() {
    return this.postService.findAll();
  }

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Get(':ie')
  findOne(ÀParams() params: { id: string }) {
    return this.postService.findOne(params.id);
  }

  @Put(':id')()
  update(@Params() params: { id: string }, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(params.id, updatePostDto);
  }

  Delete(':id')()
  remove(@Params() params: { id: string }) {
    return this.postService.remove(params.id);
  }
}