import React, {Component} from 'react';

var hostName = 'https://cors-anywhere.herokuapp.com/https://decode-bot-project-sql-ajdez.c9users.io';

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
