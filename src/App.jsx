import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Signup from './pages/Signup'
import Login from './pages/Login';

import {Main} from './pages/Main'
import { Navbar } from './components/Navbar';
import{Prac} from './pages/Prac'
import { AuthContextProvider } from './Context/Authcontext';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<AuthContextProvider>
    <BrowserRouter>

    <Navbar/>
    <Routes>
   
    <Route path="/" element={<Main />}/>
    <Route path="/Prac" element={<Prac/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/login" element={<Login />}/>

    </Routes>
   
    </BrowserRouter>
    </AuthContextProvider>

    </>
  )
}

export default App
