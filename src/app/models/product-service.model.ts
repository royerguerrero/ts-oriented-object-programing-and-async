import { CreateProductDTO, UpdateProductDTO } from '../dtos/product.dto';
import { Product } from './product.model';

export interface ProductService {
  getAll(): Promise<Product[]> | Product[];
  update(
    id: Product['id'],
    changes: UpdateProductDTO
  ): Promise<Product> | Product;
  create(dto: CreateProductDTO): Promise<Product> | Product;
  findOne(
    id: Product['id']
  ): Product | undefined | Promise<Product | undefined>;
}
