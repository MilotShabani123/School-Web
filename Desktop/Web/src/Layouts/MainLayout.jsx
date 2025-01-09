import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Components/Footer/Footer'
import Nav from '../Components/Headeer/Nav';


const MainLayout = () => {
  return (
    <>
      <Nav/>
      <Outlet/>
      <ToastContainer/>
      <Footer/>
    </>
  )
}

export default MainLayout