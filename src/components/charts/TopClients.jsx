import React from 'react';
import {Chart} from 'react-google-charts';

var hostName = 'https://cors-anywhere.herokuapp.com/https://decode-bot-project-sql-ajdez.c9users.io';

class TopClients extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    fetchDataTopClients() {
        fetch(`${hostName}/reports?topClients`).then(response => response.json()).then(data => {
            var output = ([
                ['CompanyName', 'TotalSales']
            ].concat(data.map(function(obj) {
                return [obj.CompanyName, obj.TotalSales]
            })))
            this.setState({data: output})
        })
    }

    componentDidMount() {
        this.fetchDataTopClients();
    }
    render() {
        if (!this.state.data) {
            return <div>
                LOADING...</div>
        } else {
            return (
                <div className="top-clients">
                    <Chart chartTitle="DonutChart" chartType="PieChart" data={this.state.data} options={{
                        "title": "Top Clients"
                    }} //graph_id="ScatterChart"
                        width="100%" height="400px" legend_toggle/>
                </div>
            )
        }
    }
}

export default TopClients;
