import React from 'react';
import cart from '../assets/icons/add-to-cart.png';

function Header({ arr, handleCartToggle }) {
  return (
    <header>
      <div id='header-container'>
        <div className='logo'>Collective</div>
        <div id='cart-div' onClick={handleCartToggle}>
          <img src={cart} id='add-to-cart' alt='add to cart icon' />
          {arr.length > 0 && <div id='cart-count'>{arr.length}</div>}
        </div>
      </div>
    </header>
  );
}

export default Header;
