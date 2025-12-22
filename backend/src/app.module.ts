import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AccountModule } from './account/account.module';
import { AccountTokenModule } from './account/token/account-token.module';

import { ProductModule } from './products/product.module';
import { CartModule } from './cart/cart.module';
import { Cart } from './cart/cart.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../.env',
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT!, 10),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      autoLoadEntities: true,
      synchronize: false,
      logging: ['query', 'error']
    }),

    AccountModule,
    AccountTokenModule,
    ProductModule,
    CartModule,
    

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}