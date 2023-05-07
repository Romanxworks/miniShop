
import { products } from "./store/products";
import ProductItem from "./components/product-item";
import { Product } from "./types/product";

type StartPageProps = {
  addToCard: (prod: Product, count: number)=> void;
}
function StartPage ({addToCard}:StartPageProps): JSX.Element{
  return(
    <main>
      <section className="products">
        <h3 className="title">Наушники</h3>
        <div className="products-list">
            {
                products.slice(0,6).map((product)=>(
                  <ProductItem product={product} addToCard={addToCard}
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
                  <ProductItem product={product} addToCard={addToCard}
                    key={`${product.id}-${product.title}`}
                  />
                ))
            }
        </div>
      </section>
    </main>
  );
}
export default StartPage;
