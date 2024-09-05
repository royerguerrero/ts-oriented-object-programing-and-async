import { ProductHTTPService } from './services/product-http.service';

(async () => {
  const productService = new ProductHTTPService();
  console.log('--'.repeat(10));
  const products = await productService.getAll();
  console.log(products);
})();
