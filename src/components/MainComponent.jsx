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
import {API_HOST} from '../env'
import Loading from './charts/Loading'
import { Paper } from 'material-ui';



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
        <div className="tile-lg">
          <div className="tile-xs"><Sales/></div>
          <div className="tile-xs"><Margin/></div>
          <div className="tile-xs"><Profits/></div>
          <div className="tile-xs"><AverageDealSize/></div>
          <div className="tile-xs"><Expenses/></div>
          <div className="tile-xs"><Profits/></div>

        </div>

        <div className="tile-lg"><SalesExpenseProfit/></div>
        <div className="tile-sm"><TopClients/></div>
        <div className="tile-sm"><TopClients/></div>
        <div className="tile-sm"><SalesTable /></div>

        {!this.state.goalsData ? <Paper className="tile-sm"><Loading/></Paper> :
          this.state.goalsData.map((goal, i) => (
            <div className="tile-sm" key={i}><GoalChart data={goal}/></div>
          ))}


      </div>
    )
  }

}
