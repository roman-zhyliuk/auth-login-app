/* eslint-disable prettier/prettier */

// Data transfer object for updated info about user
export class UpdateUserDto {
  readonly nickname: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly password: string;
  readonly passwordRepeat: string;
}
