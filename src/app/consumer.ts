import { ProductMemoryService } from './services/product-memory.service';

const repository = new ProductMemoryService();

repository.create({
  title: 'DISC',
  price: 99,
  description: 'Testing like A$AP',
  categoryId: 12,
  images: [],
});

const products = repository.getAll();
const productId = products[0].id;

repository.update(productId, {
  title: 'Gold Disc',
});
console.log(repository.findOne(productId))
