
import { createContext,useEffect,useState} from 'react'
import { products } from '../assets/frontend_assets/assets'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export const ShopContext = createContext()
export default function ShopContextprovider(props) {

const currency = `#`;
const deliveryFee = 10
const [search, setSearch] = useState("")
const [showSearch, setShowSearch] = useState(false)
const [cartItems, setCartItems]= useState({})
const navigate = useNavigate()

const addtocart = async (itemId,size)=>{
  if(!size){
    toast.error("select product size")
    return;
  }
let cartData = structuredClone(cartItems)
if(cartData[itemId]){
  if(cartData[itemId][size]){
    cartData[itemId][size] += 1
  }
  else{
   cartData[itemId][size] = 1
  }
 
}
 else{
      cartData[itemId]={}
      cartData[itemId][size]=1
  }
  setCartItems(cartData)
}

  const getCount =()=>{
    let totalCount = 0;
    for(const items in cartItems){
      for(const item in cartItems[items]){
       try {
        if(cartItems[items][item] > 0){
           totalCount += cartItems[items][item]
        }
       } catch (error) {
        
       }
      }
        
    }
     return totalCount;
    
  }
   const getCartAmount = () =>{
    let totalAmount = 0;
    for(const items in cartItems){
     let cartInfo = products.find((product) =>product._id===items)
     for(const item in cartItems[items]){
  try {
        if(cartItems[items][item]> 0){
        totalAmount += cartInfo.price * cartItems[items][item]
      } 
  } catch (error) {
    
  }
     }
    }
       
        return totalAmount;
   }
  const updatequantity =(itemId,size,quantity)=>{
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData)
  }
    const value = {
        products,currency,deliveryFee,search,getCount,setSearch,
        showSearch,setShowSearch, navigate,cartItems,addtocart,updatequantity,getCartAmount,
    }
  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}
