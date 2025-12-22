import { Controller, Post, Body, Get, Patch, Delete, Param } from '@nestjs/common';
import { CartService } from './cart.service';
import { AddToCartDto } from './dto-cart/add-to-cart.dto';
import { UpdateCartItemDto } from './dto-cart/update-cart.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Cart')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  // 1️⃣ Get cart for an account
  @Get(':accountId')
  async getCart(@Param('accountId') accountId: number) {
    return this.cartService.getCart(Number(accountId));
  }

  // 2️⃣ Add product to cart
  @Post('add')
  async addToCart(@Body() dto: AddToCartDto) {
    return this.cartService.addToCart(dto);
  }

  // 3️⃣ Update cart item quantity
  @Patch('item')
  async updateItem(@Body() dto: UpdateCartItemDto) {
    return this.cartService.updateItemQuantity(dto);
  }

  // 4️⃣ Remove cart item
  @Delete('item/:cartItemId')
  async removeItem(@Param('cartItemId') cartItemId: number) {
    return this.cartService.removeItem(Number(cartItemId));
  }

  // 5️⃣ Clear cart
  @Delete('clear/:accountId')
  async clearCart(@Param('accountId') accountId: number) {
    return this.cartService.clearCart(Number(accountId));
  }
}
