import React from 'react';
import {Chart} from 'react-google-charts';
import Loading from './Loading'

var hostName = 'https://cors-anywhere.herokuapp.com/https://decode-bot-project-sql-ajdez.c9users.io';

class SalesExpenseProfit extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  fetchDataSalesExpenseProfit() {
    fetch(`${hostName}/reports?barChartQuery`)
    .then(response => response.json())
    .then(data => {
      var output = (
        [["Month", "Sales", "Expenses", "Profits"]]
        .concat(
          data.map(function (obj) {
            return [obj.Month, obj.Sales, obj.Costs, obj.Profits]
          })
        )
      )
      this.setState({data: output})
    })
  }
  componentDidMount() {
    this.fetchDataSalesExpenseProfit();
  }

  render() {
    const options = {
      "title": "MONTHLY(Sales-Expenses-Profits)",
      animation: {
        startup: true,
        duration: 1000,
        easing: 'out',
      },
      "vAxis": {
        "title": "$"
      },
      "hAxis": {
        "title": "Month"
      },
      "seriesType": "bars",
      "series": {
        "3": {
          "type": "line"
        }
      }
    }

    return (
      <div className={"my-pretty-chart-container"}>
        <Chart
          chartType="ComboChart"
          data={this.state.data}
          options={options}
          width="100%"
          height="400px"
          legend_toggle
          loader={<Loading />}
        />
      </div>
    )
  }

}

export default SalesExpenseProfit;
