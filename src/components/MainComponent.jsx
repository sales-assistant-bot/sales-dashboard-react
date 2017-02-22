import React from 'react';
var hostName = 'https://cors-anywhere.herokuapp.com/https://decode-bot-project-sql-ajdez.c9users.io';
class MainComponent extends React.Component {
  constructor(){
    super()
    this.state = {}
  }
  fetchDataSales(){
    fetch(`${hostName}/sales`)
    .then(response => console.log(response))
      //response.json())
    .then(
      x => {
      console.log(x)
      this.setState({
        x:x
      })
    }
  )
  }
  fetchDataExpenses(){
    fetch(`${hostName}/expenses`)
    .then(response => response.json())
    .then(
      x => {
      this.setState({
        x:x
      })
    }
    )
  }
  fetchDataCompany(){
    fetch(`${hostName}/Company`)
    .then(response => response.json())
    .then(x =>{
      this.setState({
        x:x
      })
    }
  )
  }
  fetchData4(){
    fetch(`${hostName}/`)
    .then(response => response.json())
    .then(
      x =>{
      this.setState({
        x:x
      })
    }
  )
  }
  fetchData5(){
    fetch(`${hostName}/`)
    .then(response => response.json())
    .then(
      x => {
      this.setState({
        x:x
      })
    }
    )
  }
  fetchData6(){
    fetch(`${hostName}/`)
    .then(response => response.json())
    .then(x =>{
      this.setState({
        x:x
      })
    }
  )
  }
  fetchData7(){
    fetch(`${hostName}/`)
    .then(response => response.json())
    .then(x =>{
      this.setState({
        x:x
      })
    }
  )
  }
  fetchData8(){
    fetch(`${hostName}/`)
    .then(response => response.json())
    .then(x =>{
      this.setState({
        x:x
      })
    })
  }
  componentDidMount(){
    this.fetchDataSales()
  }
render() {
  return (
    <div className="main-component">
      <div className="sales">${this.state.x}</div>
      <div className="expenses"></div>
      <div className="profits"></div>
      <div className="margin"></div>
      <div className="clients"></div>
      <div className="sales-expense-profit"></div>
      <div className="sales-table"></div>
      <div className="top-clients"></div>
    </div>
  )
}
}
export default MainComponent;
