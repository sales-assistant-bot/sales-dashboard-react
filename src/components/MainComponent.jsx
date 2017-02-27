import React from 'react';
import Margin from './charts/Margin';
import Profits from './charts/Profits';
import AverageDealSize from './charts/AverageDealSize';
import TopClients from './charts/TopClients';
import SalesExpenseProfit from './charts/SalesExpenseProfit';
import Sales from './charts/Sales';
import Expenses from './charts/Expenses';
import SalesTable from "./charts/SalesTable";
import GoalCharts from "./charts/GoalCharts";
import { Paper } from 'material-ui';

export default class extends React.Component {

  render() {
    return (
      <div className="main-component">

        <Paper className="tile-xs"><Sales/></Paper>
        <Paper className="tile-xs"><Margin/></Paper>
        <Paper className="tile-xs"><Profits/></Paper>
        <Paper className="tile-xs"><AverageDealSize/></Paper>
        <Paper className="tile-xs"><Expenses/></Paper>
        <Paper className="tile-sm"><SalesExpenseProfit/></Paper>
        <Paper className="tile-sm"><TopClients/></Paper>

        <GoalCharts />

        <Paper className="tile-sm-long"><SalesTable /></Paper>
        

      </div>
    )
  }

}
