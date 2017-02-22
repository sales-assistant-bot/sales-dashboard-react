import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sales from './components/Sales';
import Clients from './components/Clients';
import AdvancedMetrics from './components/AdvancedMetrics';
import Overview from './components/Overview';
import Leads from './components/Leads';
import Weekly from './components/Weekly';
import Monthly from './components/Monthly';
import Yearly from './components/Yearly';

const routes = (
<Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Navbar}/>
    <Route path="navbar" component={Navbar}>
      <Route path="sales">
        <IndexRoute component={Sales}/>
        <Route path=":timeperiod" component={Sales}/>
      </Route>
      <Route path="clients">
        <IndexRoute component={Clients}/>
        <Route path=":timeperiod" component={Sales}/>
      </Route>
      <Route path="advancedMetrics">
        <IndexRoute component={AdvancedMetrics}/>
        <Route path=":timeperiod" component={AdvancedMetrics}/>
      </Route>
      <Route path="overview">
        <IndexRoute component={Ovewview}/>
        <Route path=":timeperiod" component={Ovewview}/>
      </Route>
      <Route path="leads" component={Leads}/>
    </Route>
    <Route path="footer" component={Footer}/>
  </Route>
  </Router>
)
  ReactDOM.render(routes, document.getElementById('root'));
