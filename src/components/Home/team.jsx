import * as React from 'react'

import './team.css'
import { render } from 'react-dom'

const Mems = [
    {
        id : '01',
        name : "David",
        cert : "9.0 IELTS",
        img : "img/team-1.jpg"
    },
    {
        id : '02',
        name : "Sarah",
        cert : "9.5 IELTS",
        img : "img/team-2.jpg"
    },{
        id : '03',
        name : "John",
        cert : "8.0 IELTS",
        img : "img/team-3.jpg"
    },{
        id : '04',
        name : "Linn",
        cert : "900 TOEIC",
        img : "img/team-4.jpg"
    },

]

const renderMem = (mem) => {
   return (
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={mem.id}>
        <div className="team-item bg-light">
            <div className="overflow-hidden">
                <img className="img-fluid" src={mem.img} alt="" />
            </div>
            <div className="position-relative d-flex justify-content-center" style={{marginTop : "-23px"}}>
                <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <div className="text-center p-4">
                <h5 className="mb-0">{mem.name}</h5>
                <small>{mem.cert}</small>
            </div>
        </div>
    </div>
   )

}

export default function Team (props)  {
    const Members = !props.members ? Mems : props.members;
    const renderMembers = Members.map(mem =>(renderMem(mem)))
    return (
        <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Instructors</h6>
                <h1 className="mb-5">Expert Instructors</h1>
            </div>
            {/*  */}
            <div className="row g-4">
                {...renderMembers}
            </div>   
        </div>
    </div>
    )
}