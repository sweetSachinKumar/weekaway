import React from 'react'

const SlectCard = (props) => {
  return (
    <div className="relative">
        <img src={props.img1} className='w-full h-full object-cover' alt="/" />
        <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full '>
            <p className='absolute bottom-4 left-4 text-white text-3xl font-bold '>{props.title }</p>
         </div>
     </div>
  )
}

export default SlectCard
