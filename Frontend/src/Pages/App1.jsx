import React, { useContext, useState } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Login1 from '../component/Auth/Login1'
import AdminDashboard from '../component/Dashboard/AdminDashboard'
import EmployeeDashboard from '../component/Dashboard/EmployeeDashboard'
import { AuthContext } from '../context/Authcontext'

export default function App1() {

    const [user, setUser] = useState(null)
    const authData = useContext(AuthContext)
    const navigate = useNavigate()
    const currentAdmin = authData?.admin.find((admin) => admin.id === user?.data?.id)
    const currentEmployee = authData?.employees.find((employee) => employee.id === user?.data?.id)

    const handlelogout = () => {
        setUser(null)
        navigate('/login')
        console.log('logout was called')
    }

    const handlelogin = (email, password) => {
        const loggedAdmin = authData?.admin.find((e) => e.email == email && e.password == password)

        if (loggedAdmin) {
            setUser({ role: 'admin', data: loggedAdmin })
            navigate('/admin')
        }
        else if (authData && authData.employees.find((e) => email == e.email && password == e.password)) {
            const loggedEmployee = authData.employees.find((e) => email == e.email && password == e.password)
            setUser({ role: 'user', data: loggedEmployee })
            navigate('/employee')
        }
    }

    return (
        <Routes>
            <Route path='/login' element={<Login1 handlelogin={handlelogin} />} />
            
            <Route path='/admin' element={
                user?.role === 'admin' 
                ? <AdminDashboard data={currentAdmin || user.data} logoutt={handlelogout} /> 
                : <Navigate to='/login' />
            } />
            
            <Route path='/employee' element={
                user?.role === 'user' 
                ? <EmployeeDashboard data={currentEmployee || user.data} logoutt={handlelogout} /> 
                : <Navigate to='/login' />
            } />

            {/* Default route */}
            <Route path='*' element={<Navigate to='/login' />} />
        </Routes>
    )
}
