import { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const incBtn = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const decBtn = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>count: {count}</h1>

      <button onClick={incBtn}>Increment {count}</button>
      <button onClick={decBtn}>Decrement {count}</button>
    </>
  );
}

export default App;
