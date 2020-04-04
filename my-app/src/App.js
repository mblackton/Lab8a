import React from 'react';
import logo from './surf.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Matthew Blackton
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=n-5F_7DwPpo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hit the lip brah
        </a>
      </header>
    </div>
  );
}

export default App;
