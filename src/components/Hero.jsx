import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

export default function () {
  return (
    <div className='flex  flex-col sm:flex-row border border-gray-700  mt-5'>
{/* left */}
<div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
<div className='text-gray-700'>
  <div className='items-center gap-2 flex'>
   <p className='w-8 bg-gray-700 h-[2px]'></p>
   <p className='font-medium test-sm md:text-base'>Our Bestselllers</p> 
  </div>
  <h1 className='text-3xl leadeing-relaxed sm:py-3 lg:text-5xl'>Latest Arrivals</h1>
  <div className='items-center flex gap-2'>
    <p className='text-sm font-semibold md:text-base' >Show Now</p>
    <p className='w-8 h-[2px] bg-gray-700'></p>
  </div>
</div>


</div>
{/* right side */}



  <img className='w-full sm:w-1/2' src={assets.hero_img} alt='my hero image'/>

    </div>


  )
}
