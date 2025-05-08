import { useState } from 'react';
import Card from './Card';

function App() {
  const [count, setCount] = useState(0);
  const user = {
    title: 'John Deo',
    src: 'https://images.pexels.com/photos/31529781/pexels-photo-31529781/free-photo-of-woman-in-blooming-pink-bougainvillea-garden.jpeg?auto=compress&cs=tinysrgb&w=600',
    age: 23,
    address: 'San-Francisco, San Diago',
    phone: '7788-45450-23',
    job: 'Developer',
  };

  return (
    <>
      <div className='flex items-center justify-center h-screen w-full gap-2'>
        <Card user={user} />
        <Card user={user} />
      </div>
    </>
  );
}

export default App;
