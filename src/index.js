import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MainComponent from './components/MainComponent';
import App from './App';
import './index.css';

// Needed for onTouchTap
injectTapEventPlugin();

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={MainComponent}/>
    </Route>
  </Router>
)
ReactDOM.render(routes, document.getElementById('root'));
