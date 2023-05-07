import { useState } from "react";
import { Product } from "../types/product";

type ProductCartItemProps = {
  product: Product;
  addToCard: (prod: Product, count: number)=> void;
}

function ProductCartItem({product, addToCard}: ProductCartItemProps): JSX.Element{
  const {title, image, price, oldPrice, count} = product;
  const isSale = price <= oldPrice;
  const[countCart, setCountCart] = useState(count);

  return(
    <div className="product-cart">
    <div className="product-cart-image-wrapper">
      <img className="product-image" src={image} alt="product-img" />
    </div>
    <div className="product-cart-desc">
      <img src="/img/delete-icon.svg" alt="" />
      <p className="product-cart-title">{title}</p>
      <div className="product-cart-price">
        <p className="actual-price">{price} &#8381;</p>
        {isSale ? <p className="old-price">{oldPrice} &#8381;</p> : ''}
      </div>
    </div>
    <div className="product-cart-count">
      <div className="counts">
        <button className="plus-btn" type="button" name="button" onClick={()=>{
          setCountCart(countCart-1);
          addToCard(product, countCart-1);
          }
        }>
          <img src="/img/delete-button.svg" alt="" />
        </button>
        <span className="count-cart">{countCart}</span>
        <button className="minus-btn" type="button" name="button" onClick={()=>{
          setCountCart(countCart+1);
          addToCard(product, countCart+1);
          }}>
          <img src="/img/add-button.svg" alt="" />
        </button>
      </div>
      <p className="subtotal">{countCart * price} &#8381;</p>
    </div>
  </div>
  )
}
export default ProductCartItem;