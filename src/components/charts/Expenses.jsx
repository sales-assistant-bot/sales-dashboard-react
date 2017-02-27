import React from 'react';
import Loading from './Loading'

var hostName = 'https://cors-anywhere.herokuapp.com/https://decode-bot-project-sql-ajdez.c9users.io';
class Expenses extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  fetchDataExpenses(){
    fetch(`${hostName}/reports?totalExpenses`)
    .then(response => response.json())
    .then(
      expenses => {
      this.setState({
        data:expenses.Total_Expenses

      })
    })
  }
  componentDidMount(){
    this.fetchDataExpenses();
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
    <div className="number-report">
      <h2 className="title">Expenses</h2>
      <p className="value">${this.state.data}</p>
    </div>
  )
}

}

export default Expenses;
