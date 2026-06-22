import React, { useState } from 'react'
import axios from 'axios'
import { handleError, handleSuccess } from '../../../Utils/toastify';

export default function Signup() {

    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password,setpassword] = useState('');
    const [loading, setLoading] = useState(false);

    const Submitsingup = async (e) => {
        e.preventDefault()

        if (!username.trim() || !email.trim() || !password.trim()) {
            handleError('Please fill all fields')
            return
        }
    
        try {
            setLoading(true)
            const response = await axios.post(
                'http://localhost:3000/signup',
                {
                    username: username.trim(),
                    email: email.trim(),
                    password
                }
            )
    
            console.log(response.data)
    
            setusername('')
            setemail('')
            setpassword('')

            handleSuccess(response.data.message || 'Signup successfully')
    
        } catch (error) {
    
            console.log(error.response?.data || error.message)

            handleError(error.response?.data?.message || 'Signup failed')
        } finally {
            setLoading(false)
    
        }
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-900">
      <div className="border-2 border-emerald-600 rounded-2xl p-12">
        <form 
        onSubmit={(e)=>{
            Submitsingup(e)
        }}
        className="flex flex-col gap-4 w-96">

          <h1 className="text-4xl font-bold text-center text-white mb-4">
            Signup Form
          </h1>

          <input
            value={username}
            onChange={(e)=>{
                setusername(e.target.value)
            }}
            type="text"
            placeholder="Enter your name"
            className="w-full border-2 border-emerald-600 rounded-lg py-4 px-5 text-xl text-white bg-transparent outline-none placeholder:text-gray-400"
          />

          <input
            value={email}
            onChange={(e)=>{
                setemail(e.target.value)
            }}
            type="email"
            placeholder="Enter your email"
            className="w-full border-2 border-emerald-600 rounded-lg py-4 px-5 text-xl text-white bg-transparent outline-none placeholder:text-gray-400"
          />

          <input
            value={password}
            onChange={(e)=>{
                setpassword(e.target.value)
            }}
            type="password"
            placeholder="Enter your password"
            className="w-full border-2 border-emerald-600 rounded-lg py-4 px-5 text-xl text-white bg-transparent outline-none placeholder:text-gray-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-600 rounded-full py-4 text-xl font-semibold text-white hover:bg-emerald-700 transition disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? 'Signing up...' : 'Signup'}
          </button>

        </form>
      </div>
    </div>
  )
}
