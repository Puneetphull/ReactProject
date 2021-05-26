import React,{useState} from 'react';
import style from './Employeeform.module.css';
export default function Employeeform(props){
    const [values , setvalues] = useState({
        id:Math.random().toString().substr(2,8),
        Name:"",
        age:"",
        Email:'',
    })

    const handlenamechange = (event)=>{
        setvalues({...values,Name:event.target.value})
    }
    const handleagechange = (event)=>{
        setvalues({...values,age:event.target.value})
    }
    const handleemailchange = (event)=>{
        setvalues({...values,Email:event.target.value})
    }
    function submit (e){
        e.preventDefault();
       props.details(values);       
    }

    return (
        <form onSubmit={submit} className={style.form}>
            <h1>Callback Props</h1>
        <div class="form-group">
          <label  for="exampleInputEmail1">Email address</label>
          <input  type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={values.Email} onChange={handleemailchange}/>
        </div>
        <div class="form-group">
          <label for="exampleInputName1">Name</label>
          <input type="text" class="form-control" id="exampleInputName1" placeholder="Name" value={values.Name} onChange={handlenamechange}/>
        </div>
        <div class="form-group">
          <label for="exampleInputAge1">Age</label>
          <input type="number" class="form-control" id="exampleInputAge1" placeholder="Age" value={values.age} onChange={handleagechange}/>
        </div>
        <button type="submit"  class="btn btn-primary">Submit</button>
      </form>
    )
}
