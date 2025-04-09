import React, { useState } from 'react';

const Switchers = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  return (
    <div>
      {isLightMode ? <span>Light</span> : <span>Dark</span>}
      <input type='text' key={isLightMode ? 'dark' : 'light'} />

      <button onClick={() => setIsLightMode((prev) => !prev)}>switch</button>
    </div>
  );
};

export default Switchers;
