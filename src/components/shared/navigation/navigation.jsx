import * as React from 'react'
import { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {Link, NavLink} from 'react-router-dom';
import { AuthContext } from '../../../shared/context/auth-context';
import './navigation.css'
const Navigation = (props) => {
    const auth = useContext(AuthContext);
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
                <a href="contact.html" className="nav-item nav-link" data-link>Contact</a>
                { !auth.isLoggedIn &&
                <Link to = "/signin" className="nav-item d-lg-none">Join Now<i className="fa fa-arrow-right ms-3"></i></Link>
                }

                {
                auth.isLoggedIn && 
                <Link to = "/dashboard" className="nav-item d-lg-none">Dash board<i className="fa fa-arrow-right ms-3"></i></Link>
                }
            </div>
            { !auth.isLoggedIn &&
            <Link to = "/signin" className="btn btn-primary py-4 px-lg-3 d-none d-lg-block">Join Now<i className="fa fa-arrow-right ms-3"></i></Link>
            }

            {
                auth.isLoggedIn && 
                <Link to = "/dashboard" className="btn btn-primary py-4 px-lg-3 d-none d-lg-block">Dash board<i className="fa fa-arrow-right ms-3"></i></Link>
            }
        </div>
    </nav>)
}

export default Navigation;    