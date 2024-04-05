import React from 'react'
import { IoLocationSharp } from "react-icons/io5";


const Event = ({event}) => {
  return (
    <div className='basis-80 shrink-0 rounded bg-slate-50 border-[1px] border-bcolor relative' >
      <img src={`https://drive.google.com/thumbnail?id=${event.imgUrl.slice(32,-5)}`} alt='image' className='z-10 h-[250px] w-[320px] object-cover  mx-auto mt-2 rounded img-crop' />
      <div className='absolute lg:bottom-[6.4rem] bottom-[5.8rem] z-10 bg-black bg-opacity-80 text-gray-200 w-[286px] ml-4 rounded-b'>
        <p className='text-[0.75rem] ml-3'>{new Date(event.date).toDateString().substring(3)}</p>
      </div>
      <h1 className='font-semibold text-heading mt-5 ml-3 text-[1rem]'>{event.eventName}</h1>
      <div className='flex justify-between mt-1 ml-3 mb-2 text-subtitle'>
        <div className='flex'><IoLocationSharp className='mr-2'/> <span className='text-sm'>{event.cityName}</span></div>
        <p className='text-sm mr-2'>{event.weather} | {event.distanceKm.slice(0,2)} Km</p>
      </div>
    </div>
  )
}

export default Event
