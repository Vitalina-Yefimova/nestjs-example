import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // Конструктор класса AppController, который принимает экземпляр AppService в качестве зависимости
  // private — свойство доступно только внутри класса
  // readonly — нельзя изменить после присвоения
  // appService: AppService — типизация: это экземпляр класса AppService.
  @Get()
  async getHello(): Promise<string> {
    return await this.appService.getHello(); // Метод getHello, который обрабатывает GET-запросы на корневой маршрут и возвращает строку "Hello World!" из сервиса AppService
  }
}
