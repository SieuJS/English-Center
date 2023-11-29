import React, { useEffect, useState } from 'react'
import { animateScroll , Link } from 'react-scroll';


import './to-top-btn.css'


function ToTopBtn(props) {

    const [toTop, setToTop] = useState(false);


    //set up sroll : 

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


    const scrollUp = () => {
        let options = {
            duration : 1000,
            smooth : 'easeInOutQuint'
        }
        animateScroll.scrollToTop(options);
    }


  return (
    
    <a className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up btn btn-lg btn-primary btn-lg-square" onClick={ scrollUp}></i></a>
  )
}

export default ToTopBtn;