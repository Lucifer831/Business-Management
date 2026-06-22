import React from 'react'

export default function TaskListNumber({data}) {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='h-40 w-[45%]  bg-red-400 rounded-lg'>
            <h2 className='text-2xl text-white pt-6 pl-3'>{data.taskCounts.active}</h2>
            <h3 className ="text-white text-3xl pl-3">Active Task</h3>
        </div>
        <div className='h-40 w-[45%]  bg-blue-400 rounded-lg'>
            <h2 className='text-2xl text-white pt-6 pl-3'>{data.taskCounts.newTask}</h2>
            <h3 className ="text-white text-3xl pl-3">New Task</h3>
        </div>
        <div className='h-40 w-[45%]  bg-green-400 rounded-lg'>
            <h2 className='text-2xl text-white pt-6 pl-3'>{data.taskCounts.completed}</h2>
            <h3 className ="text-white text-3xl pl-3">Completed</h3>
        </div>
        <div className='h-40 w-[45%]  bg-yellow-400 rounded-lg'>
            <h2 className='text-2xl text-white pt-6 pl-3'>{data.taskCounts.failed}</h2>
            <h3 className ="text-white text-3xl pl-3">Failed</h3>
        </div>
       
        
    </div>
  )
}
