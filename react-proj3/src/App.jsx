import React, { useState } from 'react';
import Inputs from './components/Inputs';
import useCurrencyInfo from './hooks/useCurrencyinfo';

const App = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  return (
    <main className='relative h-screen w-screen bg-red-300 flex items-center justify-center'>
      <div
        style={{
          position: 'absolute',
          backgroundImage: `url(
            'https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3VycmVuY3l8ZW58MHx8MHx8fDA%3D'
          )`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          filter: 'blur(3px)',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      ></div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
        className='bg-[#ffffff80] text-black w-[500px] h-[320px] rounded-md p-4'
        style={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className='flex flex-col gap-4 relative'>
          <Inputs
            label='From'
            amount={amount}
            onAmountChange={(amount) => {
              setAmount(amount);
            }}
            onCurrencyChange={setFrom}
            currencyOptions={options}
            selectCurrency={from}
          />
          <button
            onClick={swap}
            className='bg-blue-500 py-2 px-5 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-white border-2'
          >
            swap
          </button>
          <Inputs
            label='To'
            amount={convertedAmount}
            onCurrencyChange={setTo}
            currencyOptions={options}
            selectCurrency={to}
            amountDisable
          />
        </div>
        <button
          type='submit'
          className='w-full h-10 text-center bg-blue-500 mt-10'
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </main>
  );
};

export default App;
