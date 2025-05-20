import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { DatabaseService } from 'src/database/database.service';
import { AppModule } from 'src/app.module';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService, DatabaseService],
  exports: [DatabaseService],
})
export class UsersModule {}
