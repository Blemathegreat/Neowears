import React from 'react'
import { assets } from '../assets/frontend_assets/assets'


export default function Policy() {

  return (
    <div className='items-center justify-around py-10 flex gap-12 text-center'>
        <div >

         <img className='w-12 m-auto mb-5' src={assets.exchange_icon} alt='my exchange policy' />
            <p className=' font-semibold '>Easy Exchange Policy</p>
            <p className='color-gray-400'>We Offfer Hastle Free Services</p>
        </div>
          <div className=' '>

           <img className='w-12 m-auto mb-5 ' src={assets.support_img} alt='my exchange policy' />
            <p className='font-semibold '>Easy Exchange Policy</p>
            <p className='color-gray-400'>We Offfer Hastle Free Services</p>
        </div>
          <div className=''>

        <img className='m-auto w-12 mb-5'  src={assets.quality_icon} alt='my exchange policy' />
            <p className=' font-semibold '>7 Days return</p>
            <p className=' color-gray-400'>We provide 7 days free return policy</p>
        </div>
    </div>
  )
}
