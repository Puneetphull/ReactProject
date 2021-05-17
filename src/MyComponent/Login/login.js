import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import TextFiled from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import Icon from '@material-ui/core/Icon';
import './login.css';

export default class login extends Component {
    render() {
        return (
            <div className="Login">
             <h2 style={{textAlign:"center",color:"blue",fontFamily:"cursive"}}>Login Page</h2>
             <Card className="loginCard">
             <h2 style={{color:"blue",marginLeft:"20px"}}>login With you account</h2>
             <TextFiled style={{width:"80%",marginLeft:"2%",marginTop:"20px"}} required type="text"  id="outlined-basic" label="Email" variant="outlined"/>
             <br></br>
             <br></br>
             <TextFiled   style={{width:"80%",marginLeft:"2%"}} required type="Password" name="password" id="outlined-basic" label="Password" variant="outlined" />
             <br></br>
             <br></br>
             <Button style={{marginBottom:"10px",marginLeft:"20px"}} variant="contained" color="primary" >Login </Button>
             <br></br>
             <p style={{color:"blue",marginLeft:"10px"}}>Don't have account signup</p>
             </Card> 
             </div>
        )
    }
}
