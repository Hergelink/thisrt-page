import React from 'react';

function Review({ size, handleAddToCart, handleCartToggle }) {
  return (
    <section id='review-section'>
      <span id='price-span'>
        {size === 'S' ? 20 : size === 'M' ? 22.5 : 25} $
      </span>
      <button id='add-to-cart-btn' onClick={handleAddToCart}>
        Add to Cart
      </button>
    </section>
  );
}

export default Review;
