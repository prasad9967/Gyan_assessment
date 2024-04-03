import React, {useState, useEffect} from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Event from './Event';
import _debounce from 'lodash/debounce'


const Events = () => {
 const [events, setEvents] = useState([])
 const [loading, setLoading] = useState(false)
 const [page, setPage] = useState(1)
 const [hasMore, setHasMore] = useState(true)

  useEffect(()=>{
    const fetchEvents = async () => {
      if (loading || !hasMore) return;
      setLoading(true)
      try{
        const response = await fetch(`https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`)
        if(!response.ok)
         throw new Error('Failed to fetch data')
        const data = await response.json()
        setEvents(prevEvents => [...prevEvents, ...data.events])
        setPage(prevPage => prevPage+1)
        if (page > 5)
          setHasMore(false)
      }catch(err){
        console.error('Error fetching data: ', err)
      }
      setLoading(false)
    }

    const handleScroll = _debounce(() => {
      if(window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 200)
       fetchEvents()
    }, 300)

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)

  },[loading, hasMore, page])

  return (
    <div className='lg:ml-[5rem] ml-[3rem]  lg:mt-10 mt-5 lg:text-2xl'>
      <div className='flex text-heading'>
        <p className='font-semibold'>Upcoming Events</p> <FaArrowRightLong className='z-10 mt-[6px] ml-2'/>
        <a href='#' className='underline ml-auto mr-5 text-xl font-semibold'>See all</a>
      </div>
      <div className='flex flex-wrap justify-center gap-6 mt-2'>
        {events.length && (
          events.map((event, idx) => (
            <Event key={idx} event = {event}/>
          ))
        )}
      </div>
      {loading && <div className='text-center font-semibold my-2'>Loading more events... </div>}
      
    </div>
  )
}

export default Events
