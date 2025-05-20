import { Injectable } from '@nestjs/common';
import { constants } from 'buffer';
import { JwtService } from '@nestjs/jwt';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {//noEsRealJeje
  private readonly mockUser = {
    email: "user@breick.com",
    password: "123456", 
  };

  constructor(
    private jwtService: JwtService,
    private databaseService: DatabaseService,
    ){}

  async validateUser(email: string, password: string): Promise<any> {
    const userQuery = await this.databaseService.query(
      'SELECT * FROM users WHERE email = $1',
      [email],
    );
    const user = userQuery.rows[0];

    if (!user) {
        throw new Error('Usuario no encontrado');
    }
    
    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword){
        throw new Error ('Contraseña incorrecta')
    }

    if (!user) {
      throw new Error('Usuario no encontrado');
    }


    return { email: user.email }; 
  } 
  
  
  async login(user:any){
    const payload = {email: user.Email};
    return{
        access_token: this.jwtService.sign(payload),
    };
  }
}