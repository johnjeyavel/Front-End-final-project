import React, { useState } from 'react'
import"./ThirukkuralRouter.css"


const ThirukkuralRouter = () => {

const [num,setNum]=useState([]);
const [line1,setLine1]=useState([]);
const [line2,setLine2]=useState([]);
const [paal,setPaal]=useState([]);
const [iyal,setIyal]=useState([]);
const [athikaram,setAthikaram]=useState([]);
const [porul,setPorul]=useState([]);


const submit=(e)=>{
    e.preventDefault();  

    fetch(`https://api-thirukkural.vercel.app/api?num=${num}` 
    )
    
    .then(response => response.json())
    .then(data => {

setLine1(Object.entries(data)[4][1])
setLine2(Object.entries(data)[5][1])
setPaal(Object.entries(data)[1][1])
setIyal(Object.entries(data)[2][1])
setAthikaram(Object.entries(data)[3][1])
setPorul(Object.entries(data)[6][1])

console.log(Object.entries(data)[4][1]);
})

}

  return (
    <div class="body1">
      
<form id="myform" class="text-center form" onSubmit={submit}>
   
   <label for="number" class=" fw-bolder shawdow">
   <img src="https://i.ibb.co/Tmjg7Rs/thirukural-logo.png" alt="thirukural-logo" class="logo box-shawdow"/>  
   குறள் எண் :</label><br/><br/>
   <input type="number" name="number" id="number" placeholder="Enter number" class="border-info rounded box-shawdow" onChange={(e)=>setNum(e.target.value)}  /><br/><br/>
   <input type="submit" class="border-info btn-primary rounded box-shawdow"/><br/><br/>
   
   
   <label class="d-flex">
   <p class="col-4 fw-bold shawdow">பால்:</p>   
   <p class="col-4 fw-bold shawdow">அதிகாரம்:</p>    
   <p class="col-4 fw-bold shawdow">இயல்:</p> 
   </label>
   
   <div class="d-flex">
   <span class="col-4 text-white fw-bold shawdow">{paal}</span>
   <span class="col-4 text-white fw-bold shawdow">{athikaram}</span>
   <span class="col-4 text-white fw-bold shawdow">{iyal}</span>
   </div><br/>
   
   
   
   <div class="text-center">
       <p class="col-12 fw-bold shawdow">குறள்:</p>
   <span class="text-white fw-bold shawdow ">{line1}</span><br/>
   <span class="text-white fw-bold shawdow">{line2}</span><br/><br/>
   <p class="col-12 fw-bold shawdow">பொருள்:</p> 
   <span class="mx-4 text-white fw-bold shawdow">{porul}</span>
   </div>
   </form>

   <a href='http://localhost:3000/CRUDRouter'>
<button  class="btn-danger  TRpreviousbtn">previous</button></a>

<a href='http://localhost:3000/CounterRouter'>
<button  class="btn-success TRnextbtn">Next</button></a>
   
   </div>
   

  )
}
  
export default ThirukkuralRouter      
