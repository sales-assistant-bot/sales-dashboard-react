import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
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
              <h2 className="title">
                {"Goal: "}
                <span>
                  {
                    moment(goal.StartDate).format('MMM Do') +
                    " - " +
                    moment(goal.EndDate).format('MMM Do') + " "
                  }
                </span>
                {" : "}
                {moment(goal.EndDate).fromNow(true)}
                {" remaining."}
              </h2>
              <Pie data={this.shapeData(goal)} />
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
