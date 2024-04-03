import React from 'react'
import { IoReorderThreeSharp } from "react-icons/io5";
import { SlMagnifier } from "react-icons/sl";
import { FaHeart } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

const Header = () => {
  return (
    <div className='flex mt-0.5'>
      <div className='p-2 lg:ml-6 ml-2 text-logo font-semibold text-xl cursor-pointer'>BookUsNow</div>
      <div className='ml-[11rem] p-2 rounded bg-gray-800 text-gray-50 lg:flex  hidden'><IoReorderThreeSharp className='mr-1 size-6'/>Categories</div>
      <div className='ml-4 w-1/3 flex'><input type='text' placeholder='DJI Phantom' className='w-full border px-2 border-bcolor rounded outline-none hidden lg:block'/>
      <SlMagnifier className='size-5  mt-3 ml-[8rem] lg:-ml-9 text-subtitle'/>
      </div>
      <FaHeart className='size-5 mt-3 ml-3 lg:hidden text-subtitle'/>
      <div className='ml-6 hidden lg:flex p-2 text-subtitle'><FaHeart className='size-5 mt-1 mr-2'/>  Favorites</div>
      <button className='ml-6 text-subtitle border border-bcolor rounded px-2 lg:block hidden'>Sign In</button>
      <IoMdPerson className='size-5 text-subtitle mt-2.5 ml-3 lg:hidden' />
    </div>
  )
}

export default Header
