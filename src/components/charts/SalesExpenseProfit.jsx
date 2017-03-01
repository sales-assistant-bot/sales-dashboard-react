import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import Loading from './Loading'
import { Paper } from 'material-ui';
import * as api from '../../api'


export default class extends Component {
  state = {
    data: {
      labels: [],
      datasets: [
        {
          label: 'Sales',
          backgroundColor: 'rgba(0, 121, 145, 0.2)',
          borderColor: 'rgba(39, 128, 164, 1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(0, 121, 145, 0.4)',
          hoverBorderColor: 'rgba(0, 121, 145, 1)',
          data: []
        },
        {
          label: 'Cost',
          backgroundColor: 'rgba(34, 46, 80, 0.2)',
          borderColor: 'rgba(34, 46, 80, 1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(34, 46, 80, 0.4)',
          hoverBorderColor: 'rgba(34, 46, 80, 1)',
          data: []
        },
        {
          label: 'Profits',
          backgroundColor: 'rgba(67, 154, 134, 0.2)',
          borderColor: 'rgba(67, 154, 134, 1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(67, 154, 134, 0.4)',
          hoverBorderColor: 'rgba(67, 154, 134, 1)',
          data: []
        }
      ]
    }
  }

  componentDidMount() {
    this.fetchDataSalesExpenseProfit();
  }

  fetchDataSalesExpenseProfit() {
    api.getSalesCostsProfits()
    .then(response => response.json())
    .then(data => {
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
          <span style={{color: "rgba(39, 128, 164, 0.6)"}}> Sales </span>
          <span style={{color: 'rgba(34, 46, 80, 0.6)'}}> Costs </span>
          <span style={{color: 'rgba(67, 154, 134, 0.6)'}}> Profits </span>
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
