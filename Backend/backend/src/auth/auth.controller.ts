import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body:LoginDto) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) {
      return { message: 'Credenciales inválidas' };
    }
    return this.authService.login(user);
  }
}