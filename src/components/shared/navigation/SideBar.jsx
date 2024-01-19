import React, { useContext, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, NavLink } from "react-router-dom";

// icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined"
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { AuthContext } from "../../../shared/context/auth-context";

//chart

function DashBoard(props) {
  const [collapse, setCollapse] = useState(true)
  const auth = useContext(AuthContext);

  const toggleColapse = () => {
    setCollapse(prev => !prev)
  }

  return (
    <Sidebar
      style={{ height: "100vh" }}
      collapsed={collapse}
    >
      <Menu>
        <MenuItem
          icon={<MenuOutlinedIcon />}
          onClick={toggleColapse}
          style={{ textAlign: "center" }}
        >
          <h2>{props.title || ""}</h2>
        </MenuItem>
        <MenuItem icon={<HomeOutlinedIcon />} >Home</MenuItem>
        {props.NavLinks &&
          props.navLinks.map((item, index) => {
            return <MenuItem icon={item.icon} key={index}>{item.label}</MenuItem>
          })
        }
        {auth.role == "student" && (
          <NavLink to="/mycourses">
            <MenuItem icon={<SchoolOutlinedIcon />} >My Courses</MenuItem>
          </NavLink>
        )}
      </Menu>
    </Sidebar>
  );
}

export default DashBoard;
