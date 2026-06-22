import React, { useState } from 'react'
import axios from 'axios'
import { handleSuccess, handleError } from '../../../Utils/toastify'

export default function Login() {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submitHandler = async (e) => {

        e.preventDefault()

        if (!email.trim() || !password.trim()) {
            handleError('Please fill all fields')
            return
        }

        try {

            const response = await axios.post(
                'http://localhost:3000/login',
                {
                    email,
                    password
                }
            )

            console.log(response.data)

            // Save JWT Token
            localStorage.setItem(
                'token',
                response.data.token
            )

            handleSuccess('Login Successful')

            setemail('')
            setpassword('')

        } catch (error) {

            console.log(error)

            handleError(
                error.response?.data?.message ||
                'Login Failed'
            )

        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-zinc-900">
            <div className="border-2 border-emerald-600 rounded-2xl p-12 shadow-lg">

                <form
                    className="flex flex-col gap-4 w-96"
                    onSubmit={submitHandler}
                >

                    <h1 className="text-4xl font-bold text-center text-white mb-4">
                        Login Form
                    </h1>

                    <input
                        value={email}
                        onChange={(e) => {
                            setemail(e.target.value)
                        }}
                        type="email"
                        placeholder="Enter your email"
                        className="w-full border-2 border-emerald-600 rounded-lg py-4 px-5 text-xl text-white outline-none bg-transparent placeholder:text-gray-400"
                    />

                    <input
                        value={password}
                        onChange={(e) => {
                            setpassword(e.target.value)
                        }}
                        type="password"
                        placeholder="Enter your password"
                        className="w-full border-2 border-emerald-600 rounded-lg py-4 px-5 text-xl text-white outline-none bg-transparent placeholder:text-gray-400"
                    />

                    <button
                        type="submit"
                        className="w-full bg-emerald-600 rounded-full py-4 px-5 text-xl font-semibold text-white hover:bg-emerald-700 transition duration-300"
                    >
                        Login
                    </button>

                </form>

            </div>
        </div>
    )
}