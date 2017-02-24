import React, {Component} from 'react';
import Loading from './Loading'

var hostName = 'https://cors-anywhere.herokuapp.com/https://decode-bot-project-sql-ajdez.c9users.io';

export default class extends Component {

  state = {}

  componentDidMount() {
    this.fetchDataProfits();
  }

  fetchDataProfits() {
    fetch(`${hostName}/reports?profits`).then(response => response.json())
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
      <div className="profits">
        <p className="title">Profits</p>
        <p className="value">${this.state.data}</p>
      </div>
    );
  }

}
