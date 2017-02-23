import React from 'react'
import {Chart} from 'react-google-charts'

// class Charts extends React.Component{
//   render() {
//     return (
//     <div className={"my-pretty-chart-container"}>
//       <Chart
//         chartType="ScatterChart"
//         data={[['Age', 'Weight'], [8, 12], [4, 5.5]]}
//         options={{}}
//         graph_id="ScatterChart"
//         width="100%"
//         height="400px"
//         legend_toggle
//       />
//     </div>
//     )
//   }
// }


//Table CHART
class TableChart extends React.Component{
  static propTypes = {
    sales: React.PropTypes.array
  }
  render() {
        {console.log(this.props.sales)}
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


export default TableChart;
