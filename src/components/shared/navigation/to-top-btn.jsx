import React, { useEffect, useState } from 'react'
import { animateScroll , Link } from 'react-scroll';


import './to-top-btn.css'


function ToTopBtn(props) {
    const [toTop, setToTop] = useState(false);

    const options = {
        duration : 500,
        smooth : true,
    };

    useEffect (()=> {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setToTop(true);
            }else{
                setToTop(false);
            }
        }
        window.addEventListener('scroll',handleScroll());

        return () => {
            window.removeEventListener('scroll',handleScroll);
        }
    }, [])


  return (
    
    <Link to = {props.scrollTo ? props.scrollTo : "#"} smooth = {true} offset={200} duration={500}  className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up btn btn-lg btn-primary btn-lg-square" ></i></Link>
  )
}

export default ToTopBtn;