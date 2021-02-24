import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import styled from 'styled-components'
import Chat from './components/chat/Chat';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <AppMain>
          <Sidebar />
          <Switch>
            <Route exact path="/" >
              <Chat />
            </Route>
          </Switch>
        </AppMain>
      </Router>
    </div>
  );
}

const AppMain = styled.div`
  display: flex;
  height: 100vh;
`

export default App;
