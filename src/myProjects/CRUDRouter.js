
import React, { useState } from 'react'
import Modal from 'react-modal';
import "./CRUDRouter.css"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor:"gray",
    color:"white",
    borderRadious:"10px", 
  },
};


function CRUDRouter() {
  let subtitle;

const[data,setData]=useState("")  
const[pass,setPass]=useState("")
const[textarea,setTextarea]=useState("")    
const[dataVal,setDataVal]=useState([])  
const[passVal,setPassVal]=useState([])
const[textareaVal,setTextareaVal]=useState([])

const [modalIsOpen, setIsOpen] = React.useState(false);


function openModal() {
  setIsOpen(true);
}

function afterOpenModal() {
  subtitle.style.color = 'white';
}

function closeModal(e) {
  setIsOpen(false);
  
  e.preventDefault();
  setDataVal([...dataVal,data]);
setData("");
setPassVal([...passVal,pass]);
setPass("");
setTextareaVal([...textareaVal,textarea]);
setTextarea("");
}


// const handleclick=(e)=>{

//   e.preventDefault();
//   setDataVal([...dataVal,data]);
// setData("");
// setPassVal([...passVal,pass]);
// setPass("");
// setTextareaVal([...textareaVal,textarea]);
// setTextarea("");
// }


  return (
   <>
<div class="formmedia">

         <button ref={(_subtitle) => (subtitle = _subtitle)} onClick={openModal} class="openmodal btn-primary ">Add</button>  
       
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

<form  class="d-flex justify-content-evenly my-5  ">
<input type='text' placeholder='enter your name ' value={data} onChange={(e)=>setData(e.target.value)} class=" inputbox"/>
 <input type='gmail'  placeholder='enter your gmail' value={pass} onChange={(e)=>setPass(e.target.value)} class=" inputbox"/>
<input type='password' placeholder='enter your password' value={textarea}  onChange={(e)=>setTextarea(e.target.value)} class=" inputbox"/>

{/* <input type='submit' class="btn-primary rounded" /> */}
<button onClick={closeModal} class="btn-primary btnclose">close</button>
</form>

</Modal>
<br/>

<div class="table-responsive text-center mx-4 ">
  <table class="table  table-bordered tablebtn ">
    <thead class="table-dark">
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Gmail</th>
        <th scope="col">Password</th>
      </tr>
    </thead>
    <tbody class="table-primary">
      <tr>
        <td>{dataVal.map((item)=>(
          <p>{item}</p>
))}</td>


        <td>{passVal.map((item1)=>(
<p>{item1}</p>
))}</td>
      <td>{textareaVal.map((item2)=>(
<p>{item2}</p>
))}</td>
      </tr> 
    </tbody >
  </table>
  
</div>

<a href='http://localhost:3000/TodoRouter'>
<button  class="btn-danger Fpreviousbtn">previous</button></a>

<a href='http://localhost:3000/ThirukkuralRouter'>
<button  class="btn-success Fnextbtn">Next</button></a> 

</div>
   </>
  )
}
export default CRUDRouter;