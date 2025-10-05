import React from 'react'

export default function Newsletter() {
    const handleSummit = (e)=>{
        e.preventDefault();
    }
  return (
    <div className='text-center'>
      <p className='text-3xl font-light text-gray-700 mb-3 font-semibold'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mb-5 font-semibold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <form onSubmit={()=>handleSummit} className='w-full sm:w-1/2 flex items-centger mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter your email' />
            <button className='  bg-black text-white text-xs px-10 py-4 overflow-hidden'>Subscribe</button>

        </form>
    </div>
  )
}
