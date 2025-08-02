import React from 'react'
import assets from "../assets/home_page.jpg"

function Home() {
  return (
    <div>
      <img className='w-full' src={assets} alt="" />
      <h1 className="font-playfair text-3xl">Trending Now</h1>
    </div>
  )
}

export default Home