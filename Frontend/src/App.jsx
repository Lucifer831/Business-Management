import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Login from './component/Auth/Login'
import Signup from './component/Auth/Signup'
import Home from './component/Auth/Home'
import EmployeeDashboard from './component/Dashboard/EmployeeDashboard'
import AdminDashboard from './component/Dashboard/AdminDashboard'
import { setLocalstorage } from '../Utils/localstorage'

export default function App() {

  
  useEffect(() => {
    setLocalstorage()
  },[] )
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path ='/emp' element={<EmployeeDashboard/>}/>
        <Route path ='/admin' element={<AdminDashboard/>}/>
      </Routes>
      <ToastContainer />
    </>
  )
}
