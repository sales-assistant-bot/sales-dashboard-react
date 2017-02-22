import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import PieChart from './components/PieChart';
import BarChart from './components/BarChart';
import TableChart from './components/TableChart';

import MainComponent from './components/MainComponent';

const routes = (
<Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={TableChart}/>
  </Route>
</Router>
)
  ReactDOM.render(routes, document.getElementById('root'));
