import React ,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
//import {useForm} from 'react-hook-form';
import './Register.css';

export default function Register() {
  const [name,setname] = useState('');
  const [email,setemail] = useState('');
  const [contact,setcontact] = useState('');
  const [password,setpassword] = useState('');
  const [confirmpassword,setconfirmpassword] = useState('');

  const submit = () =>{
    const details = {
      'id':Math.random().toString().substr(2,8),
      'name':name,
      'email':email,
      'contact':contact,
      'password':password,
      'confirmpassword':confirmpassword
    }
    console.log(details)
  }
    return ( 
<div className="App">
<header className="App-header">
  <Card className="LoginCard">
  <h1  style={{textAlign:"center",color:"blue",fontFamily:"cursive"}}>Register Page</h1>
  <TextField style={{width:"80%",marginLeft:"2%"}} id="standard-basic"  required label="Name" value={name} onChange={e => setname(e.target.value)} />
  <br></br>
  <TextField  style={{width:"80%",marginLeft:"2%"}} id="standard-basic" label="Email" value={email} onChange={e => setemail(e.target.value)} />
  <br></br>
  <TextField  style={{width:"80%",marginLeft:"2%"}} id="standard-basic" label="Contact" value={contact} onChange={e => setcontact(e.target.value)} />
  <br></br>
  <TextField   type="password" style={{width:"80%",marginLeft:"2%"}} id="standard-basic" label="Password" value={password} onChange={e => setpassword(e.target.value)} />
  <br></br>
  <TextField   type="password" style={{width:"80%",marginLeft:"2%"}}id="standard-basic" label="Confirm Password" value={confirmpassword} onChange={e => setconfirmpassword(e.target.value)} />
  <br></br><br></br>
  <Button  style={{marginLeft:"2%"}} type="submit" onClick={submit} variant="contained" color="primary">Submit</Button>
  <br></br>
  <br></br>
  </Card>
  
</header>
</div>
);
}
            
        

