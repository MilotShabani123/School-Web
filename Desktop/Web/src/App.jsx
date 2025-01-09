import React, { Component } from 'react'
import HomePage from './Pages/HomePage'
import AboutUsPage from './Pages/AboutUsPage'
import EventsPage from './Pages/EventsPage'
import ApplyPage from './Pages/ApplyPage'
import ContactPage from './Pages/ContactPage'
import MainLayout from './Layouts/MainLayout'
import FieldPage from './Pages/FieldPage'
import Drejtimet from './Pages/Drejtimet'
import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/'element={<MainLayout/>} >
      <Route index element={<HomePage/>}/>
      <Route path='/AboutUs' element={<AboutUsPage/>}/>
      <Route path='/Events' element={<EventsPage/>}/>
      <Route path='/Apply' element={<ApplyPage/>}/>
      <Route path='/Contact' element={<ContactPage/>}/>
      <Route path='/Field' element={<FieldPage/>} />
      <Route path='/Drejtimi' element={<Drejtimet/>} />
    </Route>))

    return <RouterProvider router={router}/>

}
export default App
