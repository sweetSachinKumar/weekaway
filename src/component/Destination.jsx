import React from 'react'
import ac1 from './img/gallary1.jpg'
import ac2 from './img/gallary2.jpg'
import ac3 from './img/gallary3.jpg'
import ac4 from './img/gallary4.jpg'
import ac5 from './img/gallary5.jpg'

const Destination = () => {
  return (
    <div  className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
      <h1>All-Inclusive Resorts</h1>
      <p className='py-4'>On the Caribbean's Best Beaches</p>
      <div className='grid grid-rows-none md:grid-cols-4 py-4 gap-2 md:gap-4'>
        <img src={ac1} className='hover:scale-[1.02] transition-all duration-300 w-full h-full object-cover col-span-2 row-span-2' alt="/" />
        <img src={ac2} className='hover:scale-[1.02] transition-all duration-300 w-full h-full object-cover' alt="/" />
        <img src={ac3} className='hover:scale-[1.02] transition-all duration-300 w-full h-full object-cover' alt="/" />
        <img src={ac5} className='hover:scale-[1.02] transition-all duration-300 w-full h-full object-cover' alt="/" />
        <img src={ac4} className='hover:scale-[1.02] transition-all duration-300 w-full h-full object-cover' alt="/" />

      </div>
    </div>
  )
}

export default Destination
