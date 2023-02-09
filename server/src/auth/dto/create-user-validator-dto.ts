/* eslint-disable prettier/prettier */
import { IsAlpha, IsEmail, IsNotEmpty, IsStrongPassword, MinLength } from 'class-validator';

export class RegistrationDtoUser {
  @IsNotEmpty()
  @MinLength(5)
  username: string

  @IsNotEmpty()
  @IsAlpha()
  firstName: string;

  @IsNotEmpty()
  @IsAlpha()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MinLength(8)
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @MinLength(8)
  @IsStrongPassword()
  @IsNotEmpty()
  passwordRepeat: string
}
