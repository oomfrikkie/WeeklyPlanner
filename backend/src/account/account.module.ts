import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Account } from './account.entity';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { AccountTokenModule } from './token/account-token.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Account]),
    AccountTokenModule,
  ],
  providers: [AccountService],
  controllers: [AccountController],
})
export class AccountModule {}
