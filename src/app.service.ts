import { Injectable } from '@nestjs/common';
// Injectable - это декоратор, который помечает класс как сервис, который может быть внедрен в другие классы
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  // AppService - это класс, который содержит бизнес-логику приложения и может быть внедрён в контроллеры и другие сервисы
  constructor(private readonly prisma: PrismaService) {}
  async getHello(): Promise<string> {
    return 'Hello World!';
  }
}
