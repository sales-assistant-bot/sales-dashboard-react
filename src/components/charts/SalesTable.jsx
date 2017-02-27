import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import moment from 'moment'

import {API_HOST} from '../../env'
import Loading from './Loading'



export default class extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  fetchDataTableChart() {
    fetch(`${API_HOST}/reports?tableChart`)
    .then(response => response.json())
    .then(data => {

      this.setState({data: data.slice(0,4)})
    })
  }
  componentDidMount() {
    this.fetchDataTableChart();
  }
  render() {
    if (!this.state.data) {
      return (
        <div className="loading-container">
          <Loading/>
        </div>
      )
    }

    const style = {height: "22px"}

    return (
      <div>
        <div className="chart-title">Most Recent Sales</div>

        <Table>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Company</TableHeaderColumn>
              <TableHeaderColumn>Sales</TableHeaderColumn>
              <TableHeaderColumn>Date</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.state.data.map(function (data, i) {
              return (
                <TableRow key={i}>
                  <TableRowColumn>{data.Customers}</TableRowColumn>
                  <TableRowColumn>{data.Sales}</TableRowColumn>
                  <TableRowColumn>{moment(data.Dates).format('MMM Do')}</TableRowColumn>
                </TableRow>
              )
            })}

          </TableBody>
        </Table>
      </div>
    )
  }

}
