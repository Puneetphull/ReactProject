import React  from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function  Employeestile(props){ 

 const  arrar = props.data;
 const age = props.age;
 const details = arrar.filter((item)=>{
 if(age == item.age){
   return [item];
 }
 else if(age === 'all'){
   return [props.data];
 }
})
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
        
        {details.map((item)=><TableRow>
     <TableCell component="th"  scope="row">{item.id}</TableCell>
              <TableCell align="right">{item.name}</TableCell>
              <TableCell align="right">{item.age}</TableCell>
      
            </TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        )
    }
  

