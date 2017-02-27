import React from 'react';
import Margin from './charts/Margin';
import Profits from './charts/Profits';
import AverageDealSize from './charts/AverageDealSize';
import TopClients from './charts/TopClients';
import SalesExpenseProfit from './charts/SalesExpenseProfit';
import Sales from './charts/Sales';
import Expenses from './charts/Expenses';
import SalesTable from "./charts/SalesTable";
import GoalChart from "./charts/GoalChart";
import { Paper } from 'material-ui';
import {API_HOST} from '../env'
import Loading from './charts/Loading'



export default class extends React.Component {

  state = {}

  componentDidMount() {
    this.fetchDataGoalGauge();
  }

  fetchDataGoalGauge() {
    fetch(`${API_HOST}/reports?goalGauge`)
    .then(response => response.json())
    .then(data => {
      this.setState({goalsData: data})
    })
  }

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

        {!this.state.goalsData ? <Paper className="tile-sm"><Loading/></Paper> :
          this.state.goalsData.map((goal, i) => (
          <Paper className="tile-sm" key={i}><GoalChart data={goal}/></Paper>
        ))}

        <Paper className="tile-sm"><SalesTable /></Paper>

      </div>
    )
  }

}
