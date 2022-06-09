import React from 'react';
import { ReactFromModule } from 'acctez-main'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NetworkOptions, TezosProvider } from 'acctez-main';

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~", React === ReactFromModule);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const options = {
  appName: 'demo',
  networkType: 'ithacanet',
  'rpc': 'https://ithacanet.smartpy.io',
} as NetworkOptions;

root.render(
  <React.StrictMode>
    <TezosProvider options={options}>
      <App />
    </TezosProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
