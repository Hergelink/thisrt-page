import React from 'react';
import SumTotal from './SumTotal';

function Cart({ arr, setArr }) {


  return (
    <div id='cart-container'>
      <div className='cart-items'>
        {arr.map((x) => (
          <div key={x.id} className='cart-item-div'>
            <ul>
              <li>{`Color: ${x.tshirtColor}`}</li>
              <li>{`Size: ${x.tshirtSize}`}</li>
            </ul>
            <button
              id={x.id}
              className='erase-btn'
              onClick={(e) => {
                const deleteId = e.target.id;

                setArr((x) => {
                  return arr.filter((x) => x.id !== deleteId);
                });
              }}
            >
              x
            </button>
          </div>
        ))}
      {arr.length > 0 && <SumTotal arr={arr}/>}
        <button id='purchase-btn'>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
