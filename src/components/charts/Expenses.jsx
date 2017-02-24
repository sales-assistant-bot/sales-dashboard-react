import React from 'react';

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
        expenses:expenses.Total_Expenses

      })
    })
  }
  componentDidMount(){
    this.fetchDataExpenses();
  }

render() {
  return (
    <div className="expenses">
      <p className="title">Expenses</p>
      <p className="value">${this.state.expenses}</p>
    </div>
  )
}

}

export default Expenses;
