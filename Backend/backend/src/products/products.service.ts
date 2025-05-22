import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productsRepository.create(createProductDto);
    return this.productsRepository.save(product);
  }

  async findAll(): Promise<Product[]> {
    return this.productsRepository.find({ where: { isActive: true } });
  }

  async findOne(id: number): Promise<Product|null> {
    return this.productsRepository.findOne({ where: { id, isActive: true } });
  }
    async update(id: number, updateProductDto: UpdateProductDto): Promise<Product | null> {
    await this.productsRepository.update(id, updateProductDto);
    return this.findOne(id);
  }

  async updateStock(id: number, quantity: number): Promise<Product|null> {
  const product = await this.productsRepository.findOne({ where: { id } });
  if (!product) {
    throw new NotFoundException('Product not found');
  }

  product.stock += quantity;
  if (product.stock < 0) {
    throw new Error('Insufficient stock');
  }

  return this.productsRepository.save(product);
}
}