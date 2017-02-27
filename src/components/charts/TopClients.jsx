import React from 'react'
// import {Chart} from 'react-google-charts'
import Loading from './Loading'
import {Doughnut} from 'react-chartjs-2';

var hostName = 'https://cors-anywhere.herokuapp.com/https://decode-bot-project-sql-ajdez.c9users.io';

class TopClients extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    // fetchDataTopClients() {
    //     fetch(`${hostName}/reports?topClients`).then(response => response.json()).then(data => {
    //         var output = ([
    //             ['CompanyName', 'TotalSales']
    //         ].concat(data.map(function(obj) {
    //             return [obj.CompanyName, obj.TotalSales]
    //         })))
    //         this.setState({data: output})
    //     })
    // }
    fetchDataTopClients() {
        fetch(`${hostName}/reports?topClients`).then(response => response.json()).then(data => {
            var output = {
                labels: data.map(obj => obj.CompanyName),
                datasets: [
                    {
                        data: data.map(obj => obj.TotalSales),
                        backgroundColor: [
                            '#FF6384',
                            '#36A2EB',
                            '#62ffb8',
                            '#69ff56',
                            '#a756ff',
                            '#fcb455',
                            '#a1fcf9'
                        ],
                        hoverBackgroundColor: [
                            '#FF6384',
                            '#36A2EB',
                            '#62ffb8',
                            '#69ff56',
                            '#a756ff',
                            '#fcb455',
                            '#a1fcf9'
                        ]
                    }
                ]
            }
            this.setState({data: output})
        })
    }

    componentDidMount() {
        this.fetchDataTopClients();
    }

    render() {
        if (!this.state.data) {
            return (
                <div>
                    <Loading className="loading-container"/>
                </div>
            )
        }

        return (
            <div>
              <h2>Top Clients</h2>
              <Doughnut data={this.state.data}/>
            </div>
        )
        // let options = {
        //   "title": "Top Clients",
        //   animation: {
        //     startup: true,
        //     duration: 1000,
        //     easing: 'out',
        //   }
        // }
        // return (
        //   <div className="top-clients">
        //     <Chart chartTitle="DonutChart"
        //       chartType="PieChart"
        //       data={this.state.data}
        //       options={options}
        //       width="100%"
        //       height="400px"
        //       legend_toggle
        //       loader={<Loading />}
        //     />
        //   </div>
        // )
    }
}

export default TopClients;
