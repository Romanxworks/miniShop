import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from './start-page';
import CartPage from './cart-page';
// import { products } from './store/products';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartPage/> }/>
        <Route path='/cart' element={<CartPage/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
