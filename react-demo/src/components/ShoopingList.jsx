import React, { useState } from 'react';

const ShoopingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    if (!name || !quantity) return;
    const newItem = {
      name,
      quantity: parseInt(quantity),
    };
    setItems((prevItems) => [...prevItems, newItem]);
    setName('');
    setQuantity('');
  };
  return (
    <div>
      <h3>Shopping List</h3>
      <form>
        <input
          type='text'
          value={name}
          placeholder='Enter your Product'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='number'
          value={quantity}
          placeholder='Enter your quantity'
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type='submit' onClick={handleClick}>
          Add
        </button>
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} : Quantitiy - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoopingList;
