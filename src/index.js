import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CampaignPage from './pages/CampaignPage'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

const routing = (
  <Router>
      <div>
          <Route exact path= "/" component={App} />
          <Route path="/campaigns" component={CampaignPage} />
      </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById('root'));

