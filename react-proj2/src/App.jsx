import React, { useCallback, useEffect, useRef, useState } from 'react';

const App = () => {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const refPassword = useRef(null);
  const copyClipboard = useCallback(() => {
    refPassword.current?.select();

    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passGen = useCallback(() => {
    let pass = '';
    let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numAllowed) letters += '1234567890';
    if (charAllowed) letters += '~!@#$%^&*()_+[]';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * letters.length) + 1;
      pass += letters.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passGen();
  }, [length, numAllowed, charAllowed, passGen, setPassword]);

  return (
    <div className='flex h-screen w-full mt-24 justify-center'>
      <div className='bg-slate-500 w-[500px] h-64 text-white'>
        <h1 className='text-center'>Password Generator</h1>
        <div className='flex px-5 items-center gap-1'>
          <input
            type='text'
            className='w-full rounded-sm py-3 outline-none text-orange-500'
            value={password}
            readOnly
            ref={refPassword}
          />
          <button onClick={copyClipboard} className='bg-blue-600 px-5 py-3'>
            copy
          </button>
        </div>
        <div className='flex shrink-0'>
          <div className='px-5 flex gap-1 items-center h-10'>
            <input
              type='range'
              min='8'
              max='20'
              className='w-16'
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor='length'>length: {length}</label>
          </div>
          <div className='px-5 flex gap-1 items-center h-10'>
            <input
              type='checkbox'
              min='8'
              max='20'
              className=''
              onClick={() => setNumAllowed((prev) => !prev)}
            />
            <label htmlFor='length'>Number</label>
          </div>
          <div className='px-5 flex gap-1 items-center h-10'>
            <input
              type='checkbox'
              min='8'
              max='20'
              className=''
              onClick={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor='length'>Character</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
