import Footer from "./components/footer";
import Header from "./components/header";
import { products } from "./store/products";
import ProductItem from "./components/product-item";
import { useState } from "react";
import { Product } from "./types/product";

function StartPage (): JSX.Element{
  const [cart, setCart] = useState<Product[]>([]);
  const countCartChange = (product: Product) => {
    setCart([...cart, product]);
  }
  return(
  <>
    <Header count={cart?.length} />
    <main>
      <section className="products">
        <h3 className="title">Наушники</h3>
        <div className="products-list">
            {
                products.slice(0,6).map((product)=>(
                  <ProductItem product={product} countCartChange={countCartChange}
                    key={`${product.id}-${product.title}`}
                  />
                ))
            }

          </div>
      </section>
      <section className="products">
        <h3 className="title">Беспроводные наушники</h3>
        <div className="products-list">
            {
                products.slice(6,products.length).map((product)=>(
                  <ProductItem product={product} countCartChange={countCartChange}
                    key={`${product.id}-${product.title}`}
                  />
                ))
            }
        </div>
      </section>
    </main>
    <Footer />
  </>
  );
}
export default StartPage;
