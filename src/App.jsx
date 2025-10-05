import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Order from './pages/Order'
import Login from './pages/Login'
import Placedorder from './pages/Placedorder'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Search from './components/Search'

  import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div className='px-4 sm:px-[5vw md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar/>
      <Search/>
      <Routes>
        
        <Route path='/' element= {<Home/>} />
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:productId' element= {<Product/>}/>
        <Route path='/order' element= {<Order/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/placeorder' element={<Placedorder/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App