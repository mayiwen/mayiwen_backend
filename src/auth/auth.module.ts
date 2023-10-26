import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from './local.strategy';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './guard/jwt-auth.guard';

@Module({
  imports: [UserModule, PassportModule.register({ defaultStrategy: 'jwt' }), JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '3000s' },
  }),],
  controllers: [],
  providers: [LocalStrategy, AuthService, JwtStrategy, 
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },],
  exports: [AuthService]
})
export class AuthModule {}
