import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes';
import { Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" component={Routes} />
      </div>
    </Router>
  );
}

export default App;
