import React from 'react'
import {Chart} from 'react-google-charts'


var hostName = 'https://cors-anywhere.herokuapp.com/https://decode-bot-project-sql-ajdez.c9users.io';
//Table CHART
class SalesTableChart extends React.Component{
  constructor(){
    super()
    this.state = {}
  }
  fetchDataTableChart(){
    fetch(`${hostName}/reports?tableChart`)
    .then(response => response.json())
    .then(data =>{
      this.setState({
        data:data
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
        chartType="Table"
        columns = {[{"type":"string", "label":"Company Name"},{"type":"number", "label":"Sales"},{"type":"string", "label":"Date"}]}
        rows= {this.props.sales}
        width="100%"
        height="400px"
        chartPackages = {["table"]}
        legend_toggle
      />
    </div>
    )
  }
}


export default SalesTableChart;
