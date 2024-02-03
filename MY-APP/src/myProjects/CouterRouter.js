import React, { useState } from "react";
import"./CounterRouter.css"

const CouterRouter = () => {

  const[zero,setZero]=useState(0);

  const addnow=()=>{
      setZero(zero+1)
  }
  
  const erasenow=()=>{
      setZero(zero-1)
  }
  
  const resetnow=()=>{
      setZero(zero-zero)
  }

  return (
    <div>
      
      <div class="text-center my-5 ">
 <h1 class="counterhead">Counter</h1>       
 <h2 class="pcounter">{zero}</h2>
<button onClick={addnow} class="mx-1 btn-success rounded counter-shawdow" >+</button>
<button onClick={erasenow} class="mx-2 btn-danger rounded counter-shawdow" >-</button>
<button onClick={resetnow} class="mx-1 btn-primary rounded counter-shawdow" ><i class="fa-solid fa-arrows-rotate fa-spin fa-spin-reverse"></i></button>
</div>

   
<a href=' http://localhost:3000/ThirukkuralRouter'>
<button  class="btn-danger COpreviousbtn">previous</button></a>

    </div>
  )
}

export default CouterRouter
