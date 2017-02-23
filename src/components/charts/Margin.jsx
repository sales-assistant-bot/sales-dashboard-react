import React, {Component} from 'react';

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
        <h2>Margin</h2>
      </div>
    );
  }

}
