import React from 'react';
import Chart from 'react-google-charts'

var hostName = 'https://cors-anywhere.herokuapp.com/https://decode-bot-project-sql-ajdez.c9users.io';
class SalesExpenseProfit extends React.Component {
  constructor(){
    super()
    this.state = {}
  }
  fetchData8(){
    fetch(`${hostName}/`)
    .then(response => response.json())
    .then(x =>{
      this.setState({
        x:x
      })
    })
  }
  componentDidMount(){
    this.fetchDataTableChart();
  }
render() {
  return (
    <div className={"my-pretty-chart-container"}>
      <Chart
        //chartTitle="DonutChart"
        chartType="ComboChart"
        data={[["Month", "Sales", "Expenses", "Profits"], ["2016/01", 10000, 5000, 5000,],["2016/02", 12000, 10000, 2000],["2016/03", 6000, 4500, 1500] ]}
        options={{"title":"MONTHLY(Sales-Expenses-Profits)", "vAxis":{"title":"$"}, "hAxis":{"title": "Month"}, "seriesType": "bars","series":{"3":{"type":"line"}} }}
        width="100%"
        height="400px"
        legend_toggle
      />
    </div>
  )
}

}

export default SalesExpenseProfit;
