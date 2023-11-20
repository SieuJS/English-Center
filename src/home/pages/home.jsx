import * as React from 'react'
import Navigation from '../../shared/components/navigation/navigation'
import SpinnerStart from '../../shared/components/spinner/spinner-start'
import About from '../components/about'
import Carousel from '../components/carousel'
import Categories from '../components/categories'
import Courses from '../components/courses'
import Service from '../components/service'
import Team from '../components/team'
import Testimonial from '../components/testimonial'
import Footer from '../../shared/components/footer/footer'

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