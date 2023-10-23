import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HelloModule } from './module/nav/module/hello/hello.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [HelloModule, UserModule,AuthModule,
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'mayiwen',
    autoLoadEntities: true,
    /** 生产环境应该禁用这个 */
    synchronize: true,
    /** 是否打印日志 */
    logging: true

  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
