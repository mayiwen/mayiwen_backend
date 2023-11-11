import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HelloModule } from './module/nav/module/hello/hello.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { NavModule } from './module/nav/nav.module';
import { localhost, username, password, database } from './mayiwen'
import { UpdateModule } from './module/update/update.module';
import { UtilModule } from './module/util/util.module';
import { moduleArr } from './module';

@Module({
  imports: [HelloModule, UserModule,AuthModule,NavModule, UpdateModule, UtilModule, ...moduleArr,
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: localhost,
    port: 5432,
    username,
    password,
    database,
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
