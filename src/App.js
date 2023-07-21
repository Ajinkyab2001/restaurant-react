// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown,setCartIsShown] = useState(false)
 
  const showCardHandler = () => {
    setCartIsShown(true);
  }

  const hideCardHandler = () => {
    setCartIsShown(false);
  }
  
  return (
   
   <CartProvider>
   {cartIsShown && <Cart onClose={hideCardHandler} />}
    <Header onShowCart ={showCardHandler} />
    <main>
      <Meals />
    </main>  
   </CartProvider>
  );
}

export default App;
