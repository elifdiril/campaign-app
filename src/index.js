import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HomePage from './pages/HomePage'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

const routing = (
  <Router>
      <div>
          <Route exact path= "/" component={App} />
          <Route path="/home" component={HomePage} />
      </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById('root'));

