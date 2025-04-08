import React, { use, useState } from 'react';

const ShoopingList = () => {
  const [name, setName] = useState('');
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h3>Shopping List</h3>
      <form>
        <input
          type='text'
          placeholder='Enter your Product'
          onChange={(e) => setItems(e.target.value)}
        />
        <input
          type='number'
          placeholder='Enter your quantity'
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type='submit' onClick={handleClick}>
          Add
        </button>
      </form>
    </div>
  );
};

export default ShoopingList;
