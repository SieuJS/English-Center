import * as React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import {Link, NavLink} from 'react-router-dom';
import './navigation.css'
const Navigation = (props) => {
    
    return (<nav className={"navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0 " + props.className || ""}>
        <Link href='/' className="navbar-brand d-flex align-items-center px-4 px-lg-5" data-link = "true">
            <h2 className='m-0 nav-title text-primary'><i className='fa fa-book me-3'></i>HIGH FIVE ENGLISH</h2>
        </Link>
        <button type='button' className='navbar-toggler me-4' data-bs-toggle="collapse" data-bs-target="#navbarCollapse" >
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <NavLink to="/home" className="nav-item nav-link" data-link>Home</NavLink>
                <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                <NavLink to="/courses" className="nav-item nav-link">Courses</NavLink>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" data-link>Pages</a>
                    <div className="dropdown-menu fade-down m-0">
                        <a href="team.html" className="dropdown-item" data-link>Our Team</a>
                        <a href="testimonial.html" className="dropdown-item" data-link>Testimonial</a>
                        <a href="404.html" className="dropdown-item" data-link>404 Page</a>
                    </div>
                </div>
                <a href="contact.html" className="nav-item nav-link" data-link>Contact</a>
            </div>
            <Link to = "/signin" className="btn btn-primary py-4 px-lg-3 d-none d-lg-block">Join Now<i className="fa fa-arrow-right ms-3"></i></Link>
        </div>
    </nav>)
}

export default Navigation;    