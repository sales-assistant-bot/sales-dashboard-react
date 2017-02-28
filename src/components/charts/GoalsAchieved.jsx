import React, {Component} from 'react'
import Loading from './Loading'
import {Paper} from 'material-ui';
import * as api from '../../api'


export default class extends Component {
  state = {}

  componentDidMount() {
    this.fetchDataGoalsAchieved();
  }

  fetchDataGoalsAchieved() {
    api.getGoalsAcheived()
    .then(response => response.json())
    .then(goals => {
      this.setState({data: goals.goalsCompleted})
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
        <h2 className="title"># Of Goals Achieved</h2>
        <p className="value">{this.state.data}</p>
      </Paper>
    )
  }
}
