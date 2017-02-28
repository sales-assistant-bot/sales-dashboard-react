import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import Loading from './Loading'
import {API_HOST} from '../../env'
import { Paper } from 'material-ui';



export default class extends Component {
  state = {
    data: {
      labels: [],
      datasets: [
        {
          label: 'Sales',
          backgroundColor: 'rgba(39, 128, 164, 0.2)',
          borderColor: 'rgba(39, 128, 164, 1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(39, 128, 164, 0.4)',
          hoverBorderColor: 'rgba(39, 128, 164, 1)',
          data: []
        },
        {
          label: 'Cost',
          backgroundColor: 'rgba(227, 11, 93, 0.2)',
          borderColor: 'rgba(227, 11, 93, 1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(227, 11, 93, 0.4)',
          hoverBorderColor: 'rgba(227, 11, 93, 1)',
          data: []
        },
        {
          label: 'Profits',
          backgroundColor: 'rgba(149, 173, 51, 0.2)',
          borderColor: 'rgba(149, 173, 51, 1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(149, 173, 51, 0.4)',
          hoverBorderColor: 'rgba(149, 173, 51, 1)',
          data: []
        }
      ]
    }
  }

  componentDidMount() {
    this.fetchDataSalesExpenseProfit();
  }

  fetchDataSalesExpenseProfit() {
    fetch(`${API_HOST}/reports?barChartQuery`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      let dataStructure = this.state.data;
      data.forEach(d => {
        if(d.Sales || d.Costs || d.Profits) {
          dataStructure.labels.push(d.Month)
          dataStructure.datasets[0].data.push(d.Sales)
          dataStructure.datasets[1].data.push(d.Costs)
          dataStructure.datasets[2].data.push(d.Profits)
        }
      })

      this.setState({data: dataStructure})
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
      <Paper>
        <div className="chart-title">
          <span style={{color: "rgba(39, 128, 164, 1)"}}> Sales </span>
          <span style={{color: 'rgba(227, 11, 93, 1)'}}> Costs </span>
          <span style={{color: 'rgba(149, 173, 51, 1)'}}> Profits </span>
        </div>
        <Bar
          data={this.state.data}
          height={200}
          width={400}
          options={{
            layout: {
                padding: 10
            },
            legend: {
              display: false
            },
            // responsive: true,
            maintainAspectRatio: true
          }}
        />
      </Paper>
    )
  }

}
