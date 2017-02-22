import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import MainComponent from './components/MainComponent';

const routes = (
<Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={MainComponent}/>
    <Route path="/MainComponent" component={MainComponent}/>
  </Route>
</Router>
)
  ReactDOM.render(routes, document.getElementById('root'));
