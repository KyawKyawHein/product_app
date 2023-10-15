import React from 'react'
import Products from './components/Products'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import AddtoCart from './components/AddtoCart'

const App = () => {
  return (
    <div>
      <Nav/>     

      <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/addtocart' element={<AddtoCart/>}/>
      </Routes>
    </div>
  )
}

export default App
