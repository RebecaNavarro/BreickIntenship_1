import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DatabaseService } from './database/database.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  exports: [DatabaseService],
  providers: [DatabaseService],
})
export class AppModule {}
