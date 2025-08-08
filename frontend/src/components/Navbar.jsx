import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiSearch, FiUser, FiShoppingBag } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import machki from '../assets/title.webp'


function Navbar() {
  const navigate = useNavigate()
  return (
    <div className='flex justify-between px-2 md:px-4 lg:px-8 items-center bg-white cursor-pointer'>
        <div className='w-32'>
        <img src={machki} alt="" />
        </div>
        <div className='hidden md:flex gap-10 text-base font-serif text-amber-800'>
        <NavLink to={"/"} ></NavLink>
        <NavLink to={"/all"} >Shop All</NavLink>
        <NavLink to={"/earrings"} >Earrings</NavLink>
        <NavLink to={"/necklaces"} >Necklaces</NavLink>
        <NavLink to={"/rings"} >Rings</NavLink>
        <NavLink to={"/sale"} >Closeout</NavLink>
        </div>
        <div className='flex gap-8 text-gray-700'>
          <FiSearch size={24} />
          <FiUser onClick={()=>navigate("/login")} size={24} />
          <FiShoppingBag size={24} />
        </div>
    </div>
  )
}

export default Navbar