import React from 'react'
import homeVedio from './img/myv.mp4'
import { AiOutlineSearch } from 'react-icons/ai'

const Banner = () => {
  return (
    <div className='w-full h-[75vh] relative'>
      <video className='h-full w-full object-cover object-right  '  src={homeVedio} autoPlay loop muted/>

      <div className="absolute top-0 left-0 bg-gray-900/50 w-full h-full ">
        <div className='flex items-center justify-center flex-col h-full w-full  '>
            <h1 className='text-white'>First Class Travel </h1>
            <h2 className='text-white py-4'>Top 1% Locations Worldwide</h2>
            <form className='flex border justify-between max-w-[700px] w-full items-center rounded-md bg-gray-100/90'>
                 
                <input type="text" className='px-2   text-[Poppins] bg-transparent  w-full   h-full focus:outline-none bg-red-200 pr-[20%]'  placeholder='Search Destinations'  />

              
                    <button className='btn'> <AiOutlineSearch className="icon text-white" /> </button>
           
            </form>
        </div>
     </div>
    </div>
  )
}

export default Banner
