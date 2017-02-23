import React, {Component} from 'react';

export default class extends Component {

  state = {}

  componentDidMount(){
    this.fetchDataAvgDealSize();
  }

  fetchDataAvgDealSize(){
    fetch(`${hostName}/reports?avgDealSize`)
    .then(response => response.json())
    .then(
      average => {
      this.setState({
        average:average.Avg_Sale_Amount
      })
    })
  }

  render() {
    return (
      <div className="avgDealSize">
        <h2>Average Deal Size</h2>
      </div>
    );
  }

}
