import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home/home'
import Courses from './pages/home/courses'
// import SignIn from './pages/signin'
function App() {

  

  return (
  <>
  <Routes>
    <Route path='/' element ={<Home/>}>
    {/* <Route path = '/signin' element = {<SignIn/>}/> */}
      
      <Route path = 'home' element = {<Home/>}/>
    </Route>
    <Route path = 'courses' element = {<Courses/>} />
    
  </Routes>
  </>
  )
}

export default App
