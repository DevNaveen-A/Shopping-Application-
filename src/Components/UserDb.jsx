import React from 'react'

import Nav from './Nav'
import { Route, Routes } from 'react-router-dom'
import BusDetails from './Detail'
import LandingPage from './LandingPage'
import ViewBus from './ViewBus'

export default function UserDb() {
  return (
    <div>
      <h1>Userdashbaord</h1>
      <Nav></Nav>
      <Routes>
      <Route path='/home' element={<BusDetails/> } ></Route>
      <Route path='/viewBus/:id' element={<ViewBus/> }></Route>
      </Routes>
    </div>
  )
}
