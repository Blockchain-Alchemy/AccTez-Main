import React from 'react';
import { useWallet } from 'acctez-main';
import './App.css';


function App() {
  const { connectWallet } = useWallet();

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => connectWallet()}>Connect Wallet</button>
      </header>
    </div>
  );
}

export default App;
