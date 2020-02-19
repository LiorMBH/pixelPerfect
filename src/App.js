import React from 'react';
import { Router, Switch, Route } from 'react-router';
import history from './history';

import Home from './pages/Home.js';
import About from './pages/About.js';

import Header from './components/Header';
import Footer from './components/Footer';

import './assets/css/all.min.css';
import './assets/styles/global.scss';

function App() {
  return (
    <div className='App'>
      <Router history={history}>
        <Header></Header>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} exact />
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
