import { LoginUserDto } from './dto/login-user-dto';
export declare class LoginService {
    validateUser(user: LoginUserDto, userTrue: LoginUserDto): Promise<true | "error 2">;
}
