import { SyntheticEvent, useState } from "react";
import { Product } from "../types/product";
import { Link, useNavigate } from "react-router-dom";

type ProductItemProps = {
  product: Product;
  countCartChange:(prod:Product)=> void;
}

function ProductItem ({product, countCartChange}: ProductItemProps):JSX.Element{
  const {title, image, price, oldPrice, ratig} = product;
  const isSale = price <= oldPrice;
  const [inCart, setInCart] = useState(false);
  const navigate = useNavigate();
  const clickHandler = (evt:SyntheticEvent<HTMLElement>) => {
    evt.preventDefault();
    if(!inCart){
      countCartChange(product);
    }
    setInCart(!inCart);
  }
  return(
    <div className="product">
      <div className="image-wrapper">
        <img className="product-image" src={image} alt="product-img" />
      </div>
      <div className="product-desc">
        <p className="product-title">{title}</p>
        <div className="price">
          <p className="actual-price">{price} &#8381;</p>
          {isSale ? <p className="old-price">{oldPrice} &#8381;</p> : ''}
        </div>
        <div className="product-rating">
          <img className="product-rating-img" src="img/star.svg" alt="product-rating"/>
          <span className="rating-count">{ratig}</span>
        </div>
        {!inCart ? 
          <a className="add-to-cart" href="/" onClick={clickHandler}>Купить</a> :
          <Link to='/cart' className="add-to-cart" onClick={()=>navigate('/cart')}>В корзину
          </Link>
        }
        
      </div>
    </div>
  );
}
export default ProductItem;