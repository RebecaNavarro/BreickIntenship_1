import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { CartService } from 'src/cart/cart.service';
import { ProductsService } from 'src/products/products.service';
import { UserEntity } from 'src/users/entities/users.entity';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
import { OrderStatus } from './enums/order-status.enum';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
    @InjectRepository(OrderItem)
    private orderItemsRepository: Repository<OrderItem>,
    private cartService: CartService,
    private productsService: ProductsService,
  ) {}

  async create(user: UserEntity, createOrderDto: CreateOrderDto) {
    // 1. Verificar stock y calcular total
    let total = 0;
    const orderItems: OrderItem[] = [];

    for (const item of createOrderDto.items) {
      const product = await this.productsService.findOne(item.productId);
      if (!product) {
        throw new NotFoundException(`Product ${item.productId} not found`);
      }

      if (product.stock < item.quantity) {
        throw new Error(`Insufficient stock for product ${product.name}`);
      }

      total += product.price * item.quantity;

      const orderItem = this.orderItemsRepository.create({
        productId: item.productId,
        quantity: item.quantity,
        price: product.price,
      });

      orderItems.push(orderItem);
    }

    // 2. Crear la orden
    const order = this.ordersRepository.create({
      userId: user.id,
      items: orderItems,
      total,
      status: OrderStatus.PENDING,
    });
    const savedOrder = await this.ordersRepository.save(order);


    // 3. Actualizar stock y limpiar carrito
    for (const item of createOrderDto.items) {
      await this.productsService.updateStock(item.productId, -item.quantity);
    }

    await this.cartService.clearCart(user.id);

    return savedOrder;
  }

  async findAll(user: UserEntity) {
    return this.ordersRepository.find({
      where: { userId: user.id },
      relations: ['items', 'items.product'],
    });
  }

  async findOne(user: UserEntity, id: number) {
    return this.ordersRepository.findOne({
      where: { id, userId: user.id },
      relations: ['items', 'items.product'],
    });
  }

  async updateStatus(id: number, updateOrderStatusDto: UpdateOrderStatusDto) {
    const order = await this.ordersRepository.findOne({ where: { id } });
    if (!order) {
      throw new NotFoundException('Order not found');
    }

    order.status = updateOrderStatusDto.status;
    return this.ordersRepository.save(order);
  }
}