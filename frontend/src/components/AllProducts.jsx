import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'


function AllProducts() {
    const {products,baseUrl} = useContext(AppContext)
    console.log(products)
  return (
    <div>
        <p className='text-4xl font-semibold font-serif my-8 '>Trending Now</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 bg-amber-600'>
            {products.map((item)=>(
            <div 
            key={item._id || item.id}
            className='bg-white shadow-2xl p-4'
            >
                <img src={`${baseUrl}/${item.image.replace(/\\/g, '/')}`} alt="" />
                <p className='mb-3'>{item.description}</p>
            </div>
        ))}
        </div>
    </div>
  )
}

export default AllProducts