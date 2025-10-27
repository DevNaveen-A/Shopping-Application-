import React from 'react'
import Navigate from './Navigate'
import { Route, Routes } from 'react-router-dom'
import RegBus from './RegBus'
import LandingPage from './LandingPage'
import BusDetails from './BusDetails'
import ViewBus from './ViewBus'
import Update from './Update'

export default function AdminDashboard() {
  return (
    <>
    <h1>Welcome to Admin Dashboard</h1>
    <Navigate/>npm
    <Routes>
      <Route path='/home/' element={<BusDetails/> }></Route>
      <Route path="/regBus" element={<RegBus/>} ></Route>
      
      <Route path='/busInfo/:id' element={<ViewBus/> }></Route>
      <Route path='/update/:id' element={<Update/>}></Route>
    

    </Routes>
    </>
  )
}
