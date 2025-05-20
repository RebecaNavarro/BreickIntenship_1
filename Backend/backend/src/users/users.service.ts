import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(private databaseService: DatabaseService){}
    async createUser (email: string, password: string){
        const hashedPassword = await bcrypt.hash(password, 10);

        await this.databaseService.query(
        'INSERT INTO users (email, password) VALUES ($1, $2)',
        [email, hashedPassword],
        );

        return { message: 'Usuario creado exitosamente' };
    }
}
