import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { 
  // Link, 
  BrowserRouter as Router } from "react-router-dom";
import Routes from './routes'
import { Route } from 'react-router-dom'

function App(props) {
  return (
    <Router>
      <div>
        <Route path="/" component={Routes} />
      </div>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todo">TODO</Link>
            </li>
          </ul>
        </header>
      </div> */}
    </Router>
  );
}

export default App;
