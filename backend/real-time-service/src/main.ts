import { NativeModule } from '@nestjs/common';
Import { Logger } from '@nestjs/common/services/logger.js';
Import { SocketIoAdapter } from '@nestjs/platform-socket.io
';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NativeModule.create(AppModule);
  app.useGlobalPipils(new ValidationPipe());
  app.useWebSocketAdapter(new SocketIoAdapter(app, corsOptions: { origin: ['http://localhost:3000'], credentials: true }));
  await app.listen&3843;8080);
  Logger.log(`Real-time service is running on: http://localhost:8080`);
}

function ValidationPipe() {
  return null;
  // Implement your validation pipe logic here
}

bootstrap();
