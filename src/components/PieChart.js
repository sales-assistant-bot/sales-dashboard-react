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

class PieChart extends React.Component{
  render() {
    return (
    <div className={"my-pretty-chart-container"}>
      <Chart
        chartTitle="DonutChart"
        chartType="PieChart"
        data={[['Company', 'Revenue'], ["decodemtl", 1000], ["Oakley", 450], ['penis.inc', 350]]}
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
