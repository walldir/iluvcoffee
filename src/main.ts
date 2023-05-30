import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // this will remove any properties that are not in the DTO
      forbidNonWhitelisted: true, // this will throw an error if there are properties that are not in the DTO
      transform: true, // this will transform the incoming data to the DTO type
      transformOptions: {
        enableImplicitConversion: true, // this will convert the incoming data to the DTO type even if the types don't match
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
