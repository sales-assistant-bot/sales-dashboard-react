import React, {Component} from 'react'
import Loading from './Loading'

var hostName = 'https://cors-anywhere.herokuapp.com/https://decode-bot-project-sql-ajdez.c9users.io';


export default class extends Component{
  state={}

  componentDidMount(){
    this.fetchDataGoalsAchieved();
  }
  fetchDataGoalsAchieved(){
    fetch(`${hostName}/reports?goalsAchieved`)
    .then(response=>response.json())
    .then(goals=>{
      this.setState({data: goals.goalsCompleted})
    })
  }

  render(){
    if(!this.state.data){
      return(
        <div className = "loading-container">
          <Loading />
        </div>
      )
    }
    return(
      <div className="number-report">
        <h2 className="title"># Of Goals Achieved</h2>
        <p className = "value">{this.state.data}</p>
      </div>
    )
  }
}
