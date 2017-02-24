import React, {Component} from 'react';
import Loading from './Loading'

var hostName = 'https://cors-anywhere.herokuapp.com/https://decode-bot-project-sql-ajdez.c9users' +
    '.io';

export default class extends Component {

  state = {}

  componentDidMount() {
    this.fetchDataProfitMargin();
  }

  fetchDataProfitMargin() {
    fetch(`${hostName}/reports?grossProfitMargin`)
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
      <div className="margin">
        <p className="title">Margin</p>
        <p className="value">{this.state.data}%</p>
      </div>
    );
  }

}
