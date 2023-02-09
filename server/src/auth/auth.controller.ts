/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { AuthService } from './auth.service';
import { User } from './schemas/user-schema';
import { RegistrationDtoUser } from './dto/create-user-validator-dto';

// New controller for getting and sending requests
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // handling GET request, main page, sending all info about users
  @Get()
  getAllUsers(): Promise<User[]> {
    return this.authService.getAllUsers();
  }

  // GET request for user id, sending all info about user
  @Get(':id')
  getOneUser(@Param('id') id: string): Promise<User> {
    return this.authService.getUserById(id);
  }

  // POST request, creates user using information provided
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Chache-Control', 'none')
  async createUser(@Req() req: RegistrationDtoUser) {
    const user = JSON.parse((req as any).rawBody);
    if (
      (await this.authService.findUserByUsername(user.username)) == 'error 1'
    ) {
      if ((await this.authService.findUserByEmail(user.email)) == 'error 1') {
        if (user.password == user.passwordRepeat) {
          const errors = await validate(user);
          console.log(errors, 'that is errors');
          if (errors.length > 0) {
            return { err: errors };
          } else {
            this.authService.createUser(user);
            return { err: 'user was created' };
          }
        } else {
          return { err: 'passwords are not equal' };
        }
      } else {
        return { err: 'User with this email already exists' };
      }
    } else {
      return { err: 'User with this username already exists' };
    }
  }

  // Remove user
  @Delete(':id')
  remove(@Param('id') id: string): Promise<User> {
    return this.authService.removeUser(id);
  }

  // Update user info
  @Put(':id')
  updateUserInfo(
    @Body() updateUserDto: UpdateUserDto,
    @Param('id') id: string,
  ): Promise<User> {
    return this.authService.updateUserInfo(id, updateUserDto);
  }
}
