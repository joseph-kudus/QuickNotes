import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './routes/landing';
import Login from './routes/Login';
import Signup from './routes/Signup';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing/>}/> 
        <Route path='/Login' element={<Login/>}/> 
        <Route path='/Signup' element={<Signup/>}/> 
      </Routes>
    </div>
  )
}

export default App;