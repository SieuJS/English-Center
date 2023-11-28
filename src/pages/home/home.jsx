import { useState,useEffect } from 'react'
import Navigation from '../../components/shared/navigation/navigation'
import SpinnerStart from '../../components/shared/spinner/spinner-start'
import About from '../../components/Home/about'
import Carousel from '../../components/Home/carousel'
import Categories from '../../components/Home/categories'
import Courses from '../../components/Home/courses'
import Service from '../../components/Home/service'
import Team from '../../components/Home/team'
import Testimonial from '../../components/Home/testimonial'
import Footer from '../../components/shared/footer/footer'
import { flushSync } from 'react-dom'

export default function Home (props) {
    
    const [loading,setLoading] = useState(true);

    useEffect( ()=> {
        setTimeout(()=>{setLoading(false);}, 2000);

    },[])

    return (
        <>
        {loading ?  <SpinnerStart/> :
        <>
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
        }
        </>
    )
   
}