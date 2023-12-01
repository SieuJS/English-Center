import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/home/home'
import Courses from './pages/home/courses'
import SignIn from './pages/user/signin'
function App() {

  

  return (
  <>
  <Routes>
    
    <Route path = '/courses' element = {<Courses/>} />
    <Route path = '/signin' element = {<SignIn/>}/>
    <Route path='/' element ={<Home/>}>
      <Route path = 'home' element = {<Home/>}/>
    </Route>
  </Routes>
  </>
  )
}

export default App
