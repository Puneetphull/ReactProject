import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import TextFiled from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import Icon from '@material-ui/core/Icon';
import './login.css';


export default class login extends Component {
       constructor(){
        super();
        this.state={
            email:"",
            password:"", 
            Emailerror:"",
            passworderror:'',
    
           } 
                 }

         
         //validation code 
        

      valid = () =>{
         if(!this.state.email.includes('@') && this.state.password.length<4){
             this.setState({Emailerror:"email is ivalid ",passworderror:"password lenght must be grater than 4"});
             return false;
         }
         

         else if(!this.state.email.includes('@')){
            this.setState({Emailerror:"email is ivalid "});
            return false;
        }
        else if( this.state.password.length < 4){
            this.setState({passworderror:"password lenght must be grater than 4"});
             return false;
        }
        else {
            return true;
        }
        
         
      }  
    onsubmit(){
        if(this.valid()){
            this.setState({Emailerror:"",passworderror:""});
         alert("check the console.log");
       //  console.log(this.state);
        }         
        }
    render() {
       
        return (
           
            <div className="Login">
             <h2 style={{textAlign:"center",color:"blue",fontFamily:"cursive"}}>Login Page</h2>
             <Card className="loginCard">
             <h2 style={{color:"blue",marginLeft:"20px"}}>login With your account</h2>
             <form  >
             <TextFiled style={{ width:"80%",marginLeft:"2%",marginTop:"20px"}} name="email" required type="text"  label="Email" variant="outlined" onChange={(f)=>{this.setState({email:f.target.value})}} />
             <p style={{color:"red",marginLeft:"20px"}}>{this.state.Emailerror}</p>
             <TextFiled style={{ width:"80%",marginLeft:"2%",marginTop:"20px"}} name="password" required type="Password"   label="Password" variant="outlined" onChange={(f)=>{this.setState({password:f.target.value})}} />
             <p style={{color:"red",marginLeft:"20px"}}>{this.state.passworderror}</p>
             <br></br>
             <br></br>
             <Button style={{marginBottom:"10px",marginLeft:"20px"}} onClick={()=>this.onsubmit()}  variant="contained" color="primary" >Login </Button>
             <br></br>
             </form>
             <p style={{color:"blue",marginLeft:"10px"}}>Don't have account signup</p>
             </Card> 
             </div>

            

             
        )
    } 
}

    
