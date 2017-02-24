import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

var hostName = 'https://cors-anywhere.herokuapp.com/https://decode-bot-project-sql-ajdez.c9users.io';

export default class extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    fetchDataTableChart() {
        fetch(`${hostName}/reports?tableChart`).then(response => response.json())
        .then(data => {
            this.setState({data: data})
        })
    }
    componentDidMount() {
        this.fetchDataTableChart();
    }
    render() {
        if (!this.state.data) {
            return <div>
                LOADING....
            </div>
        } else {
            return (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHeaderColumn>Company</TableHeaderColumn>
                      <TableHeaderColumn>Sales</TableHeaderColumn>
                      <TableHeaderColumn>Date</TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {this.state.data.map(function(data, i) {
                      data.key = i   //getting a key warning. Where should this part go to remove it?
                      console.log(data)
                      return (
                        <TableRow>
                          <TableRowColumn>{data.Customers}</TableRowColumn>
                          <TableRowColumn>{data.Sales}</TableRowColumn>
                          <TableRowColumn>{data.Dates.slice(0,10)}</TableRowColumn>
                                </TableRow>
                            )
                        })}

                    </TableBody>
                </Table>
            )
        }
    }
}
