import React, { useContext } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContextprovider'

export default function Order() {
  const {products,currency} = useContext(ShopContext)
  return (
    <div className='border-top py-16'>
     <div className='text-2xl'>
       <Title text1={'MY'} text2={'ORDERS'}/>
     </div>
     <div>
      {
        products.slice(1,4).map((item,index)=>(
          <div key={index} className='border-t b border-b py-4text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
            <div className='flex item-start gap-6 text-sm'>

                <img src={item.image[0]} className='w-16 sm:w-20'/>
                <div>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className='flex items- center gap-3 mt-2 text-gray-700'>
                    <p className='text-lg'>{currency}{item.price}</p>
                    <p> Quantity:1</p>
                    <p> size: M</p>
                  </div>
                  <p className='mt-2'>Date: <span className='text-gray-400'> Aug,2025</span></p>
                 
                </div>
            
            </div>
            
                <div className='sm:w-1/2 flex justify-between'>
            <div className='flex items-center gap-2'>
            <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
            <p className='text-sm md:text-base'> Ready to Ship</p>
            </div>
            <button className='py-2 px-4 border border-gray-50 text-sm font-medium rounded-sm'>Track Order</button>
            </div> 
          </div>
          
        ))
      }
      
     </div>
      </div>
  )
}
