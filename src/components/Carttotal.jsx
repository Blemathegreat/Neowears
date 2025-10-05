import React, { useContext } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContextprovider'

export default function Carttotal() {
  const {products,currency,getCartAmount,deliveryFee} = useContext(ShopContext)
  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={"CART"} text2={"TOTAL"}/>
      </div>
      <div className='flex flex-col gap-3 mt-2 text-sm'>
        <div
        className='flex justify-between'>
          <p>Subtotal</p>
          <p>{currency}{getCartAmount()}.00</p>
        </div>
        <hr/>
        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p>{currency}{deliveryFee}</p>
        </div>
        <hr/>
        <div className='flex justify-between'>
          <b>Total</b>
          <b>{currency}{getCartAmount() ===0 ? 0 :getCartAmount() + deliveryFee}.00</b>
        </div>
      </div>
    </div>
  )
}
