import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
    Paper
} from 'material-ui/Table';


var hostName = 'https://cors-anywhere.herokuapp.com/https://decode-bot-project-sql-ajdez.c9users.io';

export default class extends React.Component {
  constructor(){
    super()
    this.state = {}
  }
  fetchDataGoalsChart(){
    fetch(`${hostName}/reports?goalGauge`)
    .then(response=>response.json())
    .then(data=>{
      this.setState({data:data})
    })
  }
  componentDidMount(){
    this.fetchDataGoalsChart();
  }
  render(){
    if(!this.state.data){
      return <div> LOADING.....</div>
    }
    else{
      return(
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Start Date</TableHeaderColumn>
              <TableHeaderColumn>End Date</TableHeaderColumn>
              <TableHeaderColumn>Goal</TableHeaderColumn>
              <TableHeaderColumn>Progress</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.state.data.map(function(data, i){
              return(
                <TableRow key ={i}>
                  <TableRowColumn>{data.StartDate.slice(0,10)}</TableRowColumn>
                  <TableRowColumn>{data.EndDate.slice(0,10)}</TableRowColumn>
                  <TableRowColumn>{data.GoalAmount}</TableRowColumn>
                  <TableRowColumn>{data.CurrentAmount}</TableRowColumn>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      )
    }
  }
}
