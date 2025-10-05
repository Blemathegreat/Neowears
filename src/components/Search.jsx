import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContextprovider'
import { assets } from '../assets/frontend_assets/assets'
import { useLocation } from 'react-router-dom'

export default function Search() {
    const {Search,setSearch, showSearch, setShowSearch} = useContext(ShopContext)
    const [Visible,setVisible] = useState(false)
    const location = useLocation()
    useEffect(
        ()=>{
            if(location.pathname.includes('collection')){
                setVisible(true)
            }
            else{
                setVisible(false)
            }
        },[location]
    )
  return showSearch && Visible? (

    <div className='border-t-2 border-t-gray-300 border-b-gray-300  border-b-2 bg-gray-50  mt-5 h-20 flex justify-center items-center gap-4'>
       <div className='flex items-center border border-gray-300  rounded-full w-1/2 h-10 px-8 justify-between'>
       <input  onChange={(e)=>setSearch(e.target.value)} className='text-gray-700 border border-none ' type='text' placeholder='Search' value={Search}/>
       <img  className='h-1/2' src={assets.search_icon}/>
       </div>
       <img onClick={()=>setShowSearch(false) } className='text-gray-600 h-[14px]'  src={assets.cross_icon}/>
    </div>
  ) : null
}
