import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SpinnerStart from './components/home/spinner-start'
import Navigation from './components/home/navigation'
import Carousel from './components/home/carousel'
import Service  from './components/home/service'
import About from './components/home/about'
import Categories from './components/home/categories'
import Courses from './components/home/courses'
import Team from './components/home/team'
function App() {
  return (
  <>
  <SpinnerStart></SpinnerStart>
  <Navigation></Navigation>
  <Carousel></Carousel>
  <Service/>
  <About/>
  <Categories/>
  <Courses/>
  <Team/>
  </>
  )
}

export default App
