import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import Newsletter from '../components/Newsletter'

function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={`ABOUT`} text2={`US`}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-6'>
      <img className='w-full max-w-[450px]' src={assets.about_img}/>
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam itaque, architecto corrupti repellendus veritatis soluta asperiores adipisci obcaecati repudiandae minus, deleniti doloremque iste optio voluptas molestias maiores amet? Itaque, reiciendis.</p>
<p>Lorem ipsum dolor sit amet
   consectetur adipisicing elit. Corrupti
    dignissimos blanditiis consectetur tenetur
    
     sequi velit quaerat, a laboriosam reiciendis, porro est nemo! Labore sunt aperiam reiciendis assumenda! Tenetur, voluptate dicta.</p>
     <b className='text-gray-800'>Our Mission</b>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit excepturi praesentium cupiditate similique delectus corporis dolorum repellendus eaque ab quaerat
       exercitationem laborum asperiores, hic vero ut consectetur fuga enim ipsa.</p>
      </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={`WHY`} text2={`CHOOSE US`}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border border-gray-50 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Harum, quos fugit. Numquam, temporibus obcaecati omnis sit optio, iure blanditiis labore quibusdam sed assumenda earum cumque harum provident quam placeat nisi.

          </p>
        </div>
         <div className='border  border-gray-50 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Harum, quos fugit. Numquam, temporibus obcaecati omnis sit optio, iure blanditiis labore quibusdam sed assumenda earum cumque harum provident quam placeat nisi.

          </p>
        </div>
         <div className='border  border-gray-50 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exeptional customer service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Harum, quos fugit. Numquam, temporibus obcaecati omnis sit optio, iure blanditiis labore quibusdam sed assumenda earum cumque harum provident quam placeat nisi.

          </p>
        </div>
      </div>
      <Newsletter/>
    </div>
  )
}

export default About