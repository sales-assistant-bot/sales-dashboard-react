import React from 'react';

class MainComponent extends React.Component {
var hostName = 'https://decode-bot-project-sql-ajdez.c9users.io'
  fetchData1(){
    fetch(`${hostName}/`)
    .then(response => response.json())
    then(x =>
      this.state({

      })
    )
  }
  fetchData2(){
    fetch(`${hostName}/`)
    .then(response => response.json())
    then(x =>
      this.state({

      })
    )
  }
  fetchData3(){
    fetch(`${hostName}/`)
    .then(response => response.json())
    then(x =>
      this.state({

      })
    )
  }
  fetchData4(){
    fetch(`${hostName}/`)
    .then(response => response.json())
    then(x =>
      this.state({

      })
    )
  }
  fetchData5(){
    fetch(`${hostName}/`)
    .then(response => response.json())
    then(x =>
      this.state({

      })
    )
  }



render() {
  return (
    <div className="main-component">
      <div className="sales"></div>
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
