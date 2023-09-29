
import React,{Component} from "react";
import "./TodoRouter.css"

class TodoRouter extends React.Component{

constructor(props){
    super(props);
    this.state={
        changeValue:"",
        changedValue :[],
        editValue:-1,
        editedValue:""
    }
}

clickChange = event=>{
    this.setState({changeValue: event.target.value})
}

addListItem = ()=>{
    const{changeValue,changedValue}=this.state;
    if(changeValue !== ""){
this.setState({
    changedValue:[...changedValue,changeValue],
    changeValue:"",
});
    }
    else{
        alert("error: type something")
    }
};


deleteNow = (itemindex)=>{
const{changedValue}=this.state;

 this.setState({changedValue:  changedValue.filter((v,i) => i !== itemindex)})
}


editNow = (itemindex)=>{
    this.setState ({
        editValue:itemindex,
        editedValue:this.state.changedValue[itemindex]
    })
}




editSaveNow = (itemindex)=>{
const{changedValue,editedValue}=this.state;

const changedValue1 = changedValue.map((itemvalue,i)=>
i === itemindex? editedValue :itemvalue);

this.setState({
changedValue : changedValue1,
editValue:-1,
editedValue:""
})
}


// editedValues = event => {
//    this.setState ({editedValue: event.target.value})
// }


render(){
const{changedValue,changeValue,editedValue}=this.state;

    return(

        <div class=" todo text-center col-5 ">
<div class="todopadding ">

           <h1 class="text-center my-5 pt-3 Tshadow" >Add Todo</h1>
    <input type="text" value={changeValue} onChange={this.clickChange} class=" Bshadow p-2  rounded col-5 border border-dark border-2  mx-5"/>    

    <button onClick={this.addListItem} class="Bshadow p-2 mb-5  rounded col-2 btn-primary fw-bold ">Add</button><hr/>
        
      <ul class="col-12 ul">
        {changedValue.map((itemvalue,itemindex)=>(
            <li key={itemindex} > 
            {this.state.editValue === itemindex?(<>
            <input type="text" value={editedValue} onChange={(e)=>this.setState({editedValue:e.target.value})} class="  Tspan1  mx-4"/>
            <button onClick={()=>this.editSaveNow(itemindex)} class="Bshadow rounded col-2 btn-primary fw-bold ">save</button><hr/>
            </>):
       (<>
       <span > {itemvalue}</span>        

            <button onClick={() => this.deleteNow(itemindex)} class="Bshadow rounded col-3  btn-primary fw-bold mx-4">delete</button>
         <button onClick={()=> this.editNow(itemindex)} class=" Bshadow rounded col-2 btn-primary fw-bold">Edit</button><hr/>
         </>)}
            </li>   
))}


        </ul>  
        </div>
   


        <a href='http://localhost:3000/BmiRouter'>
<button  class="btn-danger Tpreviousbtn">previous</button></a>

<a href='http://localhost:3000/CRUDRouter'>
<button  class="btn-success Tnextbtn">Next</button></a> 
</div>
    )
}
}
export default TodoRouter;