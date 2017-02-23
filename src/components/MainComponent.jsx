import React from 'react';
import TopClients from './charts/TopClients';
import SalesExpenseProfit from './charts/SalesExpenseProfit';
import SalesTableChart from './charts/SalesTableChart';
import Sales from './charts/Sales';
import Expenses from './charts/Expenses';

class MainComponent extends React.Component {

    render() {

        return (
            <div className="main-component">
                <Sales/>
                <Expenses/>

                <SalesExpenseProfit/>
                <SalesTableChart/>
                <TopClients/>
            </div>
        )
    }
}
export default MainComponent;
