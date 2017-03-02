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
              'rgba(0, 121, 180, 0.2)',
              'rgba(34, 46, 80, 0.2)',
              'rgba(67, 154, 134, 0.2)',
                'rgba(61, 90, 128, 0.2)',
              'rgba(52, 193, 217,0.2)',
              '#fcb455',
              '#a1fcf9'
            ],
            hoverBackgroundColor: [
              'rgba(0, 121, 180, 0.5)',
              'rgba(34, 46, 80, 0.5)',
              'rgba(67, 154, 134, 0.5)',
              'rgba(61, 90, 128, 0.5)',
              'rgba(52, 193, 217,0.5)',
              '#fcb455',
              '#a1fcf9'
            ],
            // borderColor: [
            //   'rgba(0, 121, 180, 0.4)',
            //   'rgba(34, 46, 80, 0.4)',
            //   'rgba(67, 154, 134, 0.4)',
            //   'rgba(88, 216, 193, 0.4)',
            //   'rgba(28, 38, 66, 0.4)',
            //
            // ]
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
