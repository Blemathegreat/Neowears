import React, { useEffect } from 'react'
import Title from './Title'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContextprovider'
import ProductItems from './ProductItems'
export default function Bestseller() {
    const { products } = useContext(ShopContext)
    const [bestsellerproduct, setBestsellerproduct] = React.useState([])
    useEffect(() => {
        const  bestsellers =products.slice(0,5).filter((item)=> item.bestseller)
        setBestsellerproduct(bestsellers)
    }, [products])
  return (
    <div className='py-10 items-center'>

        <Title text1='Bestseller' text2='Collections'/>
        <p className='w-3/4  text-sm sm:text-2xl m-auto py-5 text-center text-gray-700'>Explore our top-rated products that have 
        captured the hearts of our customers, showcasing the best of our collection.</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6  xlg:grid-col-5 gap-y-6'>
            {
                bestsellerproduct.map((item, index)=>(<ProductItems key={index} image={item.image} name={item.name} price={item.price} id={item._id}/>))
            } 
           
        </div>
    </div>

  )
}
