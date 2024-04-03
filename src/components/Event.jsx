import React from 'react'
import { IoLocationSharp } from "react-icons/io5";


const Event = ({event}) => {
  return (
    <div className='basis-80 shrink-0 rounded bg-slate-50 border-[1px] border-bcolor relative' >
      <img src='./src/assets/demo.jpeg' alt='image' className='z-10 h-[200px] w-[300px] object-cover  mx-auto mt-2 rounded' />
      <div className='absolute bottom-[5.4rem] z-10 bg-black bg-opacity-10 text-subtitle w-[300px] ml-2 rounded-b'>
        <p className='text-[0.75rem] ml-3'>{new Date(event.date).toDateString()}</p>
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
