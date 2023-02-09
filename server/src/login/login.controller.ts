import { Controller, Post, Req } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { LoginService } from 'src/login/login.service';

@Controller('login')
export class LoginController {
  constructor(
    private readonly loginService: LoginService,
    private authService: AuthService,
  ) {}

  @Post()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async login(@Req() req) {
    let user = (req as any).rawBody;
    let result;
    user = JSON.parse(user);
    const userTrue = await this.authService.findUserByEmail(user.email);
    if (userTrue === 'error 1') {
      result = userTrue;
      return { err: 'error 1' };
    } else {
      result = await this.loginService.validateUser(user, userTrue);
      if (result != 'error 2') {
        return result;
      } else {
        return { err: 'error 2' };
      }
    }
  }
}
