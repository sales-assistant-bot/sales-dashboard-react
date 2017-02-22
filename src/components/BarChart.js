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


//BAR CHART CHART
class BarChart extends React.Component{
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


export default BarChart;
