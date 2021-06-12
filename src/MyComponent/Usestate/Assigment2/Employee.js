import React ,{useState} from 'react';

export default function Employee(props) {
  const array = ['all',"22","23","24","25","6","7","8","10","100"];
  const  [age,setage] = useState(0,'all'); 
  function  submit(e){
    e.preventDefault();
    props.SaveAge(age)
  } 
  return (
      
                  <div class="input-group mb-3">
<div class="input-group-prepend">
  <button onClick={submit} class="btn btn-outline-secondary" type="Button">Filter</button>
</div>
<select class="custom-select" id="inputGroupSelect03" value={age} onChange={e=> setage(e.target.value)}>
              {array.map((item, index) => <option key={index} value={item}>{item}</option>)}
          </select>
    </div>
      
  )
}