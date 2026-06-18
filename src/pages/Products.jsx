import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  return (
    <>
      <section className="products-hero">
        <h1>Our Products</h1>

        <p>
          Explore our collection of quality products at
          affordable prices.
        </p>
      </section>

      <div className="grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
}

export default Products;