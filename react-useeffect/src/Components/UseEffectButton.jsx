import { useEffect, useState } from 'react';

export default function UseEffectButton() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) {
      console.log('UseEffect');
      document.title = count;
    }
  }, [count]);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
}
