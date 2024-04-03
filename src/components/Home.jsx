import React from 'react'

const Home = () => {
  return (
    <div className='m-2 mt-4 mb-0 relative'>
      <img src="./src/assets/Banner.svg" alt="Banner" />
        <div className='absolute lg:top-[10rem] top-[1rem] text-gray-50'>
            <h1 className='lg:text-[3rem] text-[1rem] font-semibold w-2/3 mx-auto'>Discover Exciting Events Happening Near You - Stay Tuned for Updates!</h1>
            <p className='w-4/5 mx-auto text-[0.6rem] lg:text-xl mt-2'>Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu and litora torquent per conubia nostra, per</p>
        </div>
    </div>
  )
}

export default Home
