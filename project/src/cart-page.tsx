import { useEffect, useState } from "react";
import ProductCartItem from "./components/product-cart-item";
import { Product } from "./types/product";

type CartPageProps = {
  cart: Product[];
  addToCard: (prod: Product, count: number)=> void;
}

function CartPage({cart, addToCard}:CartPageProps): JSX.Element{
  const [total, setTotal] = useState<number|null>(null);
  useEffect(() => {
    const getTotal = () => {
      let sum = 0;
       cart.forEach((prod) => {
        const preTotal = prod.price* prod.count;
        sum+= preTotal;
      });
      return sum;
    }
    setTotal(getTotal());
  },[cart]);

  return(
    <main>
    <h3 className="title">Корзина</h3>
    <section className="cart">
        <div className="products-cart-list">
           {cart.length ?
              cart.map((product)=>(
                <ProductCartItem product={product} addToCard={addToCard}
                   key={`${product.id}-${product.title}`}
                 />
              )) : <h3 className="title notice">Корзина пуста</h3>
            }
        </div>
        <div className="total-cart">
          <div className="total-desc">
            <p className="total-cart-title">Итого</p>
            <p className="total-sum">&#8381; {total}</p>
          </div>
          <a className="total-submit" href="/">Перейти к оформлению</a>
        </div>
    </section>
    </main>
  );
}
export default CartPage;