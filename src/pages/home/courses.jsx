import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import SpinnerStart from '../../components/shared/spinner/spinner-start'
import Footer from '../../components/shared/footer/footer'
import Navigation from '../../components/shared/navigation/navigation'
import CoursesHeader from '../../components/Home/courses-teaser/courese-header'
import Categories from '../../components/Home/categories'
import Business from '../../components/Home/courses-teaser/business'
import Toeic from '../../components/Home/courses-teaser/toeic'
import Ielts from '../../components/Home/courses-teaser/ielts'
const courses = () => {
    const [loading,setLoading] = useState(true);

    useEffect( ()=> {
        setTimeout(()=>{setLoading(false);}, 500);
    },[])

    return (
        <>
        {loading ?  <SpinnerStart/> :
        <>
            <Navigation/>
            <CoursesHeader/>
            <Categories scrolls = {true}/>
            <Business/>
            <Toeic/>
            <Ielts/>
            <Footer></Footer>
        </>
        }
        </>
    )
}

export default courses