import React from 'react'
import gallary1 from './img/gallary1.jpg'
import gallary2 from './img/gallary2.jpg'
import gallary3 from './img/gallary3.jpg'
import gallary4 from './img/gallary4.jpg'
import gallary5 from './img/gallary5.jpg'
const Gallary = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto px-4 py-16 '> 
      <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
      <div className='grid sm:grid-cols-5 gap-4 '>
        <div className='sm:col-span-3 col-span-2 row-span-2'>
        <img src={gallary2} className='w-full h-full object-cover' alt="/" />

        </div>
        <div>
            <img src={gallary4} className='w-full h-full object-cover' alt="/" />
        </div>
        <div>
            <img src={gallary3} className='w-full h-full object-cover' alt="/" />
        </div>
        <div>
            <img src={gallary1} className='w-full h-full object-cover' alt="/" />
        </div>
        <div>
            <img src={gallary5} className='w-full h-full object-cover' alt="/" />
        </div>
      </div>
    </div>
  )
}

export default Gallary
