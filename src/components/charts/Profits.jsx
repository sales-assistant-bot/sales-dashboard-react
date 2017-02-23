import React, {Component} from 'react';

var hostName = 'https://cors-anywhere.herokuapp.com/https://decode-bot-project-sql-ajdez.c9users.io';

export default class extends Component {

  state = {}

  componentDidMount() {
    this.fetchDataProfits();
  }

  fetchDataProfits() {
    fetch(`${hostName}/reports?profits`).then(response => response.json())
    .then(profits => {
      this.setState({profits: profits.Profit})
    })
  }

  render() {
    return (
      <div className="profits">
        <h2>Profits</h2>
      </div>
    );
  }

}
