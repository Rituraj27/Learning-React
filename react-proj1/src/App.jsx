import { useState } from 'react';

function App() {
  const [color, setColor] = useState('black');
  return (
    <>
      <main
        className='h-screen w-full flex items-end justify-center pb-[10vh]'
        style={{ backgroundColor: color }}
      >
        <div className='bg-white h-12 items-center justify-center flex gap-3 rounded-md px-8'>
          <button
            onClick={() => {
              setColor('red');
            }}
            className='px-4 rounded'
            style={{ backgroundColor: 'red' }}
          >
            Red
          </button>
          <button
            onClick={() => {
              setColor('green');
            }}
            className='px-4 rounded'
            style={{ backgroundColor: 'green' }}
          >
            Green
          </button>
          <button
            onClick={() => {
              setColor('blue');
            }}
            className='px-4 rounded'
            style={{ backgroundColor: 'blue' }}
          >
            Blue
          </button>
          <button
            onClick={() => {
              setColor('olive');
            }}
            className='px-4 rounded'
            style={{ backgroundColor: 'olive' }}
          >
            Olive
          </button>
          <button
            onClick={() => {
              setColor('gray');
            }}
            className='px-4 rounded'
            style={{ backgroundColor: 'gray' }}
          >
            Gray
          </button>
          <button
            onClick={() => {
              setColor('yellow');
            }}
            className='px-4 rounded'
            style={{ backgroundColor: 'yellow' }}
          >
            Yellow
          </button>
          <button
            onClick={() => {
              setColor('pink');
            }}
            className='px-4 rounded'
            style={{ backgroundColor: 'pink' }}
          >
            Pink
          </button>
          <button
            onClick={() => {
              setColor('purple');
            }}
            className='px-4 rounded'
            style={{ backgroundColor: 'purple' }}
          >
            Purple
          </button>
          <button
            onClick={() => {
              setColor('lavender');
            }}
            className='px-4 rounded'
            style={{ backgroundColor: 'lavender' }}
          >
            Lavender
          </button>
          <button
            onClick={() => {
              setColor('white');
            }}
            className='px-4 rounded'
            style={{ backgroundColor: 'white' }}
          >
            White
          </button>
          <button
            onClick={() => {
              setColor('black');
            }}
            className='px-4 rounded text-white'
            style={{ backgroundColor: 'black' }}
          >
            Black
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
