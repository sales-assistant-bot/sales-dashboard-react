import React, {Component} from 'react';

var hostName = 'https://cors-anywhere.herokuapp.com/https://decode-bot-project-sql-ajdez.c9users.io';

export default class extends Component {

  state = {}

  componentDidMount() {
    this.fetchDataProfitMargin();
  }

  fetchDataProfitMargin() {
    fetch(`${hostName}/reports?grossProfitMargin`)
    .then(response => response.json())
    .then(margin => {
      this.setState({grossProfitMargin: margin.Gross_Profit_Margin_Percent})
    })
  }

  render() {
    return (
      <div className="margin">
        <p className="title">Margin</p>
        <p className="value">{this.state.grossProfitMargin}%</p>
      </div>
    );
  }

}
