import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className='lg:flex lg:ml-3 mt-2'>
      <div className='flex text-subtitle ml-3'>
        <IoLocationSharp className='mt-1 mr-1' />
        <span>Mumbai, India</span>
        <FaAngleRight className='mt-[6px]'/>
      </div>
      <ul className='navbar flex gap-x-5 lg:gap-x-10 lg:ml-[12rem] text-subtitle ml-4 lg:mt-0 mt-3 overflow-x-auto'>
        <li><a href='#'>LiveShows</a></li>
        <li><a href='#'>Streams</a></li>
        <li><a href='#'>Movies</a></li>
        <li><a href='#'>Plays</a></li>
        <li><a href='#'>Events</a></li>
        <li><a href='#'>Sports</a></li>
        <li><a href='#'>Activities</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
