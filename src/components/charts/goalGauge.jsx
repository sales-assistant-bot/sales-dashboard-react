import React from 'react';
import Loading from './Loading';
import {Chart} from 'react-google-charts';

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
      var output = (
        [["Time Frame", "Sales Goal", "Actual Sales"]]
        .concat(
          data.map(function(obj){
            return[obj.EndDate, obj.GoalAmount, obj.CurrentAmount]
          })
        )
      )
      this.setState({data: output})
    })
  }
  componentDidMount(){
    this.fetchDataGoalGauge();
  }
  return(){
    const options = {
      "title" : "Sales Goals + Sales Results",
      animation: {
        startup: true,
        duration: 1000,
        easing: 'out'
      },
      "vAxis":{
        "title":"Sales($)"
      },
      "hAxis":{
        "title": "Goals"
      },
      "seriesType": "bars",
      "series": {
        "2":{
          "type" : "line"
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
