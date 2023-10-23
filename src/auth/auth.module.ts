import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from './local.strategy';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports: [UserModule, PassportModule, JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }),],
  controllers: [],
  providers: [LocalStrategy, AuthService ],
  exports: [AuthService]
})
export class AuthModule {}
