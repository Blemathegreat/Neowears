import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import Newsletter from '../components/Newsletter'

function Contact() {
  return (
    <div>
      <div className='border-t text-2xl pt-10'>
    <Title text1={`CONTACT`} text2={`US`}/>
      </div>
      <div className='flex my-10 flex-col md:flex-row mb-28 justify-center gap-10 '>
        <img src={assets.contact_img} className='w-full max-w-[480px]'/>
        <div className='flex flex-col justify-center items-start  gap-6'>
          <p className='text-bold text-xl '>Our Store</p>
          <p className='text-gray-500'>Gra Lekki Phase 2<br/>Lagos State </p>
          <p className='text-gray-500'> Tel:+2349160092589<br/>Email:blemathegreat@gmail.com</p>
          <p className='bold text-gray-900'> Career at BLEMATHEGREAT</p>
          <p className='text-gray-500'>Learn more about our school and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'> Explore our Jobs</button>
        </div>
      </div>
      <Newsletter/>
    </div>
  )
}

export default Contact