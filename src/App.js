import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './components/Header';
import Item from './components/Item';
import Cart from './components/Cart';

function App() {
  const [size, setSize] = useState('S');
  const [image, setImage] = useState('black');
  const [arr, setArr] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const title = 'Customizable Modern T-shirt';

  const handleAddToCart = () => {
    const itemColor = [...image].join('');
    const itemSize = [...size];

    setArr((prev) => [
      ...prev,
      { tshirtColor: itemColor, tshirtSize: itemSize, id: uuidv4() },
    ]);
  };

  const handleCartToggle = () => {
    setCartOpen((x) => !x);
  };

  return (
    <div className='App'>
      <Header
        size={size}
        arr={arr}
        handleCartToggle={handleCartToggle}
        cartOpen={cartOpen}
      />
      <Item
        title={title}
        size={size}
        setSize={setSize}
        image={image}
        setImage={setImage}
        handleAddToCart={handleAddToCart}
        handleCartToggle={handleCartToggle}
      />
      {cartOpen && <Cart arr={arr} size={size} image={image} setArr={setArr} />}
    </div>
  );
}

export default App;
