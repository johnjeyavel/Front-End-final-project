import React, { useState } from 'react'
import Modal from 'react-modal';
import"./CRUDRouter.css"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundImage: `url(" https://e0.pxfuel.com/wallpapers/92/536/desktop-wallpaper-blue-smoke-background-stock-smokey-thumbnail.jpg")`,
    color:"white",
    borderRadious:"15px", 
    boxShadow:" 2px 3px 4px 2px #555",
    textShadow: "5px 5px 5px #555",
    textAlign:"center",
    fontWeight:"1000",
    width:"30%",
  },
};

const CRUDRouter = () => {

  let subtitle;
const[tableData,setTableData]=useState([]); 
const[editData,setEditData]=useState(false); 
const[editedData,setEditedData]=useState([]);
const [input,setInput]=useState({
name:"",
email:"",
})

const [modalIsOpen, setIsOpen] = React.useState(false);

function openModal() {
  setIsOpen(true);
}

function afterOpenModal() {
  subtitle.style.color = 'white';
}


// const handleChange =(e)=>{
//   setInput({
//     ...input,
//     [e.target.name]:e.target.value,
//   });
// }

const closeModal=(e)=>{
  setIsOpen(false);
e.preventDefault();
if(editData){
const tempData=tableData;
Object.assign(tempData[editedData],input)
setTableData([...tempData])
// setTableData([...tableData,input])
setEditData(false)
setInput({
  name:"",
  email:""
})
}

else{
  setTableData([...tableData,input])
setInput({
  name:"",
  email:""
})
}
}




const handleDelete=(index)=>{
setTableData((tableData.filter((t,i)=> i!==index)))
}


const handleEdit=(index)=>{
  setIsOpen(true);
const tempData=tableData[index];
setInput({name:tempData.name, email:tempData.email})
setEditData(true)
setEditedData(index)
}


  return ( 
    <div class="text-center my-5 openmodal ">


 <button ref={(_subtitle) => (subtitle = _subtitle)} onClick={openModal} class="fw-bold btn-primary rounded  UDbtn">Add</button>  
       
       <Modal
       isOpen={modalIsOpen}
       onAfterOpen={afterOpenModal}
       onRequestClose={closeModal}
       style={customStyles}
       contentLabel="Example Modal"
     >

<form >
<label for="name" class="p-1 my-1">Name</label><br/>
<input name='name' value={input.name} required onChange={e=> setInput({...input,name:e.target.value})} class="p-1" /><br/>
{/* <input name='name' value={input.name} onChange={handleChange} /><br/> */}
<label for="email" class="p-1 my-1">Gmail</label><br/>
<input name='email' required value={input.email} onChange={e=> setInput({...input,email:e.target.value}) } class="p-1 "/><br/>
{/* <input name='email' value={input.email} onChange={handleChange} /><br/> */}
<button type='submit' onClick={closeModal}  className='btn-primary p-1 mt-3 UDbtn rounded col-3 '>{editData?"Update":"Add"}</button>
</form>

</Modal> 

<div class="table-responsive my-3 mx-5">
  <table class="table table-bordered border-dark table-primary">
    <thead class="fw-bold">
      <tr>
        <th scope="col">Roll No</th>
        <th scope="col">Name</th>
        <th scope="col">Gmail</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
   {
    tableData.map((item,index)=>(
      <tr>
        <td>{index}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>
          <button onClick={()=>handleDelete(index)} className='btn-primary mx-2 rounded UDbtn'>delete</button>
          <button onClick={()=>handleEdit(index)} className='btn-danger mx-2 rounded UDbtn'>edit</button>
        </td>
      </tr>
    ))
   }
    </tbody>
  </table>
</div>

<a href='http://localhost:3000/TodoRouter'>
<button  class="btn-danger  Fpreviousbtn">previous</button></a>

<a href='http://localhost:3000/ThirukkuralRouter'>
<button  class="btn-success Fnextbtn">Next</button></a>


    </div>
  )
}

export default CRUDRouter



