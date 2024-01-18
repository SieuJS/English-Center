import { useState , useCallback} from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'

// import page
import Home from './pages/home/home'
import Courses from './pages/home/courses'
import SignIn from './pages/users/signin'
import SignUp from './pages/users/signup'
import SideBar from './components/shared/navigation/SideBar'
import Navigation from './components/shared/navigation/navigation'
import Footer from './components/shared/footer/footer'
// import hooks
import {AuthContext} from './shared/context/auth-context';
import AuthHook from './hooks/auth-hook'
function App() {

  const {login , logout, token, userId, role} = AuthHook();


  let routes ;

  if(token) {
    routes = (
      <></>
    )
  }

  if (!token) {

  }

  return (
  
  <AuthContext.Provider value = {
    {isLoggedIn : !!token, login, logout, userId, token, role}}>
      <Navigation></Navigation>
      <div id = "app" className=" d-flex container-xxl overflow-x-hidden">
      <SideBar/>
      <main className=''>
      <Routes>
        <Route path = '/courses' element = {<Courses/>} />
        <Route path = '/signin' element = {<SignIn/>}/>
        <Route path = "/dashboard" element = {<SideBar/>}/>
        <Route path='/' element ={<Home/>}/>
        <Route path = 'home' element = {<Home/>}/>
        {routes}
      </Routes>
      <Footer/>
      </main>
      </div>
  </AuthContext.Provider>
  
  )
}

export default App
