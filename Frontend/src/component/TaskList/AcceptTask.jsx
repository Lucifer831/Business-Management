import React from 'react'

const AcceptTask = ({data}) => {
  console.log(data)
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5 flex flex-col">

      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
        {data.category} 
        </h3>

        <h4 className="text-sm">
        {data.taskDate}
        </h4>
      </div>

      <h2 className="mt-5 text-2xl font-semibold">
       {data.taskTitle}       
      </h2>

      <p className="text-sm mt-2">
       {data.taskDescription}
      </p>

      {/* Buttons Bottom */}
      <div className="mt-auto flex flex-col gap-3 pt-5">

        <button className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg text-lg font-semibold">
          Mark as Completed
        </button>

        <button className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg text-lg font-semibold">
          Mark as Failed
        </button>

      </div>

    </div>
  )
}

export default AcceptTask