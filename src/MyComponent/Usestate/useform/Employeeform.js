import React, { useState } from 'react';
import style from './Employeeform.module.css';
export default function Employeeform(props) {
  const [values, setvalues] = useState({
   // id: Math.random().toString().substr(2, 8),
    name: "",
    age: "",
   
  })
  

  const handlenamechange = (event) => {
    setvalues({ ...values, name: event.target.value })
  }
  const handleagechange = (event) => {
    setvalues({ ...values, age: event.target.value })
  }
  function submit(e) {
    e.preventDefault();
    props.saveDetails({
      ...values,
      id: Math.random().toString().substr(2,5)
    });
    setvalues({age:'',name:''})
  }
  return (
    <form onSubmit={submit} className={style.form}>
      <h1>Callback Props</h1>
      <div class="form-group">
        <label for="exampleInputName1">Name</label>
        <input type="text" class="form-control" id="exampleInputName1" placeholder="Name" value={values.name} onChange={handlenamechange} />
      </div>
      <div class="form-group">
        <label for="exampleInputAge1">Age</label>
        <input type="number" class="form-control" id="exampleInputAge1" placeholder="Age" value={values.age} onChange={handleagechange} />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  )
}
