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
import GoalGauge from "./charts/goalGauge";
import GoalsTable from "./charts/GoalsTable";
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
        <Paper className="tile-md sales"><SalesExpenseProfit/></Paper>
        <Paper className="tile table"><TableExample /></Paper>
        <Paper className="tile client"><TopClients/></Paper>
        <GoalCharts />
        <Paper className="tile goalTable"><GoalsTable/></Paper>
      </div>
    )
  }

}
