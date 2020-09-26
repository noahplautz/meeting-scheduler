import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { mainListItems, secondaryListItems } from './listItems';
function App() {
  return (
    <div className="App">
      <div id="top-banner">
        <h1>Meeting Scheduler</h1>
      </div>

      <div id="nav">
        <nav>
          <ul>
            <li>Home</li>
            <li>Add Meeting</li>
            <li>Current Meetings</li>
          </ul>
        </nav>
      </div>
     
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
