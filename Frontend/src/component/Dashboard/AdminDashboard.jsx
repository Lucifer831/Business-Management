import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTask from '../Other/AllTask'

export default function AdminDashboard({data,logoutt}) {
  console.log(data)
  return (
   <>
   <div className='mt-4 p-10'>
   <Header data = {data} logoutt ={logoutt}/>
   <CreateTask data = {data}/>
   <AllTask data = {data}/>

   </div>
  
   </>
  )
}
