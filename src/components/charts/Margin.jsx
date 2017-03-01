import React, {Component} from 'react';
import Loading from './Loading'
import { Paper } from 'material-ui';
import * as api from '../../api'


export default class extends Component {

  state = {}

  componentDidMount() {
    this.fetchDataProfitMargin();
  }

  fetchDataProfitMargin() {
    api.getMargin()
    .then(response => response.json())
    .then(margin => {
      this.setState({data: margin.Gross_Profit_Margin_Percent})
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
        <h2 className="chart-title">Margin</h2>
        <p className="value">{this.state.data}%</p>
      </Paper>
    );
  }

}
