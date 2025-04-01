import React from 'react';

const Product = (props) => {
  return (
    <div>
      <h2>Product Name: {props.productName}</h2>
      <p>Price: ${props.price}</p>
    </div>
  );
};

export default Product;
