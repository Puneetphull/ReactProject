import React  from "react";
import {Card,Button} from 'react-bootstrap';

export default function Dashboard(props) {
  const logOut = () => {
    localStorage.removeItem("IsloggedIn");
    alert("succesfully logout");
    props.data(false);
  };
  
  return (
    <div>
        <Card>
      <h1 style={{textAlign:'center'}}>dashboard page</h1>
      <Button  variant="success" onClick={logOut} type="submit" >Logout</Button>
      </Card>
    </div>
  );
}
