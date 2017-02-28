import React, {Component} from 'react'
import { Paper } from 'material-ui'

import Loading from './Loading'
import * as api from '../../api'


export default class extends Component {

  state = {}

  componentDidMount(){
    this.fetchDataAvgDealSize();
  }

  fetchDataAvgDealSize(){
    api.getAverageDeal()
    .then(response => response.json())
    .then(
      average => {
      this.setState({
        data: average.Avg_Sale_Amount
      })
    })
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
        <h2 className="title">Average Deal Size </h2>
        <p className="value">${this.state.data}</p>
      </Paper>
    );
  }

}
