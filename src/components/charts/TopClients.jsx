import React, {Component} from 'react'
import Loading from './Loading'
import {Pie} from 'react-chartjs-2';
import { Paper } from 'material-ui';
import * as api from '../../api'


export default class extends Component {

  state = {}

  componentDidMount() {
    this.fetchDataTopClients();
  }

  fetchDataTopClients() {
    api.getTopClients()
    .then(response => response.json())
    .then(data => {
      var output = {
        labels: data.map(obj => obj.CompanyName),
        datasets: [
          {
            data: data.map(obj => obj.TotalSales),
            backgroundColor: [
              '#222E50',
              '#BCD8C1',
              '#439A86',
              '#007991',
              '#4B66AF',
              '#fcb455',
              '#a1fcf9'
            ],
            hoverBackgroundColor: [
              '#222E50',
              '#BCD8C1',
              '#439A86',
              '#007991',
              '#4B66AF',
              '#fcb455',
              '#a1fcf9'
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
        <div className="chart-title">Top Clients</div>
        <Pie data={this.state.data} options={options}/>
      </Paper>
    )
  }
}
