import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import LatestColllection from '../components/LatestColllection'
import Bestseller from '../components/Bestseller'
import Policy from '../components/Policy'
import Newsletter from '../components/Newsletter'

function Home() {
  return (
    <div>
      <Hero/>
      <LatestColllection/>
      <Bestseller/>
      <Policy/>
      <Newsletter/>
    </div>
  )
}

export default Home