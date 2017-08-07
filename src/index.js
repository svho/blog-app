import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Home from './home';
import Articles from './articles';
import About from './about';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

ReactDOM.render(
  <Router>
    <div>
      <App/>

      <Route exact path="/" component={Home}/>
      <Route path="/articles" component={Articles} history={history}/>
      <Route path="/about" component={About} history={history}/>
    </div>
  </Router>
  , document.getElementById('root'));
