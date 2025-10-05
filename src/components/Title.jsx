 import React from 'react'
 
 export default function Title({text1,text2}) {
   return (
     <div className='flex items-center justify-center font-medium'>
        <p className='text-3xl text-gray-700 leading-relaxed'>{text1} <span className='text-3xl text-black leading-relaxed'>{text2}</span></p>

        <p className='w-11 bg-gray-700 h-[2px]'></p>


     </div>
   )
 }
 