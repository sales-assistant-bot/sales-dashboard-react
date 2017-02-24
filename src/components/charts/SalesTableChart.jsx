import React from 'react'
import {Chart} from 'react-google-charts'
import Loading from './Loading'


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
        return [obj.Customers, obj.Sales, obj.Dates.slice(0,10)]
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
    let options = {
      animation: {
        startup: true,
        duration: 1000,
        easing: 'out',
      }
    }

    return (
      <div className={"my-pretty-chart-container"}>
        <Chart
          chartType="Table"
          columns={[{"type":"string", "label":"Company"},{"type":"number", "label":"Sales"},{"type":"string", "label":"Date"}]}
          rows={this.state.data}
          options={options}
          width="100%"
          height="400px"
          chartPackages={["table"]}
          legend_toggle
          loader={<Loading />
          }
        />
      </div>
    )
  }
}


export default SalesTableChart;
