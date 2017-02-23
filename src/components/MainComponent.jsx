import React from 'react';
import Margin from './charts/Margin';
import Profits from './charts/Profits';
import AverageDealSize from './charts/AverageDealSize';
import TopClients from './charts/TopClients';
import SalesExpenseProfit from './charts/SalesExpenseProfit';
import SalesTableChart from './charts/SalesTableChart';
import Sales from './charts/Sales';
import Expenses from './charts/Expenses';

export default class extends React.Component {

  render() {
    return (
      <div className="main-component">
        {/* <Sales/>
          <Margin/>
          <Profits/>
          <AverageDealSize/>
          <Expenses/>
          <SalesExpenseProfit/>
          <SalesTableChart/>
        <TopClients/> */}
      </div>
    )
  }

}
