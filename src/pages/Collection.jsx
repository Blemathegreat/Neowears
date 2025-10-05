import React, { useContext,useEffect,useState } from 'react'
import { ShopContext } from '../context/ShopContextprovider'
import { assets } from '../assets/frontend_assets/assets'
import Title from '../components/Title'
import ProductItems from '../components/ProductItems'



function Collection() {
  const {products,search,showSearch} = useContext(ShopContext)
  const [category, setCategory]= useState([])
  const [subCategory,setSubCategory]= useState([])
  const [allCollection, setAllCollection] = useState([])
  const [sortType, setSortType] = useState("relevant")
  const [filter,setFilter] = useState(false)
 
  const Togglecategory= (e)=>{
   if(category.includes(e.target.value)){
setCategory(prev=>prev.filter(item => item !== e.target.value))
   }
   else{
    setCategory(prev=>[...prev, e.target.value])
   }
  }
   const ToggleSubcategory= (e)=>{
   if(subCategory.includes(e.target.value)){
setSubCategory(prev=>prev.filter(item => item !== e.target.value))
   }
   else{
    setSubCategory(prev=>[...prev, e.target.value])
   }
  }
  const applyfilter = ()=>{
let productDuplicate = products.slice()
if(search && showSearch){
  productDuplicate=productDuplicate.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
}
if(category.length > 0){
productDuplicate = productDuplicate.filter(item => category.includes(item.category)) 
};
if(subCategory.length > 0){
  productDuplicate =productDuplicate.filter(item => subCategory.includes(item.subCategory))
}
setAllCollection(productDuplicate)
  }
  const toggleType = ()=>{
    let pcopy =allCollection.slice() 
    switch(sortType){
      case "high-low":
        setAllCollection(pcopy.sort((a,b)=>(a.price-b.price)))
        break;
        case "low-high" :
          setAllCollection(pcopy.sort((a,b)=>(b.price-a.price)))
          break;
          default:
            applyfilter()
            break;
      
    }
  }
useEffect(()=>{
  applyfilter()
},[category,subCategory,search,showSearch])
useEffect(()=>{
  toggleType()
},[sortType])
  
  return (
    <div className='pt-10 flex flex-col sm:flex-row gap-10 sm:gap-10'>
      {/* left info */}
      <div className='min-w-60'>
        <p className='my-2 flex cursor-pointer gap-2 items-center text-2xl'>FILTERS
        <img onClick={()=>setFilter(!filter)} className={`h-3 sm:hidden ${filter?"rotate-90":"" }`} src={assets.dropdown_icon}/>
        </p>
        {/* categories */}
        <div className={`border border-gray-400 pl-5 py-3 mt-6 ${filter? "" : "hidden"} sm:block`}> 
          <p className='text-sm font-medium mb-5  '>CATEGORY</p>
          <div className='flex flex-col text-sm font-light text-gray-700 gap-2'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={"Men"} onChange={Togglecategory}/>Men
            </p>
               <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={"Women"} onChange={Togglecategory}/>Women

            </p>
               <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={"Kids"}onChange={Togglecategory} />Kids
            </p>
          </div>
        </div>
        {/* subcategories */}
        <div className={`border border-gray-400 pl-5 py-3 my-5 ${filter? "" : "hidden"} sm:block`}> 
           <p className='font-medium text-sm mb-5'>TYPE</p>
            <div className='flex flex-col text-sm font-light text-gray-700 gap-2'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={"Topwear"} onChange={ToggleSubcategory}/>Topwear
            </p>
               <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={"Bottomwear"} onChange={ToggleSubcategory}/>Bottomwear

            </p>
               <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={"Winterwear"} onChange={ToggleSubcategory}/>Winterwear
            </p>
          </div>
        </div>

      </div>
      {/* the right side*/}
        <div className='flex-1'>
        <div className='flex justify-between text-base mb-4 sm:text-xl'>
          <Title text1={"ALL"} text2={"COLLECTIONS"}/>
         <select onChange={(e)=>setSortType(e.target.value)} className='border border-gray-400'>
          <option value={"relevant"}>Sort by:Relevant</option>
          <option value={"low-high"}>Sort by:Low to High</option>
          <option value={"high-low"}>Sort by:High to Low</option>
         </select>
        </div>
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>

         {
          allCollection.map((item,index)=>(
           <ProductItems key={index} image={item.image} name={item.name} price={item.price} id={item._id}/>
          ))
        }
       </div>
       
      </div>
    
    </div>
  )
}

export default Collection