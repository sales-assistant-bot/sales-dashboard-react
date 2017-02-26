import React from 'react';
import {Chart} from 'react-google-charts';
import Loading from './Loading';

var hostName = 'https://cors-anywhere.herokuapp.com/https://decode-bot-project-sql-ajdez.c9users.io';

// Goal Gauge
class GoalGauge extends React.Component{
  constructor(){
    super()
    this.state = {}
  }
  fetchDataGoalGauge(){
    fetch(`${hostName}/reports?goalGauge`)
    .then(response=> response.json())
    .then(data=>{
      var output = (
        [["Goal Id", "Sales Goal", "Actual Sales"]]
        .concat(
          data.map(function(obj){
            console.log("IIIIIIIIIIIII", obj.GoalAmount)
            return[obj.id, obj.GoalAmount, obj.CurrentAmount]
          })
        )
      )
      this.setState({data: output})
    })
  }
  componentDidMount(){
    this.fetchDataGoalGauge();
  }
  render(){
    const options = {
      "title" : "Sales Goals + Sales Results",
      animation: {
        startup: true,
        duration: 1000,
        easing: 'out'
      },
      "vAxis":{
        "title":"$"
      },
      "hAxis":{
        "title": "Goals"
      },
      // "seriesType": "bars",
      "series": {
        "1:": {
          "type" : "line"
        },
        "2": {
          "type": "line"
        }
      }
    }
    return(
      <div className={"my-pretty-chart-container"}>
        <Chart
          charType="ComboChart"
          data={this.state.data}
          options={options}
          width="100%"
          height="400px"
          legend_toggle
          loader={<Loading />}
        />
      </div>
    )
  }
}


export default GoalGauge;
