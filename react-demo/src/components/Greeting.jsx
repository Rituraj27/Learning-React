import React from 'react';

const Greeting = () => {
  const greetmsg = 'Hey!';
  const datenow = new Date();
  return (
    <div>
      <h1>{greetmsg}</h1>
      <p>{datenow.getDate()}</p>
    </div>
  );
};

export default Greeting;
