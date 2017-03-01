import React, {Component} from 'react';
import Loading from './Loading'
import { Paper } from 'material-ui';
import * as api from '../../api'


export default class extends Component {

  state = {}

  componentDidMount() {
    this.fetchDataProfits();
  }

  fetchDataProfits() {
    api.getProfits()
    .then(response => response.json())
    .then(profits => {
      this.setState({data: profits.Profit})
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
        <h2 className="chart-title">Profits</h2>
        <p className="value">${this.state.data}</p>
      </Paper>
    );
  }

}
