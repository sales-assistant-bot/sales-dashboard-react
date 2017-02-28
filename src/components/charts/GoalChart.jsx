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
            '#BDC39D', '#FCCC8E'
          ],
          hoverBackgroundColor: ['#BDC39D', '#FCCC8E']
        }
      ]
    }
  }

}
