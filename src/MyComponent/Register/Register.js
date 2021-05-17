import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import './Register.css';

export default function Register() {
    return (
<div className="App">
<header className="App-header">
  <Card className="LoginCard"  >
  <h1  style={{textAlign:"center",color:"blue",fontFamily:"cursive"}}>Register Page</h1>
  <TextField style={{width:"80%",marginLeft:"2%"}} id="standard-basic" label="Name"/>
  <br></br>
  <TextField  style={{width:"80%",marginLeft:"2%"}} id="standard-basic" label="Email"/>
  <br></br>
  <TextField  style={{width:"80%",marginLeft:"2%"}} id="standard-basic" label="Contact"/>
  <br></br>
  <TextField   type="password" style={{width:"80%",marginLeft:"2%"}} id="standard-basic" label="Password"/>
  <br></br>
  <TextField   type="password" style={{width:"80%",marginLeft:"2%"}}id="standard-basic" label="Confirm Password"/>
  <br></br><br></br>
  <Button  style={{marginLeft:"2%"}} variant="contained" color="primary">Submit</Button>
  <br></br>
  <br></br>
  </Card>

</header>
</div>
);
}
            
        

