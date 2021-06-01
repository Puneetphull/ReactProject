import React  from 'react';
import Employee from './Employee';
export default function Employeefilter(props) {
  /*  const [age,setage] = useState('');

    const handlecallback = (event) =>{
        setage({age:event});
    }*/
    //console.log(age);
    return (
        <div>
        <Employee SaveAge = {props.SaveAge} />
    </div>
    )
}
