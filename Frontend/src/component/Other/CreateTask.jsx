import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/Authcontext'
import { handleError, handleSuccess } from '../../../Utils/toastify'

export default function CreateTask() {
  const { assignTaskToEmployee } = useContext(AuthContext)

  const [tasktitle, settasktitle] = useState('')
  const [taskdate, settaskdate] = useState('')
  const [taskdescription, settaskdescription] = useState('')
  const [assignto, setassignto] = useState('')
  const [category, setcategory] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    if (!tasktitle.trim() || !taskdate || !taskdescription.trim() || !assignto.trim() || !category.trim()) {
      handleError('Please fill all fields')
      return
    }

    const newTask = {
      taskTitle: tasktitle.trim(),
      taskDate: taskdate,
      taskDescription: taskdescription.trim(),
      assignTo: assignto.trim(),
      category: category.trim(),
      active: false,
      newTask: true,
      completed: false,
      failed: false
    }

    const assigned = assignTaskToEmployee(assignto, newTask)

    if (!assigned) {
      handleError('Employee not found')
      return
    }

    handleSuccess('Task created successfully')

    settasktitle('')
    settaskdate('')
    settaskdescription('')
    setassignto('')
    setcategory('')
  }

  return (
    <div className="mt-10 bg-[#1c1c1c] p-8 rounded">

      <form
        onSubmit={submitHandler}
        className="flex w-full items-start justify-between"
      >

        <div className="w-1/2">

          <div>
            <h3 className="text-sm mb-1 text-gray-300">
              Task Title
            </h3>

            <input
              value={tasktitle}
              onChange={(e) => settasktitle(e.target.value)}
              type="text"
              placeholder="Make a UI design"
              className="text-sm py-2 px-4 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
            />
          </div>

          <div>
            <h3 className="text-sm mb-1 text-gray-300">
              Date
            </h3>

            <input
              value={taskdate}
              onChange={(e) => settaskdate(e.target.value)}
              type="date"
              className="text-sm py-2 px-4 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
            />
          </div>

          <div>
            <h3 className="text-sm mb-1 text-gray-300">
              Assign To
            </h3>

            <input
              value={assignto}
              onChange={(e) => setassignto(e.target.value)}
              type="text"
              placeholder="employee name"
              className="text-sm py-2 px-4 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
            />
          </div>

          <div>
            <h3 className="text-sm mb-1 text-gray-300">
              Category
            </h3>

            <input
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              type="text"
              placeholder="design, dev, etc"
              className="text-sm py-2 px-4 w-4/5 rounded outline-none bg-transparent border border-gray-400"
            />
          </div>

        </div>

        <div className="w-2/5 flex flex-col items-start">

          <h3 className="text-sm mb-1 text-gray-300">
            Description
          </h3>

          <textarea
            value={taskdescription}
            onChange={(e) => settaskdescription(e.target.value)}
            rows="10"
            className="w-full rounded outline-none bg-transparent border border-gray-400 p-4 resize-none"
          />

          <button
            type="submit"
            className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full"
          >
            Create Task
          </button>

        </div>

      </form>

    </div>
  )
}
