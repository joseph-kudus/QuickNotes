import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './routes/landing';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Navbar from './component/Navbar';
import { useAuth } from './context/AuthContext';
import Protectedroute from './component/Protectedroute';
import Dashboard from './routes/Dashboard';
function App() {
  const {loading, currentUser}= useAuth();
  if(loading){
    return(
      <div className='min-h-screen bg-slate-50 flex items-center justify-center'>
        <div className='animate-pulse text-indigo-600 text-xl'>Loading QuickNotes here
        </div> 
      </div>
    )
  }
  return (
    <div>
      <div className='min-h-screen bg-slate-50'>
        <Navbar/>
          <Routes>
            <Route path='/'
             element={
              currentUser ? <Navigate to="/dashbord" replace/>:
             <Landing/>
             }/> 

             <Route path='/Login'
             element={
              currentUser ? <Navigate to="/Dashbord" replace/>:
             <Login/>
             }/> 

             <Route path='/Signup'
             element={
              currentUser ? <Navigate to="/dashbord" replace/>:
             <Signup/>
             }
             /> 
             <Route path='/dashboard'element={
              <Protectedroute>
                  <div className='container mx-auto px-4 py-8'>
                    <Dashboard/>
                  </div>
              </Protectedroute>
              }>
              </Route>
            </Routes>            
        </div>
    </div>
  )
}
export default App;