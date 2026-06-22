import React, { useContext } from 'react'
import { AuthContext } from '../../context/Authcontext'

const AllTask = () => {

    const authData = useContext(AuthContext)

    if (!authData) return null

    return (
        <div className="bg-[#1c1c1c] p-5 rounded-xl mt-5">

            {/* Header */}

            <div className="bg-red-400 py-3 px-5 flex justify-between rounded mb-4">
                <h2 className="w-1/5 font-medium">Employee Name</h2>
                <h3 className="w-1/5 font-medium text-center">New Task</h3>
                <h3 className="w-1/5 font-medium text-center">Active Task</h3>
                <h3 className="w-1/5 font-medium text-center">Completed</h3>
                <h3 className="w-1/5 font-medium text-center">Failed</h3>
            </div>

            {authData.employees.map((employee) => (

                <div
                    key={employee.id}
                    className="border border-emerald-400 py-3 px-5 flex justify-between rounded mb-3"
                >
                    <h2 className="w-1/5">{employee.name}</h2>

                    <h3 className="w-1/5 text-center text-blue-400">
                        {employee.tasks.filter(task => task.newTask).length}
                    </h3>

                    <h3 className="w-1/5 text-center text-yellow-400">
                        {employee.tasks.filter(task => task.active).length}
                    </h3>

                    <h3 className="w-1/5 text-center text-white">
                        {employee.tasks.filter(task => task.completed).length}
                    </h3>

                    <h3 className="w-1/5 text-center text-red-400">
                        {employee.tasks.filter(task => task.failed).length}
                    </h3>
                </div>

            ))}

        </div>
    )
}

export default AllTask