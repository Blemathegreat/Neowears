import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

export default function Footer() {
  return (
    <div >
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 py-10 mt-40 test-sm'>
            <div>
                <img className='w-31 mb-5' src={assets.logo} alt='my logo' />
                <p className=' w-full md:w-2/3 text-gray-600'>Lorem Ipsum is simply dummy
                 text of the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when an unknown
                   printer took a galley of type and scrambled it to make a type specimen book.</p>
 </div>
 <div>
    <p className='text-xl font-medium mb-5'>COMPANY</p>
    <ul className= ' flex flex-col text-gray-600 space-y-3'>
        <li>About</li>
    <li>Contact</li>
    <li>Privacy Policy</li>
    <li>Terms & Conditions</li>
    </ul>
 </div>
 <div>
    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
   <ul className='flex flex-col text-gray-600'>
     <li>+2349160092589</li>
    <li>Phone: (123) 456-7890</li>
    <li>Email: info@example.com</li>
   </ul>
 </div>
        </div>
       <div>
        < hr className='text-gray-400'/>

        <p className='text-gray-600 text-center py-5'>@2023 Neowear. All rights reserved</p>
        </div> 
    </div>
  )
}
