import './index.css';
import '@radix-ui/themes/styles.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Theme } from '@radix-ui/themes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme accentColor="mint" appearance="light" className="background">
      <App />
    </Theme>
  </React.StrictMode>,
);
