import React from 'react' ;
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai'
import {BsChatSquareDots} from 'react-icons/bs'
const TopBar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-2 '>
      <div className='flex items-center'>
      <BsChatSquareDots size={30} className='text-[var(--primary-dark)] mr-2' />
      <h1 className='text-xl font-bold text-gray-700'>WEEKAWAY</h1>
      </div>

      <div className='flex'>
        <div className=' hidden md:flex px-6 items-center '>
          <AiOutlineClockCircle size={20} className='text-[var(--primary-dark)] mr-2'  />
          <p className='text-gray-700 text-sm'>9PM - 5AM</p>
        </div>
        <div className=' hidden md:flex px-6 items-center'>
          <AiFillPhone size={20} className='text-[var(--primary-dark)] mr-2' />
          <p className='text-gray-700 text-sm'>1-999-3434-343</p>
        </div>
        <button>Get a Free Quote</button>
      </div>
        
      
    </div>
  )
}

export default TopBar
