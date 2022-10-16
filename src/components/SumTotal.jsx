import React from 'react';

function SumTotal({ arr }) {
  const sizes = [];
  const pushed = arr.forEach((x) => sizes.push(x.tshirtSize));
  const prices = sizes.map((x) => {
    return x[0] === 'S' ? 20 : x[0] === 'M' ? 22.5 : 25;
  });

  const totalPrice = prices.reduce((a, v) => {
    return a + v;
  });
  return <span id='sum-total'>Sum Total: {totalPrice}$</span>;
}

export default SumTotal;
