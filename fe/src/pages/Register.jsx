import React from 'react'

const Register = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col'>
    <h2 className='text-2xl'>Register</h2>
    <input className='mt-5 py-5 px-10 rounded bg-transparent border border-gray-800 ' type="text" placeholder='username' name='username' />
    <input className='mt-5 py-5 px-10 rounded bg-transparent border border-gray-800 ' type="password" placeholder='password' name="password" />
    <p className='mr-56 text-blue-400 underline mt-1'>login</p>
    <button className='mt-10 bg-emerald-500 text-2xl py-3 px-8 rounded-md hover:bg-emerald-600'>Register</button>
    </div>
  )
}

export default Register