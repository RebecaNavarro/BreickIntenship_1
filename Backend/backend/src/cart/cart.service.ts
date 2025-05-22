import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { ProductsService } from '../products/products.service';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
    private productsService: ProductsService,
  ) {}

  async addToCart(userId: number, addToCartDto: AddToCartDto): Promise<Cart> {
    const { productId, quantity } = addToCartDto;

    // Verificar si el producto existe
    const product = await this.productsService.findOne(productId);
    if (!product) {
      throw new Error('Product not found');
    }

    // Verificar si ya existe en el carrito
    const existingItem = await this.cartRepository.findOne({
      where: { userId, productId },
    });

    if (existingItem) {
      existingItem.quantity += quantity;
      return this.cartRepository.save(existingItem);
    }

    const cartItem = this.cartRepository.create({
      userId,
      productId,
      quantity,
    });

    return this.cartRepository.save(cartItem);
  }

  async getCart(userId: number): Promise<{items: any[], total: number}> {
    const cartItems = await this.cartRepository.find({
      where: { userId },
      relations: ['product'],
    });

    let total = 0;
    const items = cartItems.map(item => {
      const subtotal = item.product.price * item.quantity;
      total += subtotal;
      return {
        id: item.id,
        product: {
          id: item.product.id,
          name: item.product.name,
          price: item.product.price,
          imageUrl: item.product.imageUrl,
        },
        quantity: item.quantity,
        subtotal,
      };
    });

    return { items, total };
  }

  async removeFromCart(userId: number, itemId: number): Promise<void> {
    await this.cartRepository.delete({ id: itemId, userId });
  }

  async clearCart(userId: number): Promise<void> {
    await this.cartRepository.delete({ userId });
  }
}