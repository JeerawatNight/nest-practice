import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'DESKTOP-8JM566T\\SQLEXPRESS',
      port: 1433,
      username: 'Night',
      password: '1234',
      database: 'User',
      autoLoadEntities: true, // Automatically load entities
      synchronize: true, // Automatically sync entities with database, disable in production
      options: {
        encrypt: false,
        trustServerCertificate: true,
      },
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
