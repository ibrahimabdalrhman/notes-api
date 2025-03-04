import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoldersModule } from './folders/folders.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', 
      password: 'pass123', 
      database: 'notes-api', 
      autoLoadEntities: true,
      synchronize: true, 
    }),    
    FoldersModule, FoldersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
