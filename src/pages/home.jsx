import * as React from 'react'
import Navigation from '../components/shares/navigation'
import SpinnerStart from '../components/shares/spinner-start'
import About from '../components/home/about'
import Carousel from '../components/home/carousel'
import Categories from '../components/home/categories'
import Courses from '../components/home/courses'
import Service from '../components/home/service'
import Team from '../components/home/team'
import Testimonial from '../components/home/testimonial'
import Footer from '../components/shares/footer'

export default function Home (props) {
    return (
        <>
        <SpinnerStart/>
        <Navigation/>
        <Carousel/>
        <Service/>
        <About/>
        <Categories/>
        <Courses/>
        <Team/>
        <Testimonial/>
        <Footer></Footer>
        </>
    )
   
}