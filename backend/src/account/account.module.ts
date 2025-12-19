import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Account } from './account.entity';
import { AccountService } from './account.service';
import { AccountControl

import { AccountTokenModule } from './token/account-token.module';