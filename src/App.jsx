import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="text-center">
      <header className="flex flex-col justify-center items-center min-h-screen bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        <img
          src={logo}
          className="h-[40vmin] pointer-events-none motion-safe:animate-[spin_20s_linear_infinite] duration-[20s]"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="text-[#61dafb]" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
