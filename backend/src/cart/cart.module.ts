import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './cart.entity';
import { CartItem } from '../cart_item/cart-item.entity';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { Product } from '../products/product.entity';
import { Account } from '../account/account.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Cart,
      CartItem,
      Product,
      Account,
    ]),
  ],
  controllers: [CartController],
  providers: [CartService],
  exports: [CartService],
})
export class CartModule {}
