import React from 'react'
import { IoLocationSharp } from "react-icons/io5";


const Show = ({show}) => {
  return (
    <div className='basis-60 flex-shrink-0' >
        <img src='./src/assets/demo.jpeg' alt='image' className='z-10 lg:h-[320px] h-[250px] w-[230px] object-cover rounded' />
        <div className='z-20 absolute bottom-2 flex flex-wrap justify-around w-[230px] text-gray-300'>
            <p className='text-sm text-gray-50 text-center font-semibold'>{show.eventName}</p>
            <p className='text-sm mt-2'>{new Date(show.date).toDateString()}</p>
            <div className='flex'><IoLocationSharp className='text-sm mt-2.5'/> <span className='text-[0.8rem]'>{show.cityName}</span></div>
            <p className='text-[0.8rem]'>{show.weather} | {show.distanceKm.slice(0,2) } Km</p>
        </div>
    </div>
  )
}

export default Show
