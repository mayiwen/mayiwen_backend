import { Controller, Get, Post, UseGuards, Request, All } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { Public } from './auth/directive/public.directive';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly authService: AuthService) {}
  @Public()
  @All()
  getHello(): string {
    return this.appService.getHello();
  }
  // @UseGuards(AuthGuard('local')) Bearer
  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
  
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
