import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  Unique,
  JoinColumn,
} from 'typeorm';
import { Cart } from 'src/cart/cart.entity';
import { Product } from 'src/products/product.entity';

@Entity('cart_items')
@Unique(['cart', 'product'])
export class CartItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cart, (cart) => cart.items, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'cart_id' })   // 🔥 REQUIRED
  cart: Cart;

  @ManyToOne(() => Product, {
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'product_id' }) // 🔥 REQUIRED
  product: Product;

  @Column({ default: 1 })
  quantity: number;
}
