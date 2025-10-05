import React, { useContext } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContextprovider';


function Navbar() {
    const [Visible, setVisible] = React.useState(false);
    const {showSearch, setShowSearch,search,setSearch,getCount} = useContext(ShopContext)
  return (
    <div className='flex items-center -ml-4 justify-between pt-2'>
       <Link to={'/'}><img className='w-20 ' src={assets.neowearlogo} alt="my log"/> </Link> 
        <ul className='hidden sm:flex items-center text-sm text-gray-700 gap-5'>
            <NavLink to='/' className='flex flex-col gap-1'>
            <p>Home</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
           </NavLink>
           <NavLink to='collection' className='flex flex-col gap-1'>
            <p>Collection</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
           </NavLink>
           <NavLink to='about' className='flex flex-col gap-1'>
            <p>About</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
           </NavLink>
           <NavLink to='contact' className='flex flex-col gap-1'>
            <p>Contact</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
           </NavLink>
        </ul>
        <div className='flex items-center gap-6'>
            <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt='my seacrh'/>
             <div className='group relative'>
           <Link to='/login'> <img src={assets.profile_icon} className='w-5 cursor-pointer'/> </Link>
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                    <p className='cursor-pointer' hover:text-black>My profile</p>
                   <p className='cursor-pointer' hover:text-black>Orders</p>
                    <p className='cursor-pointer' hover:text-black>LOgout</p>
                </div>
            </div>
        </div>
        <Link to='/cart' className='relative'>
        <img src={assets.cart_icon} className='w-5 min-w-5' alt='icon'/>
        <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCount()}</p>
        </Link>
        <img onClick={()=>setVisible(true)} className='w-5 cursor-pointer sm:hidden' src={assets.menu_icon}/>
        </div>
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${Visible? 'w-full':'w-0'}`}>
            <div className='flex flex-col align-center bg-gray-700 '>
                <div onClick={()=>setVisible(false)} className=' flex  bg-white text-black items-center gap-4 cursor-pointer p-3'>
                    <img className='h-4 roatate-180 ' src={assets.dropdown_icon}/>
                    <p>back</p>
                    
                </div>
                <NavLink onClick={()=>setVisible(false)} className='py-4 pl-6 border border-gray-600' to='/'>Home</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-4 pl-6 border border-gray-600' to='collection'>Collection</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-4 pl-6 border border-gray-600' to='about'>About</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-4 pl-6 border border-gray-600' to='contact'>Contact</NavLink>
            </div>
        </div>
       
        
    </div>
  )
}

export default Navbar