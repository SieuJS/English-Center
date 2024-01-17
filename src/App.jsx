import { useState , useCallback} from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'

// import page
import Home from './pages/home/home'
import Courses from './pages/home/courses'
import SignIn from './pages/users/signin'
import SignUp from './pages/users/signup'
import DashBoard from './pages/users/dashboard'

// import hooks
import {AuthContext} from './shared/context/auth-context';
import AuthHook from './hooks/auth-hook'
function App() {



  const {login , logout, token, userId, role} = AuthHook();


  let routes ;

  if(token) {
    routes = (
      <Route path = "/dashboard" element = {<DashBoard/>}/>
    )
  }

  if (!token) {

  }

  return (
  <>
  <AuthContext.Provider value = {
    {isLoggedIn : !!token, login, logout, userId, token, role}}>
  <Routes>
    <Route path = '/courses' element = {<Courses/>} />
    <Route path = '/signin' element = {<SignIn/>}/>
    <Route path='/' element ={<Home/>}/>
    <Route path = 'home' element = {<Home/>}/>
    {routes}
  </Routes>
  </AuthContext.Provider>
  </>
  )
}

export default App
