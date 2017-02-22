import React from 'react';

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
        console.log(average)
      this.setState({
        average:average.Avg_Sale_Amount
      })
    }
    )
  }
  fetchData6(){
    fetch(`${hostName}/`)
    .then(response => response.json())
    .then(x =>{
      this.setState({
        x:x
      })
    })
  }
  fetchData7(){
    fetch(`${hostName}/`)
    .then(response => response.json())
    .then(x =>{
      this.setState({
        x:x
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


  }

render() {
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
      <div className="sales-table"></div>
      <div className="top-clients"></div>
    </div>
  )
}
}
export default MainComponent;
