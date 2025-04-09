import { useState } from 'react';
import PopupContnet from './PopupContnet';

const CopyInput = () => {
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(inputVal).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 10000);
    });
  };
  return (
    <div>
      <input
        type='text'
        placeholder='Enter the text to copy'
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={handleClick}>Copy</button>
      <PopupContnet copied={copied} />
    </div>
  );
};

export default CopyInput;
