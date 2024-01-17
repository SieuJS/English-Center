import { useState , useCallback} from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/home/home'
import Courses from './pages/home/courses'
import SignIn from './pages/user/signin'
import SignUp from './pages/user/signup'
import {AuthContext} from './shared/context/auth-context'
import DashBoard from './pages/user/dashboard'
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId , setUserId] = useState();

  const login = useCallback( (userId) => {
    setIsLoggedIn(true);
    setUserId(userId)
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(undefined);
  }, []);


  let routes ;

  

  if(isLoggedIn) {
    routes = (
      <Route path = "/dashboard" element = {<DashBoard/>}/>
    )
  }

  return (
  <>
  <AuthContext.Provider value = {{isLoggedIn, login, logout, userId}}>
  <Routes>
    <Route path = '/courses' element = {<Courses/>} />
    <Route path = '/signin' element = {<SignIn/>}/>
    <Route path = "/signup" element = {<SignUp/>}/>
    <Route path='/' element ={<Home/>}/>
    <Route path = 'home' element = {<Home/>}/>
    {routes}
  </Routes>
  </AuthContext.Provider>
  </>
  )
}

export default App
