import React, { useState } from 'react';
import"./BmiRouter.css";

const BmiRouter = () => {

    const[weight,setWeight]=useState([])
    const[height,setHeight]=useState([])
    const[result,setResult]=useState([])
    
    const BmiIs=(weight/(height/100*height/100))
    
    const calculate=(e)=>{
     e.preventDefault();  
    setResult(BmiIs) 
    
    if(BmiIs <= 18){
        setResult(  BmiIs.toFixed()+" => "+"(you are under weight)")
    }
    
    else if(BmiIs>18 && BmiIs<24){
        setResult(BmiIs.toFixed()+" => "+"(you are healthy)")
      }
      
    else if(BmiIs>24 && BmiIs<30){
        setResult(BmiIs.toFixed()+" => "+"(you are over weight)")
      }
      
      else{
        setResult(BmiIs.toFixed()+" => "+"(you are  obesity)")
      }
    
    }

  return (
    <div>
        <div class="bmibody">
  
  <form class="text-center  bg-primary row g-3 col-4 my-5 rounded span" onSubmit={calculate} >
  
  <h1 class="display-6 fw-bold text-white rounded span1">BMI CALCULATOR</h1>
  
  <lable for="weight" class="fw-bolder  span1">Enter your Weight</lable>
  <input type='number' placeholder='weight in kg' onChange={(e)=>setWeight(e.target.value)} class="text-center col-9 mx-5 rounded span"/>
  
  <lable for="height" class="fw-bolder span1">Enter your Height</lable>
  <input type='number' placeholder='height in cm' onChange={(e)=>setHeight(e.target.value)} class="text-center col-9 mx-5 rounded span my-3"/>
  
  <button type='submit' class="col-9 mx-5  btn-dark rounded span">Calculate</button>
  
  <span class="col-9 fw-bold mx-5 my-5 rounded span bg-white border border-dark border-2  p-3">Your Result Is<br/>{result}</span>
  
  </form> 
  
  
  <a href='http://localhost:3000/TodoRouter'>
  <button  class="btn-success nextbtn">Next</button></a>
  
  
      </div>
    </div>
  )
}

export default BmiRouter
