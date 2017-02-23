import React from 'react'
import {Chart} from 'react-google-charts'



class PieChart extends React.Component{
  static propTypes = {
    topClient: React.PropTypes.array
  }
  render() {
    return (
    <div className="my-pretty-chart-container">
      <Chart
        chartTitle="DonutChart"
        chartType="PieChart"
        data= {this.props.topClient}
        options={{"title":"Top Clients"}}
        //graph_id="ScatterChart"
        width="100%"
        height="400px"
        legend_toggle
      />
    </div>


    )
  }
}


export default PieChart;
