import React from 'react';

const ProductList = () => {
  const product = [
    { id: 1, name: 'phone', price: '$600' },
    { id: 2, name: 'Laptop', price: '$1200' },
    { id: 3, name: 'Heaphone', price: '$199' },
  ];
  return (
    <div>
      {product.map(({ id, name, price }) => (
        <ul key={id}>
          <li>Name: {name}</li>
          <li>Price: {price}</li>
        </ul>
      ))}
    </div>
  );
};

export default ProductList;
