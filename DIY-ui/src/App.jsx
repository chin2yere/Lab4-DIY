import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home';
import Cars from './components/Cars/Cars';
import CarDetails from './components/CarDetails/CarDetails';
import Create from './components/Create/Create';
import Update from './components/Update/Update';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <>
      <BrowserRouter>
    <div >
    
    <Routes>
    <Route path="/" element ={<Home/>}/>
    <Route path="/cars" element={<Cars/>}/>
    <Route path="/car/:id" element={<CarDetails/>}/>
    <Route path="/car/create" element={<Create/>}/>
    <Route path="/car/update" element={<Update/>}/>

    {/* <Route path="/car/:Id" element={<LocationEvents />} />
    <Route path="/car/delete/:Id" element={<LocationEvents />} /> */}
    
    </Routes>

       
     </div> 
     </BrowserRouter>
    </>
  )
}

export default App
