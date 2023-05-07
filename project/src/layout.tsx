import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import { Product } from "./types/product";
import { useEffect, useState } from "react";

type LayoutProps ={
  cart: Product[];
}

function Layout ({cart}: LayoutProps): JSX.Element{ 
  const [quantity, setQuantity] = useState<number|null>(null);
  useEffect(() => {
    const getTotal = () => {
      let count = 0;
       cart.forEach((prod) => {
        count+=prod.count;
      });
      return count;
    }
    setQuantity(getTotal());
  },[cart]);
  return(
    <>
      <Header count={quantity}/>
      <Outlet />
      <Footer />
    </>
  );
} 
export default Layout;