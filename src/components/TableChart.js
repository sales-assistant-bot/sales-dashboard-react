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
  render() {
    return (
    <div className={"my-pretty-chart-container"}>
      <Chart
        //chartTitle="DonutChart"
        chartType="Table"
        columns = {[{"type":"string", "label":"Company Name"},{"type":"string", "label":"Sales"},{"type":"string", "label":"Date"}]}
        rows= {[["DecodeMTL", "$10000", "2017/01/01"],["Oakley", "$5000", "2017/01/01"]]}
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
