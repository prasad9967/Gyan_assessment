import React, { useState, useEffect } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Show from './Show';
import Loader from './Loader';


const Shows = () => {
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    const fetchData = async () => {
      try{
       const response =  await fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco')
       if (!response.ok)
        throw new Error('failed in fetching data')
       const data = await response.json()
       setShows(data.events)
       setLoading(false) 
      }catch(err){
        console.error(err)
        setLoading(false)
      }
    }
    fetchData()
  },[])

  

  return (
    
    <div className='lg:-mt-[11rem] -mt-[5rem] lg:ml-[6rem] ml-[3rem] text-gray-50 lg:text-3xl font-semibold'>
        <div className='flex'>
            <p className='z-10'>Recommended shows</p> <FaArrowRightLong className='z-10 mt-[6px] ml-2'/>
            <a href='#' className='text-gray-50 z-10 text-lg underline ml-auto mr-5 font-semibold'>See all</a>
        </div>
        <div className='flex flex-auto gap-8 mt-2 overflow-x-auto  relative contain'>
        {loading && <Loader />}
          {!loading && shows.length&&(
            shows.map((show, idx) => (
              <Show key={idx} show = {show} />
            ))
          )}
           
        </div>
    </div>
  
  )
}

export default Shows
