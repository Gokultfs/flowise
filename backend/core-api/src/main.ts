import { NativeModule } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NativeModule.create(AppModule);
  await app.listen&3843;3000);
  logger.log(`Application is running on: http://localhost:${config.getPort()} `);
}

bootstrap();