import React from 'react'
import actImg1 from './img/activity1.jpg'
import actImg2 from './img/activity2.jpg'
import actImg3 from './img/activity3.jpg'
const Activity = () => {
  return (
    <div   className='max-w-[1140px] m-auto w-full md:flex  -mt-20 '>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-white font-bold '>Resort</h3>
            <img src={actImg3} className='w-full h-full object-cover border-4 border-white  shadow-lg shadow-indigo-400/10' alt="img" />
        </div>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black/10 p-4 text-2xl text-white font-bold '>Resort</h3>
            <img src={actImg2} className='w-full h-full object-cover border-4 border-white  shadow-lg shadow-indigo-400/10' alt="img" />
        </div>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-white font-bold '>Resort</h3>
            <img src={actImg1} className='w-full h-full object-cover border-4 border-white  shadow-lg shadow-indigo-400/20' alt="img" />
        </div>
    </div>
  )
}

export default Activity
