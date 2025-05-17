import React, { useId } from 'react';

const Inputs = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'usd',
  amountDisable = false,
  currencyDisable = false,
}) => {
  const amountInputId = useId();
  return (
    <div className='bg-white w-full h-24 rounded-md flex justify-between px-2 items-center'>
      <div className='flex flex-col gap-5'>
        <label htmlFor={amountInputId}>{label}</label>
        <input
          id={amountInputId}
          type='number'
          className='border-black border'
          placeholder='Amount'
          value={amount}
          disabled={amountDisable}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      <div className='flex flex-col gap-5'>
        <label htmlFor=''>Currency Type</label>
        <select
          disabled={currencyDisable}
          name=''
          id=''
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Inputs;
