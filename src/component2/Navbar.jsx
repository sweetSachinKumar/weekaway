import React, { useState } from 'react'
import {BsChatSquareDots} from 'react-icons/bs'
import {FaFacebookF, FaTwitter, FaGooglePlusG,FaBars, FaInstagram} from 'react-icons/fa'


const Navbar= () => {
const navOptions = ["Gallery", "Deals", "Contact"]

const [nav, setNav] = useState(false)

const handleNav = () => {
  setNav(!nav)
}


  return (
    <div className='bg-gray-700/80 min-h-12 items-center justify-between w-full  flex text-white absolute z-10 py-4 sm:py-0 px-4'>
      <div className={`overflow-y-hidden md:block ease-in duration-300 absolute top-0 ${!nav? "-left-full": "left-0"}  text-gray-300 h-screen sm:h-auto bg-black sm:bg-transparent w-full sm:w-auto sm:static`}>
      <ul className='sm:flex h-full w-full sm:w-auto sm:h-auto  text-center pt-12 sm:pt-0 '> 
        <li  onClick={handleNav} className='text-xl sm:text-sm py-4 hover:bg-[#8a7e7e57] sm:p-4'>
          <a href="#">Home</a>
        </li>
        {
          navOptions.map((navOption,i) => {
            return(
              <li  onClick={handleNav} key={i} className='text-xl hover:bg-[#8a7e7e57] py-4 sm:text-sm sm:p-4'>
              <a href={'#'+navOption.toLowerCase()}>{navOption}</a>
            </li>
            )
          } )
        }
      </ul>
      </div>
      <div className='flex justify-between'>
  
        <FaFacebookF className='mx-4' />
        <FaTwitter className='mx-4' />
        <FaGooglePlusG className='mx-4' />
        <FaInstagram className='mx-4' />
      </div>
      {/* hamburger icons  */}
      <div onClick={handleNav} className='sm:hidden z-50 '><FaBars size={20}  className='mr-4 cursor-pointer ' /></div>
      {/* mobile menu  */}
      {/* <div>
        <ul>
          <li></li>
        </ul>
      </div> */}
    </div>
  )
}

export default Navbar
