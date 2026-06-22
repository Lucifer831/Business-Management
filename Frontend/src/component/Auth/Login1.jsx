import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/Authcontext'

export default function Login1({ handlelogin }) {

    const authdata = useContext(AuthContext)
    // console.log(authdata)
    // console.log(authdata.employees)
    // console.log(authdata.admin)

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')




    const submitHandler = (e) => {
        e.preventDefault()

        if (!email.trim() || !password.trim()) {
            alert('Please fill all fields')
            return
        }

        handlelogin(email, password)

        setemail('')
        setpassword('')
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-900 px-4">

            <div className="w-full max-w-md bg-zinc-800 border border-zinc-700 rounded-3xl p-8 shadow-2xl">

                <h1 className="text-4xl font-bold text-center text-white mb-2">
                    Welcome Back
                </h1>

                <p className="text-center text-zinc-400 mb-8">
                    Sign in to continue
                </p>

                <form
                    onSubmit={submitHandler}
                    className="flex flex-col gap-5"
                >

                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        className="w-full px-5 py-4 bg-zinc-900 border border-zinc-700 rounded-xl text-white outline-none focus:border-emerald-500"
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        className="w-full px-5 py-4 bg-zinc-900 border border-zinc-700 rounded-xl text-white outline-none focus:border-emerald-500"
                    />

                    <button
                        type="submit"
                        className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl"
                    >
                        Login
                    </button>

                </form>

            </div>

        </div>
    )
}