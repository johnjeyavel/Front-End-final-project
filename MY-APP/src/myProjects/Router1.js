import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import"./Router.css"

import ORouter from './ORouter';
import BmiRouter from './BmiRouter';
import CouterRouter from './CouterRouter';
import TodoRouter from './TodoRouter';
import CRUDRouter from './CRUDRouter';
import ThirukkuralRouter from './ThirukkuralRouter';



const Router1 = () => {

  return (
    <>
    <div>
  
  <Routes>
  <Route path="ORouter" element={<ORouter/>}/>
  <Route path="BmiRouter" element={<BmiRouter/>}/>
  <Route path= "CounterRouter" element={<CouterRouter/>}/>
  <Route path="TodoRouter" element={<TodoRouter/>}/>
  <Route path="CRUDRouter" element={<CRUDRouter/>}/>
  <Route path="ThirukkuralRouter" element={<ThirukkuralRouter/>}/>
  </Routes>
  </div>
  
  <div class="fixed-top d-flex justify-content-end  text-center ">
  <Link to="ORouter" class="home text-white btn-primary">Home</Link>
        {/* <Link to="Counter" class="mx-3 routertop">Counter</Link>
        <Link to="TodoList" class="mx-3 routertop">TodoList </Link>
        <Link to="form" class="mx-3 routertop">form</Link>
        <Link to="Thirukkural" class="mx-3 routertop">Thirukkural</Link> */}
        <Outlet/>
        </div>
    </>
  )
}

export default Router1




// import React from 'react'
// import { Link, Outlet } from 'react-router-dom'
// import { Route, Routes } from 'react-router-dom';
// import"./Router.css"

// import BmiRouter from './BmiRouter';
// import Form1 from './reactForm';
// import Counterfn from './Counterfn';
// import TodoRouter from './TodoClass';
// import Thirukkural from './thirukkural';
// import ORouter from './ORouter';



// const Router1 = () => {
// return (
// <>  
// <div>

// <Routes>
// <Route path="ORouter" element={<ORouter/>}/>
// <Route path="BmiRouter" element={<BmiRouter/>}/>
// <Route path= "Counter" element={<Counterfn/>}/>
// <Route path="TodoList" element={<TodoRouter/>}/>
// <Route path="form" element={<Form1/>}/>
// <Route path="Thirukkural" element={<Thirukkural/>}/>
// </Routes>
// </div>

// <div class="fixed-top d-flex justify-content-end  text-center ">
// <Link to="ORouter" class="home text-white btn-primary">Home</Link>
  {/* <Link to="Counter" class="mx-3 routertop">Counter</Link>
  <Link to="TodoList" class="mx-3 routertop">TodoList </Link>
  <Link to="form" class="mx-3 routertop">form</Link>
  <Link to="Thirukkural" class="mx-3 routertop">Thirukkural</Link> */}
  {/* <Outlet/>
  </div>

  
</>  
)
}

export default Router1; */}

// http://localhost:3000/Counter
// http://localhost:3000/TodoList

// http://localhost:3000/form

// http://localhost:3000/Thirukkural
// http://localhost:3000/BmiRouter