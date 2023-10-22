import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Navbar from 'react-bootstrap/Navbar';
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'
import './MainNavigation.css'
import Button from '../FormElements/Button'
import logo from '../../assets/high-five-logo.png';
import Backdrop from '../UIElements/Backdrop';

const navItems = [{href : "/home" , title : "Trang chủ"}, {href : '/course', title : "Khoa hoc"}, {href : "/contact", title : "Lien he"}, {title : "Cong nghe" , href : '/tech'}]



export default function MainNavigation(props) {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };
    return ( 
    <>
    {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks items = {navItems} />
        </nav>
      </SideDrawer>
        <Navbar border = "light" id = "main-navigation" >
        <div 
        className='drop-down-button nav-item' onClick = {openDrawerHandler}
        >
            <span/>
            <span/>
            <span/>
        </div>
        <div className='header'>
            <img id = "logo" src={logo} alt="" />
            <div className="title d-none d-sm-block d-md-none">HIGH FIVE ENGLISH</div>
        </div>
            <NavLinks 
            className = 'nav-links d-none d-md-flex'
                items = {navItems}
                style = {{color : "black"}}
                activeStyle = {{
                    borderBottom : "2px solid purple",
                    color : "purple"
                }}
            ></NavLinks>
            <button id = 'login-button'>Login / Sign up</button>
        </Navbar> 
    </>   
    )
}
