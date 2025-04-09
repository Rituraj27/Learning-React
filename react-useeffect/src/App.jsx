import React, { useEffect, useState } from 'react';

const App = () => {
  const [inputValue, setInputValue] = useState(0);

  useEffect(() => {
    console.log('UseEffected Called');
    document.title = inputValue;
  }, [inputValue]);

  return (
    <div>
      <h1>{inputValue}</h1>
      <button onClick={() => setInputValue(inputValue + 1)}>Click</button>
    </div>
  );
};

export default App;
