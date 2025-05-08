import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

const Elem = (
  <div>
    <a href='https://googole.com' target='_blank'>
      Click
    </a>
  </div>
);

const newElem = React.createElement(
  'a',
  {
    href: 'https://google.com',
    class: 'anchor',

    id: 'anchor',
  },
  'click me to visit google'
);

createRoot(document.getElementById('root')).render(newElem);
