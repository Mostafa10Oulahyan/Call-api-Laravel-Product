// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import AddProduct from "./AddProduct"
import FiltreProduct from"./FiltreProduct"
import Menu from"./Menu"
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
     {/* <h1 className="text-3xl font-bold underline">Hello, Tailwind CSS!</h1> */}
     <Menu/>
    <Routes>
      <Route path="/" element={<FiltreProduct/>}></Route>
      <Route path="/add" element={<AddProduct />}></Route>
      
     </Routes>
    </>
  )
}

export default App
