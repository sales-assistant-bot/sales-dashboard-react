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
        <div className="goal-amount chart-title">
          {` Goal: $${data.GoalAmount.toMoney()}`}
        </div>
        <div className="goal-time-range">
          {
            moment(data.StartDate).format('MMM D') +
                " - " +
            moment(data.EndDate).format('MMM D') + " "
          }
        </div>
        <div className="goal-time-remaining">
          {moment(data.EndDate).fromNow(true)}
          {" remaining."}
        </div>

        <div className="progress-bars">
          <Progress  bar color={overValue? "success" : "warning"} value={mainValue}>
            {overValue ? <span className="goal-text-congrats">{`Congratulations, goal reached!`}</span> : null}
          </Progress>
          {overValue? <Progress bar color="info" value={overValue}/> : null}
        </div>
        {overValue
          ? <span className="goal-text">{`You've gone $${Math.round(Number(data.CurrentAmount-data.GoalAmount)).toMoney()} past your goal!` }</span>
          : <span className="goal-text">{`You've managed $${Math.round(data.CurrentAmount).toMoney()} so far.`}</span>
        }

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
