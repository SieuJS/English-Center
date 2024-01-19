import { useState,useEffect } from 'react'
import { useContext } from 'react'

import { AuthContext } from '../../shared/context/auth-context'

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
import DashBoard from '../../components/shared/navigation/SideBar'
import ToTopBtn from '../../components/shared/navigation/to-top-btn'
import TopBar from '../../components/shared/navigation/TopBar'

export default function Home (props) {
    const auth = useContext(AuthContext);
    const [loading,setLoading] = useState(true);

    useEffect( ()=> {
        setTimeout(()=>{setLoading(false);}, 2000);

    },[])

    return (
        <div id = "Home">
            <Carousel/>
            <Service/>
            <About/>
            <Categories/>
            <Courses/>
            <Team/>
            <Testimonial/>
        </div>
    )
   
}