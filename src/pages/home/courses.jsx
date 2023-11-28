import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import SpinnerStart from '../../components/shared/spinner/spinner-start'
import Footer from '../../components/shared/footer/footer'
import Navigation from '../../components/shared/navigation/navigation'
import CoursesHeader from '../../components/Home/courses-teaser/courese-header'
import Categories from '../../components/Home/categories'
import Business from '../../components/Home/courses-teaser/business'
const courses = () => {
    const [loading,setLoading] = useState(true);

    useEffect( ()=> {
        setTimeout(()=>{setLoading(false);}, 2000);
    },[])

    return (
        <>
        {loading ?  <SpinnerStart/> :
        <>
            <Navigation/>
            <CoursesHeader/>
            <Categories scrolls = {true}/>
            <Business/>
            <Footer></Footer>
        </>
        }
        </>
    )
}

export default courses