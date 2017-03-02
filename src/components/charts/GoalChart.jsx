import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Paper } from 'material-ui';
import moment from 'moment'

import Loading from './Loading';
import './goalCharts.css'


export default class extends Component {

  render() {
    const options = {
      legend: {
        display: false
      },
      maintainAspectRatio: true,
      responsive: true

  //     const { data } = this.props;
  //  let mainValue = data.CurrentAmount/data.GoalAmount * 100;
  //  let overValue;
  //  if (mainValue > 100) {
  //    overValue = mainValue-100;
  //    mainValue = 100;
    }
    return (
      <Paper>
        <div className="chart-title">
          <span className="goal-date-range">
            {
              moment(this.props.data.StartDate).format('MMM Do') +
                  " - " +
              moment(this.props.data.EndDate).format('MMM Do') + " "
            }
          </span>
          {" : "}
          {moment(this.props.data.EndDate).fromNow(true)}
          {" remaining."}
        </div>
        <Doughnut data={this.shapeData(this.props.data)} options={options} height={100}/>
      </Paper>
    )
  }

  shapeData = (goal) => {
    return {
      labels: [
        'Achieved', 'Goal Remaining',
      ],
      datasets: [
        {
          data: [
            goal.CurrentAmount, goal.AmountMissing
          ],
          backgroundColor: [
            'rgba(0, 121, 180, 0.2)', 'rgba(34, 46, 80, 0.2)'
          ],
          hoverBackgroundColor: ['#rgba(0, 121, 180, 0.2)', 'rgba(34, 46, 80, 0.2)']
        }
      ]
    }
  }
}
