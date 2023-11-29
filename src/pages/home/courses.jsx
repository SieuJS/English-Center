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
import StandardEnglish from '../../components/Home/courses-teaser/standard-english'
import ToTopBtn from '../../components/shared/navigation/to-top-btn'
const courses = () => {
    const [loading,setLoading] = useState(true);

    useEffect( ()=> {
        setTimeout(()=>{setLoading(false);}, 500);
    },[])

    return (
        <>
        {loading ?  <SpinnerStart/> :
        <>
            <ToTopBtn/>
            <Navigation/>
            <CoursesHeader/>
            <Categories scrolls = {true}/>
            <Business/>
            <Toeic/>
            <Ielts/>
            <StandardEnglish/>
            <Footer></Footer>
        </>
        }
        </>
    )
}

export default courses