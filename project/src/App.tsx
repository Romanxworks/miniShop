import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from './start-page';
import CartPage from './cart-page';
import Layout from './layout';
import { useState } from 'react';
import { Product } from './types/product';

function App() {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCard = (newProduct:Product, newCount: number)=>{
    const index = cart.findIndex((product) => product.id === newProduct.id);
    const updatedProd = {...newProduct, count: newCount};

    if (index === -1) {
      const aupdatedCart = [...cart, updatedProd];
      setCart(aupdatedCart);
      return;
    }

      const aupdatedCart = [...cart.slice(0, index), updatedProd, ...cart.slice(index+1)];
      setCart(aupdatedCart);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout cart={cart}/>}>
          <Route index element={<StartPage addToCard={addToCard}/> }/>
          <Route path='/cart' element={<CartPage cart={cart} addToCard={addToCard}/> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
