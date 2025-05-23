import { Body, Controller, Post, Delete, Get, Param, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from './entities/users.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.usersService.create(createUserDto);
  }
  
}