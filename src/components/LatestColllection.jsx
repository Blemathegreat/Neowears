import React from 'react'
import Title from './Title'
import { useContext,useEffect,useState } from 'react'
import { ShopContext } from '../context/ShopContextprovider'
import ProductItems from './ProductItems'

export default function LatestColllection() {
    const {products,} = useContext(ShopContext)
    const [latestproduct, setLatestproduct] = useState([])
useEffect(
    ()=>{
setLatestproduct(products.slice(0,10))

    },[]
)


  return (
    <div className='py-10 items-center'>
        <Title text1='Latest' text2='Collections'/>
        <p className='w-3/4  text-sm sm:text-2xl m-auto py-5 text-center text-gray-700 '>Discover our newest arrivals featuring contemporary designs and seasonal must-haves in our latest collections."</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  xlg:grid-col-5 gap-y-6'>
        {
     latestproduct.map(
        (item,index)=>(
            <ProductItems key={index} image={item.image} name={item.name} price={item.price} id={item._id} />

        )
     )
        }

        </div>

    </div>


  )
}
