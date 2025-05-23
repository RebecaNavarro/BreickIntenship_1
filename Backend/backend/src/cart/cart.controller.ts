import { Controller, Post, Get, Delete, Body, Param, Req, UseGuards } from '@nestjs/common';
import { CartService } from './cart.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Request } from 'express';
import { RequestWithUser } from 'src/auth/types/request-with-user.interface';

@Controller('cart')
@UseGuards(JwtAuthGuard)
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  async addToCart(@Req() req: RequestWithUser, @Body() addToCartDto: AddToCartDto) {
    const userId = req.user.userId
    return this.cartService.addToCart(userId, addToCartDto);
  }

  @Get()
  async getCart(@Req() req: RequestWithUser) {
    const userId = req.user.userId;
    return this.cartService.getCart(userId);
  }

  @Delete(':id')
  async removeFromCart(@Req() req: RequestWithUser, @Param('id') id: string) {
    const userId = req.user.userId;
    return this.cartService.removeFromCart(userId, +id);
  }

  @Delete()
  async clearCart(@Req() req: RequestWithUser) {
    const userId = req.user.userId;
    return this.cartService.clearCart(userId);
  }
}