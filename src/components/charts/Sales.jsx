import React from 'react';

var hostName = 'https://cors-anywhere.herokuapp.com/https://decode-bot-project-sql-ajdez.c9users.io';
class Sales extends React.Component {
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
    componentDidMount(){
      fetchDataSales();
    }
render() {
  return (
    <div className="sales">
      <h2>Total Sales ${this.state.totalSales}</h2>
    </div>
  )
}

}

export default Sales;
