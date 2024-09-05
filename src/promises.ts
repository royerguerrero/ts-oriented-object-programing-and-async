import axios from 'axios';

(async () => {
  function delay(time: number) {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => resolve(true), time);
    });
    return promise;
  }

  async function getProduct() {
    const promise = await axios.get('https://api.escuelajs.co/api/v1/products');
    return promise.data;
  }

  console.log('---'.repeat(10));
  const response = await delay(3000);
  console.log(response);

  const products = await getProduct()
  console.log(products)
})();
