import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import CampaignPage from './pages/CampaignPage';
import LoginPage from './pages/LoginPage';
import useToken from './components/useToken';

function App() {

  const { token, setToken } = useToken();

  if (!token) {
    return <LoginPage setToken={setToken} />
  }

  return (
      <BrowserRouter>
        <Switch>
        <Route exact path= {["/campaigns", "/"]} >
            <CampaignPage />
          </Route>

        </Switch>
      </BrowserRouter>
  );
}

export default App;