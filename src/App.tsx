import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './views/Login'
import Admin from './views/Admin'

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={Admin}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
