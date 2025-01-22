export async function getAllProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=200");
    if (response.ok) {
      const result = await response.json();
      console.log(result.products);
      return result.products;
    }
  } catch (error) {
    console.log(error);
  }
}
