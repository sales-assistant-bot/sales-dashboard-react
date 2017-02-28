import React, {Component} from 'react'
import Loading from './Loading'
import { API_HOST } from '../../env'
import { Paper } from 'material-ui';


export default class extends Component {

  state ={}

  componentDidMount() {
    this.fetchDataExpenses();
  }

  fetchDataExpenses() {
    fetch(`${API_HOST}/reports?totalExpenses`)
    .then(response => response.json())
    .then(expenses => {
      this.setState({data: expenses.Total_Expenses})
    })
  }

  render() {
    if (!this.state.data) {
      return (
        <div className="loading-container">
          <Loading/>
        </div>
      )
    }
    return (
      <Paper className="number-report">
        <h2 className="title">Expenses</h2>
        <p className="value">${this.state.data}</p>
      </Paper>
    )
  }

}
