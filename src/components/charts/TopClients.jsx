import React, {Component} from 'react'
// import {Chart} from 'react-google-charts'
import Loading from './Loading'
import {Pie} from 'react-chartjs-2';
import {API_HOST} from '../../env'


export default class extends Component {

  state = {}

  componentDidMount() {
    this.fetchDataTopClients();
  }

  fetchDataTopClients() {
    fetch(`${API_HOST}/reports?topClients`).then(response => response.json()).then(data => {
      var output = {
        labels: data.map(obj => obj.CompanyName),
        datasets: [
          {
            data: data.map(obj => obj.TotalSales),
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#62ffb8',
              '#69ff56',
              '#a756ff',
              '#fcb455',
              '#a1fcf9'
            ],
            hoverBackgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#62ffb8',
              '#69ff56',
              '#a756ff',
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
    return (
      <div>
        <div className="chart-title">Top Clients</div>
        <Pie height={230} data={this.state.data}/>
      </div>
    )
  }
}
