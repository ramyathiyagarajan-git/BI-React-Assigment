import React from 'react'
import './Bmi.css';
import { useState} from "react";

function BMI() {

  var [data, setData] = useState({"height" :'', "weight": ''}); 
  var [print, setPrint] = useState(""); 
  var [value, setValue] = useState(""); 

  const handleFormChange = (ev, type) => {

  ev.preventDefault();
  const local = data;
  local[type] = ev.target.value;
  setData(local)
  
  }
const calculateBMI = () => {
console.log("I print");
console.log(data);
const bmi = (data.weight/data.height/data.height)*10000;
setPrint("Your BMI is  " + bmi.toFixed(2));
  
if(bmi<18.5){
  setValue(" You're in the underweight range"); 
}else if(18.5 <= bmi <=24.9){
  setValue("You're in the healthy weight range");
}else if(25 <= bmi <= 29.9){
  setValue("You're in the overweight range");
}else{
  setValue("You're in the obese range");
}
  
}
return (
    <div className="Alignment" >
      <div className= "Heading"> BMI Calculator </div><br/>
      <div >
          <label>Enter your height in cm:</label><br/><br/>
          <input type={"number"} onChange={(ev) => handleFormChange(ev, 'height')}/><br/><br/>
          
          <label >Enter your weight in kg:</label><br/><br/>
          <input type={"number"} onChange={(ev) => handleFormChange(ev, 'weight')} /><br/><br/>

          <button  onClick={() => calculateBMI()} className="signupbtn">Submit</button><br/><br/>
  
          <div className ="set">
            <p>{print}</p>
            <p>{value}</p>
          </div>
      </div>
    </div>
    
  )
}

export default BMI;