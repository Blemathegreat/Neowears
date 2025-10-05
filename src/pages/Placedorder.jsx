import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import Carttotal from '../components/Carttotal'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContextprovider'

function Placedorder() {
  const [currentMethod, setCurrentMethod] = useState("COD")
  const {navigate} = useContext(ShopContext)
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh border border-gray-50'>
      {/* left*/}
     <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
    <div className='text-xl sm:text-2xl my-3'>
      <Title  text1={'DELIVERY'} text2={'INFORMATION'}/>
    </div>
    <div className='flex gap-3'>
     <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='First name'/>
     <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Last name'/>


    </div>
    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Email address'/>
    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Street'/>
    <div className='flex gap-3'>
     <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='State'/>
     <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='City'/>


    </div>
    <div className='flex gap-3'>
     <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Zipcode'/>
     <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Country'/>


    </div>
    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Phone number'/>

     </div>
     {/* right side*/}
     <div className='mt-8'>
      <div className='mt-8 min-w-[80px'>
        <Carttotal/>
      </div>
      <div className='mt-12'>
        <Title text1={'PAYMENT'} text2={'METHOD'} />
        {/*payment method*/}
        <div className='flex gap-3 flex-col lg:flex-row'>
          <div onClick={()=>setCurrentMethod("stripe")} className='flex items-center gap-3 border border-gray-50 p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border-gray-50 border rounded-full ${currentMethod ==="stripe"? "bg-green-500" :""} `}></p>
            <img className='h-5 mx-4' src={assets.stripe_logo} alt=''/>
          </div>
           <div onClick={()=>setCurrentMethod("razor")} className='flex items-center gap-3 border border-gray-50 p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border border-gray-50 rounded-full ${currentMethod ==="razor"? "bg-green-500" :""} `}></p>
            <img  className='h-5 mx-4' src={assets.razorpay_logo} alt=''/>
          </div>
           <div onClick={()=>setCurrentMethod("COD")} className='flex items-center gap-3 border border-gray-50 p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border border-gray-50 rounded-full ${currentMethod ==="COD"? "bg-green-500" :""}`}></p>
            <p  className='text-gray-500'>CASH ON DELIVERY</p>
          </div>
        </div>
        <div className='w-full text-end mt-8'>
          <button onClick={()=>navigate('/order')} className='bg-black px-6 py-3 text-sm text-white'>PLACE ORDER</button>
        </div>
      </div>
     </div>

    </div>
  )
}

export default Placedorder