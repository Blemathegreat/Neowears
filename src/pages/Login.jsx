import React, { useState } from 'react'

function Login() {
  const [visible, setVisible] =useState('Sign Up')
  const onSummitHandler=async(event)=>{
    event.preventDefault()
  }
  return (
    <form onSubmit={onSummitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-600'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='text-3xl'>{visible}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-600'/>
      </div>
    {visible== `Login` ? "" : <input className='w-full py-2 px-3 border border-gray-800' type='text' placeholder='name' required/>}  
            <input className='w-full py-2 px-3 border border-gray-800' type='email' placeholder='Email' required/>
                  <input className='w-full py-2 px-3 border border-gray-800' type='password' placeholder='Password' required/>
                  <div className='flex justify-between text-sm mt-[-8px] w-full'>
                    <p>Forgot your password</p>
                    {
                      visible===`Login`? <p className='cursor-pointer' onClick={()=>setVisible(`Sign Up`)}>Create account</p> :
                      <p className='cursor-pointer' onClick={()=>setVisible(`Login`)}>Login</p>
                    }
                  </div>
                <button className='bg-black text-white px-8 py-2 cursor-pointer'>{visible===`Login`? `Sign in` :`Sign Up`}</button>
    </form>
  )
}

export default Login