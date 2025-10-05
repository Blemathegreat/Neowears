import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContextprovider'
import { assets } from '../assets/frontend_assets/assets'
import RelatedProduct from '../components/RelatedProduct'

function Product() {
  const {productId}= useParams()
  const {products,currency,addtocart } = useContext(ShopContext)
  const [image,setImage]=useState("")
  const [productData, setProductData] = useState("")
  const [size, setSize] = useState("")
  const productinfo = async ()=>{
    products.map(item=>{
      if(productId==item._id){
        setProductData(item)
        console.log(productData)
        setImage(item.image[0])
        return null
      }
    })
  }
  useEffect(()=>{
productinfo()
  },[productId,products])
  return productData? (
    <div className='border-t-2 pt-10 border border-gray-100 transition-opacity-100 ease-in duration-500 opacity-100 mt-5'>
      {/*product data*/}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/*product images*/}
        <div className='flex-1 gap-3 flex flex-col-reverse sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.5%] w-full'>
         {
          productData.image.map((item,index)=>(
            <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 cursor-pointer flex-shrink-0'/>

          ))
         }
          </div>
          <div className='w-full sm:w-[80%]'>
            < img className='w-full h-auto' src={image}/>
          </div>
          </div>
        {/* product info*/}
         <div className='flex-1'>
        <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
        <div className='items-center flex gap-1 mt-2'>
          <img className='w-3.5' src={assets.star_icon} alt="" />
          <img className='w-3.5' src={assets.star_icon} alt="" />
          <img className='w-3.5' src={assets.star_icon} alt="" />
          <img className='w-3.5' src={assets.star_icon} alt="" />
          <img className='w-3.5' src={assets.star_dull_icon} alt="" />
          <p className='pl-2'>(122)</p>
        </div>
        <div>
          <p className='text-3xl font-medium mt-5'>{currency}{productData.price}</p>
          <p className='mt-5 md:w-4/5 text-gray-500'>{productData.description}</p>
          <div className='flex gap-4 my-8 flex-col'>
            <p>Select size</p>
            <div className='flex gap-2'>
              {
                productData.sizes.map((item,index) =>(
<button 
  onClick={() => setSize(item)} 
  className={`border border-gray-100 px-4 py-2 bg-gray-100 ${item == size ? 'border-orange-500' : ''}`}  
  key={index}
>
  {item}
</button>
                ))
              }
            </div>

          </div>
                        
            <button onClick={()=>addtocart(productData._id,size)} className='bg-black text-white py-8 px-3 w-1/2 text-sm  active:bg-gray-700'>ADD TO CART</button>
            <hr className='mt-8 sm:4/5 text-gray-400'/>
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Original product</p>
              <p> Cash on delivery is available on this product</p>
              <p>Easy return and exchange policy within 7 days</p>
            </div>
          
        {/*description and review*/}
             
        </div>
          </div>
          
        </div>
         <div className='mt-20'>
                <div className='flex gap-2'>
                  <p className='border px-5 border-gray-100 text-sm py-3'>Description</p>
                  <p className='border py-3 px-5  border-gray-100 test-sm'>Reviews (122)</p>
                </div>
                <div className='flex flex-col gap-4 border border-gray-100 px-6 py-6 text-sm text-gray-500'>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quod accusamus minima quis harum reprehenderit laboriosam itaque mollitia, odit obcaecati dignissimos ratione voluptate quam eaque at ab veritatis magnam commodi.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi labore nam nemo error quibusdam hic tempore est praesentium impedit earum. Accusamus, laborum inventore. Quibusdam et non libero quod pariatur amet?</p>

                </div>
              </div>
              {/*dspaly related product*/}
              <div><RelatedProduct category={productData.category} subCategory={productData.subCategory}/></div>
        </div>
  ) : <div className='opacity-0'></div>
}

export default Product