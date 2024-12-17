import { useState } from 'react'
import './App.css'
import { BrowserRouter , Routes , Route, useNavigate} from 'react-router-dom'
import {Dashboard} from './components/Dashboard'
import {Landing} from './components/Landing'

function App() {
 

  return(
    
    <BrowserRouter>
      <Appbar/>
      <Routes>

        <Route path = "/dashboard" element={<Dashboard/>}/>
        <Route path = "/" element={<Landing/>}/>

      </Routes>
    </BrowserRouter>
  )  
}

function Appbar(){
  const navigate = useNavigate();
  return <div>
    
        <div style ={{background : "red", color: "black"}}>
            <button onClick={()=>{navigate("/");}}>Landing Page</button><br /><br />
            <button onClick={()=>{navigate("/Dashboard");}}>Dashboard Page</button><br></br>
        </div>
  </div>
}

export default App
