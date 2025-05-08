import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service'; // Импорт UserService, который содержит бизнес-логику для работы с пользователями

@Controller('users') // Декоратор, который указывает, что этот контроллер будет обрабатывать запросы на маршрут '/users'
export class UserController {
  constructor(private readonly userService: UserService) {} // Внедрение сервиса UserService в контроллер через конструктор

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id);
  }

  @Post()
  createUser(@Body() body: { email: string; name?: string; phone?: string }) {
    return this.userService.createUser(body);
  }

  @Put(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { name?: string; email: string; phone?: string },
  ) {
    return this.userService.updateUser(id, body);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id);
  }
}
