import * as React from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import { NavLink as RouterLink } from "react-router-dom";
import Icon from "../../assets/high-five-logo.png";
import NavLink from "./nav-links";
import DropDown from "./drop-down";

import "./main-navigation.css";

function ButtonAppBar(props) {
  return (
    <Nav className="p-0 container-xl justify-content-around main-nav">
      <DropDown></DropDown>
      {/* -------------The icon nav--------------- */}
      <RouterLink to="/home" className="router-link logo">
        <img src={Icon} alt="" id="icon" />
        HIGH FIVE
      </RouterLink>
      {/* -------------The Nav--------------- */}
      <NavLink></NavLink>
      {/* -------------The signin nav--------------- */}
      <RouterLink to="/login" className="router-link" id="login-button">
        Đăng nhập/ Đăng ký
      </RouterLink>
    </Nav>
  );
}

export default ButtonAppBar;
