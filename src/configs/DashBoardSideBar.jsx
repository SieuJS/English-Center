import React from 'react'

function DashBoardSideBar() {
    const Items = [
        {
            icon : "fas fa-home", 
            linkTo : "/home"
        }, 
        {
            icon : "fas fa-user",
            linkTo : "/user"
        }, 
        {
            icon : "fas fa-tasks",
            linkTo : "/user/tasks"
        },
        {
            icon : "fas fa-question-circle", 
            linkTo : "/user/help"
        }

    ]
  return Items;
}

export default DashBoardSideBar