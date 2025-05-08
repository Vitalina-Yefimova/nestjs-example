import { NestFactory } from '@nestjs/core'; // NestFactory - это класс, который создает приложение NestJS
import { AppModule } from './app.module'; // AppModule - это главный модуль приложения, который импортирует все остальные модули

async function bootstrap() {
  // Асинхронная функция bootstrap, которая запускает приложение NestJS
  const app = await NestFactory.create(AppModule); // Инициализация приложения
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().catch((err) => {
  console.error('Error during application bootstrap:', err);
});
