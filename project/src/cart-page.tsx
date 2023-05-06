import Footer from "./components/footer";
import Header from "./components/header";

function CartPage(): JSX.Element{
  return(
    <>
    <Header />
    <main>
    <h3 className="title">Корзина</h3>
    <section className="cart">
        <div className="products-cart-list">
          <div className="product-cart">
            <div className="product-cart-image-wrapper">
              <img className="product-image" src="img/image-1.png" alt="product-img" />
            </div>
            <div className="product-cart-desc">
              <img src="/img/delete-icon.svg" alt="" />
              <p className="product-cart-title">Apple EarPods</p>
              <div className="product-cart-price">
                <p className="actual-price">500 &#8381;</p>
                <p className="old-price">600 &#8381;</p>
              </div>
            </div>
            <div className="product-cart-count">
              <div className="counts">
                <button className="plus-btn" type="button" name="button">
                  <img src="/img/delete-button.svg" alt="" />
                </button>
                <span className="count-cart">1</span>
                <button className="minus-btn" type="button" name="button">
                  <img src="/img/add-button.svg" alt="" />
                </button>
              </div>
              <p className="subtotal">600 &#8381;</p>
            </div>
          </div>
          <div className="product-cart">
            <div className="product-cart-image-wrapper">
              <img className="product-image" src="img/image-1.png" alt="product-img" />
            </div>
            <div className="product-cart-desc">
              <img src="/img/delete-icon.svg" alt="" />
              <p className="product-cart-title">Apple EarPods</p>
              <div className="product-cart-price">
                <p className="actual-price">500 &#8381;</p>
                <p className="old-price">600 &#8381;</p>
              </div>
            </div>
            <div className="product-cart-count">
              <div className="counts">
                <button className="plus-btn" type="button" name="button">
                  <img src="/img/delete-button.svg" alt="" />
                </button>
                <span className="count-cart">1</span>
                <button className="minus-btn" type="button" name="button">
                  <img src="/img/add-button.svg" alt="" />
                </button>
              </div>
              <p className="subtotal">600 &#8381;</p>
            </div>
          </div>
        </div>
        <div className="total-cart">
          <div className="total-desc">
            <p className="total-cart-title">Итого</p>
            <p className="total-sum">&#8381; 500</p>
          </div>
          <a className="total-submit" href="/">Перейти к оформлению</a>
        </div>
    </section>
    </main>
    <Footer />
</>
  );
}
export default CartPage;