import { useState } from 'react';
import './App.css';
import CartItems from './Components/CartItems/CartItems';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';

function App() {
  const [showCart, setShowCart] = useState(false)
  const [addProduct, setProduct] = useState([])
  const [reRender, setReRender] = useState(false)
  const handleRender = () => {
    setReRender(!reRender)
  }

  const addToCart = (brand, image, price, id, index) => {
   
    if(addProduct.some(product => product.id === id)){
      addProduct.splice(index, 1)
    }
    
    else{
      setProduct([
        ...addProduct,
        {
          productName: brand,
          price: price,
          image: image,
          id: id,
          qty: 1
        }
      ]);
    }
    
  }
  return (
    <div className='App'>
      <NavBar setShowCart={setShowCart} showCart={showCart} productCounter={addProduct.length} handleRender={handleRender} reRender={reRender}/>
      <CartItems showCart={showCart} addProduct={addProduct}  handleRender={handleRender} reRender={reRender}/>
      <Home addToCart={addToCart}/>
    </div>
  );
}

export default App;
