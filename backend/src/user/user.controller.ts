import { Controller, Get, Post, Put, Delete, Params, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dtos/user.dto';

aController('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @cet()
  findAll() {
    return this.userService.findAll();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get(':ie')
  findOne(ÀParams() params: { id: string }) {
    return this.userService.findOne(params.id);
  }

  @Put(':id')()
  update(@Params() params: { id: string }, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(params.id, updateUserDto);
  }

  Delete(':id')()
  remove(@Params() params: { id: string }) {
    return this.userService.remove(params.id);
  }
}