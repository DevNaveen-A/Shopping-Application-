import React from 'react'
import LandingPage from './Components/LandingPage'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom"
import UserLogin from './Components/UserLogin'
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLogin from './Components/AdminLogin';
import RegiAdmin from './Components/RegiAdmin';
import RegUser from './Components/RegUser';
import AdminDashboard from './Components/AdminDashboard'
import { ToastContainer } from 'react-toastify';
import UserDb from './Components/UserDb';


export default function App() {
  return (
    <BrowserRouter>
        <>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/userLogin' element={<UserLogin />} />
          <Route path='/adminLogin' element={<AdminLogin />}/>
          <Route path='/regAdmin' element={<RegiAdmin />}/>
          <Route path='/regUser' element={<RegUser />}/>
          <Route path='/dashboard/*' element={<AdminDashboard />}></Route>
          <Route path='/userDb/*' element={<UserDb/>}></Route>
        </Routes>
      </>
      <ToastContainer></ToastContainer>
    </BrowserRouter>
    
  );
}