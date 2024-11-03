import React from 'react'
import Navbar from './Components/Navbar/navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home'


const App = () => {
  return (
    <div><Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} /> 
      <Route path='/video/:categoryId/:videoId' element={<video/>} />
      </Routes>
      </div>
  )
}

export default App