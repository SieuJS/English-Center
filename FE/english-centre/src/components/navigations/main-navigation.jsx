import * as React from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from 'react-bootstrap/Button';
import { NavLink as RouterLink } from "react-router-dom";
import Icon from "../../assets/high-five-logo.png";

import "./main-navigation.css";

function ButtonAppBar(props) {
  return (
    <Nav className="p-0 container-xl justify-content-around main-nav">
      {/* -------------The icon nav--------------- */}
      <Nav.Item >
        <RouterLink to="/home" className="router-link logo">
          <img src={Icon} alt="" id="icon" />
          HIGH FIVE
        </RouterLink>
      </Nav.Item>
      {/* -------------The Nav--------------- */}

      <Nav.Item id="nav">
        <Nav variant="underline" defaultActiveKey="/home" className="justify-content-between">
          <Nav.Item className="tab-nav">
            <Nav.Link eventKey="home">
              <RouterLink to="/home" className="router-link">
                Trang chủ
              </RouterLink>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="tab-nav">
            <Nav.Link eventKey="courses">
              <RouterLink to="/courses" className="router-link">
                Khoá học
              </RouterLink>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="tab-nav">
            <Nav.Link eventKey="fees">
              <RouterLink to="/fees" className="router-link">
                Học phí
              </RouterLink>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="tab-nav">
            <Nav.Link eventKey="addtions">
              <RouterLink to="/additions" className="router-link">
                Liên hệ
              </RouterLink>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Nav.Item>
      {/* -------------The signin nav--------------- */}
      <Nav.Item id = "login">
              <RouterLink to="/login" className="router-link" id = "login-button">
                Đăng nhập/ Đăng ký
              </RouterLink>
      </Nav.Item>

    </Nav>
  );
}

export default ButtonAppBar;
