import { Test, TestingModule } from '@nestjs/testing';
// Test - это класс, который предоставляет методы для создания тестов и их выполнения
// TestingModule - это класс, который предоставляет методы для создания тестового модуля и его компиляции
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
