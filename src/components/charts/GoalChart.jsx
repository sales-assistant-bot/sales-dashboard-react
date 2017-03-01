import React, { Component } from 'react';
// import { Doughnut } from 'react-chartjs-2';
import { Paper } from 'material-ui';
import moment from 'moment'
import { Progress } from 'reactstrap';


import Loading from './Loading';
import './goalCharts.css'


export default class extends Component {

  render() {
    const { data } = this.props;
    let mainValue = data.CurrentAmount/data.GoalAmount * 100;
    let overValue;
    if (mainValue > 100) {
      overValue = mainValue-100;
      mainValue = 100;
    }
    return (
      <Paper className="goal">
        <div className="chart-title">
          <div className="goal-amount">
            {` Goal: $${data.GoalAmount.toMoney()}`}
          </div>
          <div className="goal-date-range">
            {
              moment(data.StartDate).format('MMM D') +
                  " - " +
              moment(data.EndDate).format('MMM D') + " "
            }
          </div>
        </div>
        {overValue
          ? <span>{`Congratulations, $${data.GoalAmount} reached!`}</span>
          : <span>{`You've managed $${Math.round(data.CurrentAmount).toMoney()} so far.`}</span>
        }

        <Progress animated bar color={overValue? "success" : "warning"} value={mainValue}>
        </Progress>
        {overValue? <Progress animated bar color="info" value={overValue}/> : null}
        {overValue? <span>{`You've gone $${Math.round(Number(data.CurrentAmount-data.GoalAmount)).toMoney()} past your goal!` }</span> : null}

        <div className="goal-time-remaining">
          {moment(data.EndDate).fromNow(true)}
          {" remaining."}
        </div>
      </Paper>
    )
  }
}


Number.prototype.toMoney = function(decimals, decimal_sep, thousands_sep) {
   var n = this,
   c = isNaN(decimals) ? 2 : Math.abs(decimals),
   d = decimal_sep || '.',
   t = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
   sign = (n < 0) ? '-' : '',
   i = parseInt(n = Math.abs(n).toFixed(c)) + '',
   j = ((j = i.length) > 3) ? j % 3 : 0;
   return sign + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '');
}
