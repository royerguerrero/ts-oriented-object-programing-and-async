import { faker } from '@faker-js/faker';
import { Product } from '../models/product.model';
import { CreateProductDTO, UpdateProductDTO } from '../dtos/product.dto';
import { ProductService } from '../models/product-service.model';

export class ProductMemoryService implements ProductService {
  private products: Product[] = [];

  private add(product: Product) {
    this.products.push(product);
  }

  create(data: CreateProductDTO) {
    const product = {
      ...data,
      id: faker.string.uuid(),
      creationAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.dataUri(),
        creationAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
      },
    };
    this.add(product);

    return product;
  }

  update(id: Product['id'], changes: UpdateProductDTO) {
    const index = this.products.findIndex((index) => index.id == id);
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes,
    };

    return this.products[index];
  }

  findOne(id: Product['id']) {
    return this.products.find((item) => item.id == id);
  }

  getAll() {
    return this.products;
  }
}
