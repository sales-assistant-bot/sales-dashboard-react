import React from 'react'
import {Chart} from 'react-google-charts'


var hostName = 'https://cors-anywhere.herokuapp.com/https://decode-bot-project-sql-ajdez.c9users.io';

class TopClients extends React.Component{
  constructor(){
    super()
    this.state = {}
  }

  fetchDataTopClients(){
    fetch(`${hostName}/reports?topClients`)
    .then(response => response.json())
    .then(topClients =>{
      this.setState({
        topClients: topClients
      })
    })
  }
  componentDidMount(){
    fetchDataTopClients();
  }
  render() {
    return (
    <div className="top-clients">
      <Chart
        chartTitle="DonutChart"
        chartType="PieChart"
        data= {this.props.topClient}
        options={{"title":"Top Clients"}}
        //graph_id="ScatterChart"
        width="100%"
        height="400px"
        legend_toggle
      />
    </div>
    )
  }
}


export default TopClients;
