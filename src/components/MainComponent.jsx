import React from 'react';
import Margin from './charts/Margin';
import Profits from './charts/Profits';
import AverageDealSize from './charts/AverageDealSize';
import TopClients from './charts/TopClients';
import SalesExpenseProfit from './charts/SalesExpenseProfit';
import SalesTableChart from './charts/SalesTableChart';
import Sales from './charts/Sales';
import Expenses from './charts/Expenses';
import TableExample from "./Table";
import {Paper} from 'material-ui';

export default class extends React.Component {

  render() {
    return (
      <div className="main-component">
        <div className="number-reports">
          <Paper><Sales/></Paper>
          <Paper><Margin/></Paper>
          <Paper><Profits/></Paper>
          <Paper><AverageDealSize/></Paper>
          <Paper><Expenses/></Paper>
        </div>
        <div className="charts">
          <Paper className="sales"><SalesExpenseProfit/></Paper>
          <Paper className="table"><TableExample /></Paper>
          <Paper className="client"><TopClients/></Paper>
        </div>
      </div>
    )
  }

}
