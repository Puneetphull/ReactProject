import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class employeestile extends Component { 
    render(){      
        return (
            <div>
            <TableContainer component={Paper}>
      <Table style={{minWidth:"650"}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>index</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              <TableCell component="th" scope="row">{this.props.data.id}
              </TableCell>
              <TableCell align="right">{this.props.data.name}</TableCell>
              <TableCell align="right">{this.props.data.age}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
            </div>
        )
    }
}
