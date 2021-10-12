require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { createDocument } from './swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  SwaggerModule.setup('api/v1/', app, createDocument(app));
  await app.listen(process.env.PORT || 3000);
  console.info('SERVER IS RUNNING ON PORT', process.env.PORT || 3000);
}
bootstrap();
