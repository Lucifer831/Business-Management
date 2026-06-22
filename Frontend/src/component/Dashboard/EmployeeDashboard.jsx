import React from 'react'
import Header from '../Other/Header'
import TaskListNumber from '../Other/TaskListNumber'
import TaskList from '../Other/TaskList'

export default function EmployeeDashboard({data,logoutt}) {
  console.log(data)
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header data = {data} logoutt ={logoutt}/>
      <TaskListNumber data = {data}/>
      <TaskList data = {data}/>
    </div>
  )
}
