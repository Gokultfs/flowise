import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

[@module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USERNAME || 'user',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'aiassistant_db',
      autoLoadEntities: true,
      synchronize: true, // In production, use migrations instead of synchronize: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
