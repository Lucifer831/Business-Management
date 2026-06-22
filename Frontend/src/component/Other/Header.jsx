import React from 'react'

export default function Header({data,logoutt}) {
  return (
    <div className="flex items-center justify-between ">
      <h1 className="text-2xl text-white flex flex-col" >
        Hello <span className="text-3xl font-semibold">{data.name} 👋</span>
      </h1>

      <button className="bg-red-500 px-4 py-2 rounded-lg text-white" onClick={logoutt}>
        Logout
      </button>
    </div>
  )
}