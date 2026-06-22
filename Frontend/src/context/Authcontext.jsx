import React, { createContext, useEffect, useState } from 'react'
import { getlocalstorage, setLocalstorage, syncAdminLocalstorage } from '../../Utils/localstorage'

export const AuthContext = createContext()

const getTaskCounts = (tasks = []) => ({
    active: tasks.filter((task) => task.active).length,
    newTask: tasks.filter((task) => task.newTask).length,
    completed: tasks.filter((task) => task.completed).length,
    failed: tasks.filter((task) => task.failed).length
})

export default function Authcontext({ children }) {

    const [userData, setUserData] = useState({
        employees: [],
        admin: []
    })

    const saveUserData = (employees, admin) => {
        localStorage.setItem('employee', JSON.stringify(employees))
        localStorage.setItem('admin', JSON.stringify(admin))
        setUserData({ employees, admin })
    }

    useEffect(() => {
        if (!localStorage.getItem('employee') || !localStorage.getItem('admin')) {
            setLocalstorage()
        }
        syncAdminLocalstorage()
        const data = getlocalstorage()
        setUserData({
            employees: data.employees,
            admin: data.admin
        })
    }, [])

    const assignTaskToEmployee = (employeeName, task) => {
        let isAssigned = false

        const updatedEmployees = userData.employees.map((employee) => {
            if (employee.name.toLowerCase() !== employeeName.trim().toLowerCase()) {
                return employee
            }

            isAssigned = true
            const updatedTasks = [...employee.tasks, task]

            return {
                ...employee,
                tasks: updatedTasks,
                taskCounts: getTaskCounts(updatedTasks)
            }
        })

        if (!isAssigned) {
            return false
        }

        saveUserData(updatedEmployees, userData.admin)
        return true
    }

    return (
        <AuthContext.Provider value={{ ...userData, assignTaskToEmployee }}>
            {children}
        </AuthContext.Provider>
    )
}
