import { Module } from '@nestjs/common';
import { NavTitleModule } from './module/title/title.module';
import { NavLinkModule } from './module/link/Link.module';
import { NavMayiwenUpdateModule } from './module/mayiwen-update/mayiwen-update.module';

@Module({
  imports: [NavTitleModule, NavLinkModule],
  providers: [],
  exports: []
})
export class NavModule {}
