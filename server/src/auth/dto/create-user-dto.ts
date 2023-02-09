/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier

// Data transfer object for new user
export class CreateUserDto {
    readonly nickname: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly password: string;
    readonly passwordRepeat: string;
}