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

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {login , logout, token, userId} = AuthHook();


  let routes ;

  

  if(isLoggedIn) {
    routes = (
      <Route path = "/dashboard" element = {<DashBoard/>}/>
    )
  }

  if (!isLoggedIn) {

  }

  return (
  <>
  <AuthContext.Provider value = {{isLoggedIn, login, logout, userId}}>
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
