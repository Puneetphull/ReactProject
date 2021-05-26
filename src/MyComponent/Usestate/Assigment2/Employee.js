import React ,{useState} from 'react';

export default function Employee(props) {
    const  [age,setage] = useState(''); 
    function  submit(){
        props.value(age)
    }
    return (
        <div>
            <div class="input-group mb-3">
  <div class="input-group-prepend">
    <button onClick={submit} class="btn btn-outline-secondary" type="Button">Button</button>
  </div>
  <select class="custom-select" id="inputGroupSelect03" value={age} onChange={e=> setage(e.target.value)}>
    <option   selected>Choose...</option>
    <option value="1">One</option>
    <option value="2" >Two</option>
    <option value="3" >Three</option>
    <option value="4">Four</option>
    <option value="5">Five</option>
    <option value="6">Six</option>
    <option value="7">Seven</option>
    <option value="8">Eight</option>
    </select>
      </div>
        </div>
    )
}
