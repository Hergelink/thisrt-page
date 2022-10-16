import React from 'react';
import Description from './Description';
import Image from './Image';
import Color from './Color';
import Size from './Size';
import Review from './Review';

function Item({
  size,
  setSize,
  image,
  setImage,
  title,
  handleAddToCart,
  handleCartToggle,
}) {
  return (
    <div id='main-container'>
      <div id='img-container'>
        <Image image={image} />
      </div>
      <div id='info-div'>
        <Description title={title} />
        <h3>Color</h3>
        <Color setImage={setImage} />
        <hr />
        <h3>Size</h3>
        <Size size={size} setSize={setSize} />
        <Review
          size={size}
          image={image}
          handleAddToCart={handleAddToCart}
          handleCartToggle={handleCartToggle}
        />
      </div>
    </div>
  );
}

export default Item;
