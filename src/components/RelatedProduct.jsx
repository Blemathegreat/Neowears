import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContextprovider'
import Title from './Title'
import ProductItems from './ProductItems'



export default function RelatedProduct({category,subCategory}) {
    const {products} = useContext(ShopContext)
    const [related, setRelated]= useState([])
    useEffect(()=>{
        let productCopy =products.slice()
        if(products.length >0){
            productCopy=productCopy.filter(item =>category=== item.category)
            productCopy= productCopy.filter(item => subCategory===item.subCategory)
            setRelated(productCopy.slice(0,5))
        }
       
    },[products])
  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title text1={`related`} text2={`Products`}/>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-ccolos-5 gap-5 gap-p-y-10'>
           {
            related.map((item,index)=>(
                <ProductItems key={index} image={item.image} name={item.name} price={item.price}/>
            ))
           }
        </div>
    </div>
  )
}
