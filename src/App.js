import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" component={Routes} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
