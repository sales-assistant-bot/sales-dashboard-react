import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import { Paper } from 'material-ui';
import moment from 'moment'

import Loading from './Loading'
import * as api from '../../api'


export default class extends React.Component {
  state = {}

  fetchDataTableChart() {
    api.getSalesTable()
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
    return (
      <Paper>
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
            {this.state.data.map((data, i) => (
              <TableRow key={i}>
                <TableRowColumn>{data.Customers}</TableRowColumn>
                <TableRowColumn>{data.Sales}</TableRowColumn>
                <TableRowColumn>{moment(data.Dates).format('MMM Do')}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    )
  }

}
