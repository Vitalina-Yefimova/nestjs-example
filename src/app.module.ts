import { Module } from '@nestjs/common'; // Module - это декоратор, который помечает класс как модуль NestJS, который может содержать контроллеры и провайдеры
import { AppController } from './app.controller'; // AppController - это контроллер, который обрабатывает HTTP-запросы и возвращает ответы
import { AppService } from './app.service'; // AppService - это сервис, который содержит бизнес-логику приложения и может быть внедрён в контроллеры и другие сервисы
import { PrismaModule } from './prisma/prisma.module'; // PrismaModule - это модуль, который предоставляет доступ к базе данных через Prisma Client
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module'; // UserModule - это модуль, который содержит контроллеры и сервисы для работы с пользователями

@Module({
  imports: [UserModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
