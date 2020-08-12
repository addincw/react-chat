import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';

import LoginPage from './pages/auth/Login';
import ChatPage from './pages/Chat';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={LoginPage} />
        <Route path="/chat" component={ChatPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
