/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user-dto';

@Injectable()
export class LoginService {
  async validateUser(user: LoginUserDto, userTrue: LoginUserDto) { 
    if(user.password == userTrue.password) {
      return true
    } else {
      // error 2: wrong password
      return 'error 2'
    }
  } 
}
