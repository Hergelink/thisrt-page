import React from 'react';

function Size({ size, setSize }) {
  const handleSize = (e) => {
    const sizeValue = e.target.textContent;

    setSize(() => sizeValue);
  };

  return (
    <section id='size-section'>
      <div className='size-divs' id='small' onClick={handleSize}>
        S
      </div>
      <div className='size-divs' id='medium' onClick={handleSize}>
        M
      </div>
      <div className='size-divs' id='large' onClick={handleSize}>
        L
      </div>
    </section>
  );
}

export default Size;
