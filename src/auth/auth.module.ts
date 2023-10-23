import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from './local.strategy';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [UserModule, PassportModule],
  controllers: [],
  providers: [LocalStrategy, AuthService ],
  exports: []
})
export class AuthModule {}
