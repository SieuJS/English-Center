import React from 'react'

// import icon
import  HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ReceiptOutlined from '@mui/icons-material/ReceiptOutlined';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

import DashBoard from '../../components/shared/navigation/SideBar'
import TopBar from '../../components/shared/navigation/TopBar';
function dashboard() {
  const functionList = [
    {
      icon : (<ReceiptOutlined/>),
      label : "Hồ sơ"
    }, 
    {
      icon : (<LibraryBooksIcon/>),
      label : "Khoá học"
    }
  ]
  return (
    <>
    <TopBar/>
    <DashBoard navLinks = {functionList} title = "Xin chào học sinh"/>
    </>
  )
}

export default dashboard