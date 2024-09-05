import axios from 'axios';
import { Product } from '../models/product.model';

export class BaseHTTPService<TypeClass> {
  //  private data: TypeClass[]  = []
  constructor(private url: string) {}

  async getAll(): Promise<TypeClass[]> {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }
}

(async () => {
  const productService = new BaseHTTPService<Product>(
    'https://api.escuelajs.co/api/v1/products'
  );
  const result = await productService.getAll();
  console.log(result)
})();
