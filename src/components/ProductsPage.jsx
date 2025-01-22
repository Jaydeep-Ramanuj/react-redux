import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./productCard";
import { fetchProduct } from "../state/product/productThunk";

function ProductsPage() {
  const dispatch = useDispatch();

  function getProducts() {
    dispatch(fetchProduct());
  }
  useEffect(() => {
    getProducts();
  }, []);
  const products = useSelector((state) => state.product.products);

  console.log(products);
  return (
    <>
      <h1>Products Page</h1>
      <hr />
      <div className="products-list mt-10  grid grid-cols-3 gap-8">
        {products &&
          products
            .slice(0, 50)
            .map((product) => (
              <ProductCard
                key={product.id}
                name={product.title}
                desc={product.description}
                price={product.price}
                img={product.thumbnail}
              />
            ))}
      </div>
    </>
  );
}

export default ProductsPage;
