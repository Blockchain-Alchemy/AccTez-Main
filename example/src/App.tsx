import React from 'react';
import { HelloWorld, useWallet } from 'acctez-main';
import './App.css';


function App() {
  const { connectWallet } = useWallet();

  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld name="Eric" />
        <button onClick={() => connectWallet()}>Connect Wallet</button>
      </header>
    </div>
  );
}

export default App;
