import Footer from "./components/footer";
import Header from "./components/header";
function StartPage (): JSX.Element{
  return(
  <>
    <Header />
    <main>
      <section className="products">
        <h3 className="title">Наушники</h3>
        <div className="products-list">
          <div className="product">
            <div className="image-wrapper">
              <img className="product-image" src="img/image.png" alt="product-img" />
            </div>
            <div className="product-desc">
              <p className="product-title">Apple EarPods</p>
              <div className="price">
                <p className="actual-price">500 </p>
                <p className="old-price">600 </p>
              </div>
              <div className="product-rating">
                <img className="product-rating-img" src="img/star.svg" alt="product-rating"/>
                <span className="rating-count">3.5</span>
              </div>
              <a className="add-to-cart" href="/">Купить</a>
            </div>
          </div>
          <div className="product">
            <div className="image-wrapper">
              <img className="product-image" src="img/image-1.png" alt="product-img" />
            </div>
            <div className="product-desc">
              <p className="product-title">Apple EarPods</p>
              <div className="price">
                <p className="actual-price">500 </p>
                <p className="old-price">600 </p>
              </div>
              <div className="product-rating">
                <img className="product-rating-img" src="img/star.svg" alt="product-rating"/>
                <span className="rating-count">3.5</span>
              </div>
              <a className="add-to-cart" href="/">Купить</a>
            </div>
          </div>
          <div className="product">
            <div className="image-wrapper">
              <img className="product-image" src="img/image-2.png" alt="product-img" />
            </div>
            <div className="product-desc">
              <p className="product-title">Apple EarPods</p>
              <div className="price">
                <p className="actual-price">500 </p>
                <p className="old-price">600 </p>
              </div>
              <div className="product-rating">
                <img className="product-rating-img" src="img/star.svg" alt="product-rating"/>
                <span className="rating-count">3.5</span>
              </div>
              <a className="add-to-cart" href="/">Купить</a>
            </div>
          </div>
          <div className="product">
            <div className="image-wrapper">
              <img className="product-image" src="img/image-3.png" alt="product-img" />
            </div>
            <div className="product-desc">
              <p className="product-title">Apple EarPods</p>
              <div className="price">
                <p className="actual-price">500 </p>
                <p className="old-price">600 </p>
              </div>
              <div className="product-rating">
                <img className="product-rating-img" src="img/star.svg" alt="product-rating"/>
                <span className="rating-count">3.5</span>
              </div>
              <a className="add-to-cart" href="/">Купить</a>
            </div>
          </div>
          <div className="product">
            <div className="image-wrapper">
              <img className="product-image" src="img/image-1.png" alt="product-img" />
            </div>
            <div className="product-desc">
              <p className="product-title">Apple EarPods</p>
              <div className="price">
                <p className="actual-price">500 </p>
                <p className="old-price">600 </p>
              </div>
              <div className="product-rating">
                <img className="product-rating-img" src="img/star.svg" alt="product-rating"/>
                <span className="rating-count">3.5</span>
              </div>
              <a className="add-to-cart" href="/">Купить</a>
            </div>
          </div>
          <div className="product">
            <div className="image-wrapper">
              <img className="product-image" src="img/image-2.png" alt="product-img" />
            </div>
            <div className="product-desc">
              <p className="product-title">Apple EarPods</p>
              <div className="price">
                <p className="actual-price">500 </p>
                <p className="old-price">600 </p>
              </div>
              <div className="product-rating">
                <img className="product-rating-img" src="img/star.svg" alt="product-rating"/>
                <span className="rating-count">3.5</span>
              </div>
              <a className="add-to-cart" href="/">Купить</a>
            </div>
          </div>
        </div>
      </section>
      <section className="products">
        <h3 className="title">Беспроводные наушники</h3>
        <div className="products-list">
          <div className="product">
            <div className="image-wrapper">
              <img className="product-image" src="img/image-1.png" alt="product-img" />
            </div>
            <div className="product-desc">
              <p className="product-title">Apple EarPods</p>
              <div className="price">
                <p className="actual-price">500 </p>
                <p className="old-price">600 </p>
              </div>
              <div className="product-rating">
                <img className="product-rating-img" src="img/star.svg" alt="product-rating"/>
                <span className="rating-count">3.5</span>
              </div>
              <a className="add-to-cart" href="/">Купить</a>
            </div>
          </div>
          <div className="product">
            <div className="image-wrapper">
              <img className="product-image" src="img/image-2.png" alt="product-img" />
            </div>
            <div className="product-desc">
              <p className="product-title">Apple EarPods</p>
              <div className="price">
                <p className="actual-price">500 </p>
                <p className="old-price">600 </p>
              </div>
              <div className="product-rating">
                <img className="product-rating-img" src="img/star.svg" alt="product-rating"/>
                <span className="rating-count">3.5</span>
              </div>
              <a className="add-to-cart" href="/">Купить</a>
            </div>
          </div>
          <div className="product">
            <div className="image-wrapper">
              <img className="product-image" src="img/image-3.png" alt="" />
            </div>
            <div className="product-desc">
              <p className="product-title">Apple EarPods</p>
              <div className="price">
                <p className="actual-price">500 </p>
                <p className="old-price">600 </p>
              </div>
              <div className="product-rating">
                <img className="product-rating-img" src="img/star.svg" alt="product-rating"/>
                <span className="rating-count">3.5</span>
              </div>
              <a className="add-to-cart" href="/">Купить</a>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
  );
}
export default StartPage;
