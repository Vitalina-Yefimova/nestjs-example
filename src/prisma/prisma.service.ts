import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  // PrismaService - это сервис, который предоставляет доступ к базе данных через Prisma Client
  // OnModuleInit - это интерфейс, который позволяет выполнять код после инициализации модуля
  // PrismaClient - это класс, который предоставляет методы для работы с базой данных через Prisma Client
  async onModuleInit(): Promise<void> {
    await this.$connect();
  }
}
// $connect - это метод, который устанавливает соединение с базой данных
