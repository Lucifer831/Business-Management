import React from 'react'
import AcceptTask from '../TaskList/AcceptTask'
import CompleteTask from '../TaskList/CompleteTask'
import FailedTask from '../TaskList/FailedTask'
import NewTask from '../TaskList/NewTask'

export default function TaskList({ data }) {

  return (
    <div
      id="tasklist"
      className="flex h-[55%] gap-5 items-center overflow-x-auto mt-10"
    >

      {data.tasks.map((task, index) => {

        if (task.active) {
          return <AcceptTask key={index} data={task} />
        }

        if (task.newTask) {
          return <NewTask key={index} data={task} />
        }

        if (task.completed) {
          return <CompleteTask key={index} data={task} />
        }

        if (task.failed) {
          return <FailedTask key={index} data={task} />
        }

        return null

      })}

    </div>
  )
}