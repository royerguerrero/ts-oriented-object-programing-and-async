import axios from 'axios';
import { CreateProductDTO, UpdateProductDTO } from '../dtos/product.dto';
import { ProductService } from '../models/product-service.model';
import { Product } from '../models/product.model';

export class ProductHTTPService implements ProductService {
  private url = 'https://api.escuelajs.co/api/v1/products';
  async getAll(): Promise<Product[]> {
    const { data } = await axios.get<Product[]>(this.url);
    return data;
  }

  async update(id: Product['id'], changes: UpdateProductDTO): Promise<Product> {
    const { data } = await axios.put<Product>(`${this.url}/${id}`, changes);
    return data;
  }

  async create(dto: CreateProductDTO): Promise<Product> {
    const { data } = await axios.post<Product>(this.url, dto);
    return data;
  }

  findOne(id: Product['id']): Product | undefined {
    throw new Error('Method not implemented');
  }
}
