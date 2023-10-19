import * as React from "react";
import Nav from "react-bootstrap/Nav";
import { Link as RouterLink } from "react-router-dom";
import './nav-links.css'

function navLinks(props) {
  return (
    <Nav
      variant="underline"
      defaultActiveKey="/home"
      className="justify-content-between"
    >
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
  );
}

export default navLinks;