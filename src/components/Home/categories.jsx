import *  as React from 'react'
import './categories.css'

const DATA = [
    {
        title : "Business English",
        image : "img/cat-1.jpg"
    },
    {
        title : "TOEIC Prep",
        image : "img/cat-2.jpg"
    },
    {
        title : "IELTS Prep",
        image : "img/cat-3.jpg"
    },
    {
        title : "Academic English",
        image : "img/cat-4.jpg"
    }
]

function renderCat (cat) {

}

export default function Categories (props)  {



    return (
        <div className="container-xxl py-5 category">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Categories</h6>
                <h1 className="mb-5">Courses Categories</h1>
            </div>
            <div className="row g-3">
                <div className="col-lg-7 col-md-6">
                    <div className="row g-3">
                        <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                            <a className="position-relative d-block overflow-hidden" href={props.scrolls ? "#business" : "" }>
                                <img className="img-fluid" src="img/cat-1.jpg" alt=""/>
                                <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: "1px"}}>
                                    <h5 className="m-0">Business English</h5>
                                    <small className="text-primary">49 Courses</small>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                            <a className="position-relative d-block overflow-hidden" href={props.scrolls ? "#toeic": "" }>
                                <img className="img-fluid" src="img/cat-2.jpg" alt=""/>
                                <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: "1px"}}>
                                    <h5 className="m-0">TOEIC Prep</h5>
                                    <small className="text-primary">49 Courses</small>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                            <a className="position-relative d-block overflow-hidden" href={props.scrolls ? "#ielts-prep": "" }>
                                <img className="img-fluid" src="img/cat-3.jpg" alt=""/>
                                <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"style={{margin: "1px"}}>
                                    <h5 className="m-0">IELTS Preps</h5>
                                    <small className="text-primary">49 Courses</small>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{minHeight: "350px"}}>
                    <a className="position-relative d-block h-100 overflow-hidden" href={props.scrolls ? "#standar-english": "" }>
                        <img className="img-fluid position-absolute w-100 h-100" src="img/cat-4.jpg" alt="" style={{objectFit: 'cover'}}/>
                        <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: "1px"}}>
                            <h5 className="m-0">Standard English</h5>
                            <small className="text-primary">49 Courses</small>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    )
}