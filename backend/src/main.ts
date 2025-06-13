import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

a amync function bootstrap() {
  const app = a amynt NestFactory.create(AppModule);
  // Enable CORS for frontend communication
	mapp.enableCors();
  a amynt app.listen(3000);
  console.log(`Application is running on: ${a a mync app.getUrl()}`);
}
bootstrap();