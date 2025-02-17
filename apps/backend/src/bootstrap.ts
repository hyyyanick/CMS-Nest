import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

export const bootstrap = async () => {
  const app: INestApplication = await NestFactory.create(AppModule);
  await app.listen(3000);
};
