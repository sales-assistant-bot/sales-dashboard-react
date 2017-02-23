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
      var output = data.map(function(obj) {
        return [obj.Customers, obj.Sales, obj.Dates]
      })
      this.setState({
        data:output
      })
    })
  }
  componentDidMount(){
    this.fetchDataTableChart();
  }
  render() {

    if(!this.state.data){
      return <div> LOADING.... </div>
    }
    else{
      return (
      <div className={"my-pretty-chart-container"}>
        <Chart
          //chartTitle="DonutChart"
          chartType="Table"
          columns={[{"type":"string", "label":"Company Name"},{"type":"number", "label":"Sales"},{"type":"string", "label":"Date"}]}
          rows={this.state.data}
          width="100%"
          height="400px"
          chartPackages={["table"]}
          legend_toggle
        />
      </div>
      )
    }    
  }
}


export default SalesTableChart;
