import React from 'react'
import home1 from "../assets/home_page.jpg"
import home2 from "../assets/home2_page.jpg"
import AllProducts from '../components/AllProducts'


function Home() {
  return (
    <div>
      <div>
        <img className='w-full' src={home1} alt="" />
        <AllProducts/>
      </div>
      
  
    </div>
  )
}

export default Home