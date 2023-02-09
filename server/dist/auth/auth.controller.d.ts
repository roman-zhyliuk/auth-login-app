import { UpdateUserDto } from './dto/update-user-dto';
import { AuthService } from './auth.service';
import { User } from './schemas/user-schema';
import { RegistrationDtoUser } from './dto/create-user-validator-dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getAllUsers(): Promise<User[]>;
    getOneUser(id: string): Promise<User>;
    createUser(req: RegistrationDtoUser): Promise<{
        err: import("class-validator").ValidationError[];
    } | {
        err: string;
    }>;
    remove(id: string): Promise<User>;
    updateUserInfo(updateUserDto: UpdateUserDto, id: string): Promise<User>;
}
