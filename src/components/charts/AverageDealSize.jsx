import React, {Component} from 'react';
import Loading from './Loading'
import {API_HOST} from '../../env'
import { Paper } from 'material-ui';



export default class extends Component {

  state = {}

  componentDidMount(){
    this.fetchDataAvgDealSize();
  }

  fetchDataAvgDealSize(){
    fetch(`${API_HOST}/reports?avgDealSize`)
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
