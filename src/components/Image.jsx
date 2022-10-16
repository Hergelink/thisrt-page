import React from 'react';
import blackTshirt from '../assets/images/Black-tshirt.jpeg';
import whiteTshirt from '../assets/images/White-tshirt.jpeg';
import blueTshirt from '../assets/images/Blue-tshirt.jpeg';

function Image(props) {
  return (
    <section id='img-section'>
      <img
        className='tshirt-img'
        src={
          props.image === 'black'
            ? blackTshirt
            : props.image === 'white'
            ? whiteTshirt
            : blueTshirt
        }
        alt='example'
      />
    </section>
  );
}

export default Image;
