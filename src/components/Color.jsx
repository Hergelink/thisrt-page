import React from 'react';

function Color({ setImage }) {
  const handleImage = (e) => {
    const imageValue = e.target.id;

    setImage(() => imageValue);
  };

  return (
    <section id='color-section'>
      <div className='color-divs' id='black' onClick={handleImage}></div>
      <div className='color-divs' id='white' onClick={handleImage}></div>
      <div className='color-divs' id='blue' onClick={handleImage}></div>
    </section>
  );
}

export default Color;
