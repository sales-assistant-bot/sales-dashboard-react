import React from 'react';
import Loading from './Loading'
import { Paper } from 'material-ui';
import * as api from '../../api'


export default class extends React.Component {
    constructor(){
      super()
      this.state = {}
    }

    fetchDataSales(){
      api.getTotalRevenue()
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
      <Paper className="number-report">
        <h2 className="title">Sales</h2>
        <p className="value">${this.state.data}</p>
      </Paper>
    )
  }

}
