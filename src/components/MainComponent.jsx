import React from 'react';
import PieChart from './charts/PieChart';
import BarChart from './charts/BarChart';
import TableChart from './charts/TableChart';
import Margin from './charts/Margin';
import Profits from './charts/Profits';
import AverageDealSize from './charts/AverageDealSize';


var hostName = 'https://cors-anywhere.herokuapp.com/https://decode-bot-project-sql-ajdez.c9users.io';

export default class extends React.Component {

render() {

  return (
    <div className="main-component">

      <Margin />
      <Profits />
      <AverageDealSize />
      
    </div>
    )
  }
}
