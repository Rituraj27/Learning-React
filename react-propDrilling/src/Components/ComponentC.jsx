import React, { useContext } from 'react';
import { Data, Data1 } from '../App';
const ComponentC = () => {
  const userName = useContext(Data);
  const userAge = useContext(Data1);
  return (
    <div>
      <h1>
        I am {userName} I am {userAge} year's old
      </h1>
    </div>
  );
};

export default ComponentC;
