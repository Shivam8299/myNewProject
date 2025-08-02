import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiSearch, FiUser, FiShoppingBag } from 'react-icons/fi';

import machki from '../assets/title.webp'


function Navbar() {
  return (
    <div className='flex justify-between px-16 items-center cursor-pointer'>
        <div className='w-32'>
        <img src={machki} alt="" />
        </div>
        <div className='flex gap-6 font-base text-gray-700'>
        <NavLink to={"/"} ></NavLink>
        <NavLink to={"/all"} >Shop All</NavLink>
        <NavLink to={"/earrings"} >Earrings</NavLink>
        <NavLink to={"/necklaces"} >Necklaces</NavLink>
        <NavLink to={"/rings"} >Rings</NavLink>
        <NavLink to={"/sale"} >Closeout</NavLink>
        </div>
        <div className='flex gap-8 text-gray-700'>
          <FiSearch size={24} />
          <FiUser size={24} />
          <FiShoppingBag size={24} />
        </div>
    </div>
  )
}

export default Navbar