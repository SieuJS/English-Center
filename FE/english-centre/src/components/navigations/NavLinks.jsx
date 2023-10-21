import * as React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";
export default function NavLinks(props) {
  if (props.items.length === 0) {
    return <></>;
  }
  return (
    <div id = "links-container" className= {props.className}>
      {props.items.map((link) => {
        return <NavLink to={link.href} 
        style = {({isActive, isPending, isTransitioning}) => {
          let newStyle = {
            ...props.style
          }
          if(isActive) {
            newStyle = {
              ...props.style,
              ...props.activeStyle
            }
          }
          return {
            ...newStyle
          } 
        }}
        
        className={"nav-links"}
         
        >{link.title}
        
        </NavLink>;
      })}
    </div>
  );
}
