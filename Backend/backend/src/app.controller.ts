import { Controller, Get, UseGuards, Request} from '@nestjs/common';
import { AuthGuard } from './auth/auth.guard';

@Controller()
export class AppController {
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req:any) {
    return req.user; 
  }
}
