import React, {Component} from 'react'
import Loading from './Loading'
import {Line} from 'react-chartjs-2';
import { Paper } from 'material-ui';
import * as api from '../../api'


export default class extends Component {

  state = {}

  componentDidMount() {
    this.fetchDataSales();
  }

  fetchDataSales() {
    api.getSalesCostsProfits()
    .then(response => response.json())
    .then(data => {
      var output = {
        labels: data.map(obj => obj.Month),
        datasets: [
          {
            data: data.map(obj => obj.Sales),
            label: 'Dollar Value ($)',
            backgroundColor: [
            'rgba(0, 121, 180, 0.2)',
            ]

          }
        ]
      }
      this.setState({data: output})
    })
  }

  render() {
    if (!this.state.data) {
      return (
        <div className="loading-container">
          <Loading />
        </div>
      )
    }
    const options = {
      maintainAspectRatio: true,
      responsive: true
    }
    return (
      <Paper>
        <div className="chart-title">Sales</div>
        <Line data={this.state.data} options={options}/>
      </Paper>
    )
  }
}
