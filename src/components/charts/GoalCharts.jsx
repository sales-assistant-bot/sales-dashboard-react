import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Paper } from 'material-ui';
import moment from 'moment'

import Loading from './Loading';
import {API_HOST} from '../../env'
import './goalCharts.css'

export default class extends Component {

  state = {}

  componentDidMount() {
    this.fetchDataGoalGauge();
  }

  fetchDataGoalGauge() {
    fetch(`${API_HOST}/reports?goalGauge`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({data: data})
    })
  }

  render() {
    const options = {
      legend: {
        display: false
      }
    }
    return (
      <div>
        {
          !this.state.data
          ?
            <Paper>
              <Loading />
            </Paper>
          :
          this.state.data.map(goal => (
            <Paper className="tile-sm goal" key={goal.id}>
              <div>
                <div className="chart-title">
                  <span className="goal-date-range">
                    {
                      moment(goal.StartDate).format('MMM Do') +
                      " - " +
                      moment(goal.EndDate).format('MMM Do') + " "
                    }
                  </span>
                  {" : "}
                  {moment(goal.EndDate).fromNow(true)}
                  {" remaining."}
                </div>
                <Doughnut data={this.shapeData(goal)} options={options} height={130}/>
              </div>
            </Paper>
          ))
        }
      </div>
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
