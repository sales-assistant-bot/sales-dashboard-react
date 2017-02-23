import React from 'react';
import PieChart from './PieChart';
import BarChart from './BarChart';
import TableChart from './TableChart';

var hostName = 'https://cors-anywhere.herokuapp.com/https://decode-bot-project-sql-ajdez.c9users.io';

class MainComponent extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  fetchDataSales(){
    fetch(`${hostName}/reports?totalRev`)
    .then(response => response.json())
    .then(
      totalSales => {
      this.setState({
        totalSales:totalSales.Total_Sales
      })
    })
  }
  fetchDataExpenses(){
    fetch(`${hostName}/reports?totalExpenses`)
    .then(response => response.json())
    .then(
      expenses => {
      this.setState({
        expenses:expenses.Total_Expenses

      })
    })
  }

  fetchDataProfits(){
    fetch(`${hostName}/reports?profits`)
    .then(response => response.json())
    .then(
      profits =>{
      this.setState({
        profits:profits.Profit
      })
    })
  }
  fetchDataProfitMargin(){
    fetch(`${hostName}/reports?grossProfitMargin`)
    .then(response => response.json())
    .then(margin =>{
      this.setState({
        grossProfitMargin:margin.Gross_Profit_Margin_Percent
      })
    }
  )
  }

  fetchDataAvgDealSize(){
    fetch(`${hostName}/reports?avgDealSize`)
    .then(response => response.json())
    .then(
      average => {
      this.setState({
        average:average.Avg_Sale_Amount
      })
    }
    )
  }
  fetchDataTopClients(){
    fetch(`${hostName}/reports?topClients`)
    .then(response => response.json())
    .then(topClients =>{
      this.setState({
        topClients: topClients
      })
    })
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
    this.fetchDataSales();
    this.fetchDataExpenses();
    this.fetchDataProfits();
    this.fetchDataProfitMargin();
    this.fetchDataAvgDealSize();
    this.fetchDataTopClients();
    this.fetchDataTableChart();

  }

render() {
    //Pie Chart legend. Figure out better place to leave this
   var pieChartLegend =[["Company", "Sales"]];
   var barChartLegend = [["Month", "Sales", "Expenses", "Profits"]];
   var salesTableLegend =[];

  return (
    <div className="main-component">
      <div className="sales">
        <h2>Total Sales ${this.state.totalSales}</h2>
      </div>
      <div className="expenses">
        <h2>Expenses ${this.state.expenses}</h2>
      </div>
      <div className="profits">
        <h2>Profits ${this.state.profits}</h2>
      </div>
      <div className="margin">
        <h2>Margin {this.state.grossProfitMargin}%</h2>
      </div>
      <div className="avgDealSize">
        <h2>Average Deal Size {this.state.average}</h2>
      </div>
      <div className="sales-expense-profit"></div>
      <div className="sales-table">

        {this.state.data ? this.state.data.map(function(sales){
          var arraySales = [sales.Customers, sales.Sales, sales.Dates]
          salesTableLegend.push(arraySales)
            return <TableChart sales={salesTableLegend}/>
        }) :null}
      </div>
      <div className="top-clients">
        {this.state.topClients ? this.state.topClients.map(function(client){
          var arrayClient = [client.CompanyName, client.TotalSales]
          pieChartLegend.push(arrayClient)
            return <PieChart topClient={pieChartLegend}/>
        }) :null}
      </div>
    </div>
              )
}
}
export default MainComponent;
