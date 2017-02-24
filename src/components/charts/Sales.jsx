import React from 'react';
import Loading from './Loading'

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
          data:totalSales.Total_Sales
        })
      })
    }
    componentDidMount(){
      this.fetchDataSales();
    }
  render() {
    if (!this.state.data) {
      return (
        <div className="loading-container">
          <Loading />
        </div>
      )
    }
    return (
      <div className="sales">
        <p className="title">Sales</p>
        <p className="value">${this.state.data}</p>
      </div>
    )
  }

}

export default Sales;
