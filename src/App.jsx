import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './routes/landing';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Navbar from './component/Navbar';
function App() {
  return (
    <div>
      <div className='min-h-screen bg-slate-50'>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Landing/>}/> 
            <Route path='/Login' element={<Login/>}/> 
            <Route path='/Signup' element={<Signup/>}/> 
            </Routes>
        </div>
    </div>
  )
}

export default App;