import React, { useState } from 'react';

const RandomNumber = () => {
  const [rand, setRand] = useState(() => Math.floor(Math.random() * 100));

  const generate = () => {
    const newRan = Math.floor(Math.random() * 100);
    setRand(newRan);
  };
  return (
    <div>
      <h1>RandomNumber: {rand}</h1>
      <button onClick={generate}>Click</button>
    </div>
  );
};

export default RandomNumber;
