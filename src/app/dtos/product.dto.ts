import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

export interface CreateProductDTO
  extends Omit<Product, 'id' | 'category' | 'creationAt' | 'updatedAt'> {
  categoryId: Category['id'];
}

export interface UpdateProductDTO
  extends Readonly<Partial<Omit<Product, 'tags'>>> {}
