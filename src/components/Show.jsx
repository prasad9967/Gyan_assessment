import React from 'react'
import { IoLocationSharp } from "react-icons/io5";


const Show = ({show}) => {
  return (
    <div className='basis-60 flex-shrink-0' >
        <img src={`https://drive.google.com/thumbnail?id=${show.imgUrl.slice(32,-5)}`} alt='image' className='z-10 lg:h-[320px] h-[270px] w-[300px] rounded img-crop' />
        <div className='z-20 absolute bottom-2 flex flex-wrap justify-around w-[230px] text-gray-300'>
            <p className='text-sm text-gray-50 text-center font-semibold'>{show.eventName}</p>
            <p className='text-sm mt-2 ml-2'>{new Date(show.date).toDateString().substring(3)}</p>
            <div className='flex'><IoLocationSharp className='text-sm mt-2.5'/> <span className='text-[0.8rem]'>{show.cityName}</span></div>
            <p className='text-[0.8rem] lg:mb-1 mb-3'>{show.weather} | {show.distanceKm.slice(0,2) } Km</p>
        </div>
    </div>
  )
}

export default Show
