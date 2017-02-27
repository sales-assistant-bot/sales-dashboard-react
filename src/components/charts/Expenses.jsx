import React, {Component} from 'react'
import Loading from './Loading'
import { API_HOST } from '../../env'

export default class extends Component {
  
  state ={}

  componentDidMount() {
    this.fetchDataExpenses();
  }

  fetchDataExpenses() {
    fetch(`${hostName}/reports?totalExpenses`)
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
      <div className="number-report">
        <h2 className="title">Expenses</h2>
        <p className="value">${this.state.data}</p>
      </div>
    )
  }

}
