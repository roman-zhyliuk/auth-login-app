import { AuthService } from 'src/auth/auth.service';
import { LoginService } from 'src/login/login.service';
export declare class LoginController {
    private readonly loginService;
    private authService;
    constructor(loginService: LoginService, authService: AuthService);
    login(req: any): Promise<any>;
}
