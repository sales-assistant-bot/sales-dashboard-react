import React from 'react'
import Loading from './Loading'

var hostName = 'https://cors-anywhere.herokuapp.com/https://decode-bot-project-sql-ajdez.c9users.io';

// Goal Gauge
class GoalGauge extends React.Component{
  constructor(){
    super()
    this.state = {}
  }
  fetchDataGoalGauge(){
    fetch(`${hostName}/goals?goalGauge`)
    .then(response=> response.json())
    .then(data=>{
        // turn data in proper format, than put into state

    })
  }
  componentDidMount(){
    this.fetchDataGoalGauge();
  }
  return(){
    if (!this.state.data){
      return (
        <div> LOADING.... </div>
      )
    }
    else{
      let options = {
        width: 400,
        heigth: 120,
        greenFrom: {this.state.amount},
        greenTo: {this.state.amount * 1.25},
        minorTicks: 5,
        max: this.state.amount * 1.25
      }
      return(



      )
    }
  }
}
