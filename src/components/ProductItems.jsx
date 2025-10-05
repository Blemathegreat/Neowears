import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContextprovider'

export default function ProductItems({id, price, image, name}) {
    const {currency} = useContext(ShopContext)

  return (
    <Link className='cursor-pointer text-gray-700 ' to={`/product/${id}`}>
        <div className='overflow-hidden'>
      <img className='hover:scale-110 transition-ease-in-out' src={image[0]} alt='my product image'/>
 </div>
   <p className='text-sm font-medium pt-3 pb-1'>{name}</p>
   <p className='text-sm font-medium'>${price}</p>


    </Link>

  )
}
