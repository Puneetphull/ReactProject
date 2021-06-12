import Header from "./MyComponent/Header/Header";
//import Register from './MyComponent/Register/Register';
//import Login from './MyComponent/Login/login';
//import {BrowserRouter as Router ,Route,Link} from 'react-router-dom';
//import Employeesdata from './MyComponent/Props/employeesdata';
//import Newemployee from './MyComponent/Usestate/useform/NewEmployee';
//import Employeefilter from './MyComponent/Usestate/Assigment2/Employeefilter';
import Login from "./MyComponent/Assignment_REducer_UseEffect/login";
import Dashboard from "./MyComponent/Assignment_REducer_UseEffect/dashboard";
import PortalModal from "./MyComponent/Assignment_REducer_UseEffect/PortalModal";
import React, { useEffect, useState } from "react";
import "./App.css";
function App() {
  // const [value,setvalue] = useState('');
  // const  handlecallback = (event)=>{
  //       setvalue({value:event});
  //       console.log(value);
  //       }

  /* const employees = [
    {
      id: "12345",
      name: "Akhil",
      age: 20,
    },
    {
      id: "23451",
      name: "Aman",
      age: 21,
    },
    {
      id: "12367",
      name: "Vikas",
      age: 22,
    },
    {
      id: "43251",
      name: "Harminder",
      age: 23,
    },
    {
      id: "32417",
      name: "Deeksha",
      age: 24,
    },
    {
      id: "65732",
      name: "Puneet",
      age: 25,
    },
    {
      id: "98765",
      name: "Sourav",
      age: 23,
    },
    {
      id: "43251",
      name: "Harminder",
      age: 23,
    },
    {
      id: "32417",
      name: "Deeksha",
      age: 24,
    },
    {
      id: "65732",
      name: "Puneet",
      age: 25,
    },
    {
      id: "98765",
      name: "Sourav",
      age: 23,
    },
  ];
  //
 */
  /* const [value,setvalue] = useState(employees);
        const saveDetails = (value) => {
          setvalue((val) =>{
          return[value,...val]
          })
        }
        const  [age,setage] = useState('all'); 
            const SaveAge = (va) =>{
              setage((age)=>{
                return va;
              })
            }
          */

  const [isloggedin, setisloggedIn] = useState(false);
  useEffect(() => {
    const loggedinstorage = localStorage.getItem("IsloggedIn");
    if (loggedinstorage === "1") {
      setisloggedIn(true);
    }
  }, [isloggedin]);
  const savelogin = (value) => {
    setisloggedIn({ isloggedin: value });
    return value;
  };

  const board = () => {
    setisloggedIn(false);
  };

  return (
    <>
      <Header />
      <main>
        {!isloggedin && <Login func={savelogin} />}
        {isloggedin && (
          <div>
            <Dashboard data={board} /> <PortalModal />
          </div>
        )}
      </main>
      {/*      
       <Login/>
       < Newemployee  saveDetails={saveDetails}/>
  <br></br>
  <Employeefilter SaveAge = {SaveAge} />
  <Employeesdata data = {value}  age ={age} />
  

 */}
    </>
  );
}

export default App;
