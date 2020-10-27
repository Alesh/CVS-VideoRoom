import React from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './assets/Logo.svg';
import './styles/App.css';
import Welcome from './Welcome';
import UserSession from './UserSession';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <UserSession>
        <Switch>
          <Route path="*" children={<Welcome tabIndex={0} />} />
        </Switch>
      </UserSession>
    </div>
  );
}

export default App;
