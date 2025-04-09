import { createPortal } from 'react-dom';

const PopupContnet = ({ copied }) => {
  return createPortal(
    <section>
      {copied && (
        <div style={{ position: 'absolute', top: '4rem' }}>
          copied to clipboard
        </div>
      )}
    </section>,
    document.querySelector('#pop-up')
  );
};

export default PopupContnet;
