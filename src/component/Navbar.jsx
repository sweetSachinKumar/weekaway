import React, { useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { GrClose, GrMenu } from 'react-icons/gr'
import { FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaInstagram } from 'react-icons/fa'


const Navbar = () => {
    const [nav, setNav] = useState(false)
 

    return (
        <div className='flex justify-between  z-50 items-center px-4 h-20 relative'>
            <div onClick={()=>setNav(false)}>
                <h1>BEACHS.</h1>
            </div>



            <div className={`absolute top-full w-full md:static   flex  flex-col ${!nav? "-left-full": "left-0"} transition-all duration-200 ease-in-out bg-white/80 `}>

                <ul className=' md:flex items-center justify-center  '>
              {  ["Home","Destinations","Traval","View", "Book"].map(navOp => {
                return <li key={navOp}>
                             <button  className=' md:hover:border-b-slate-300 text-left  w-full transition '> {navOp} </button>
                      </li> 
              })
            }  
                </ul>
                <div className=' flex md:hidden  flex-col'>
                    <button className='my-6 btn'>Search</button>
                    <button className='btn'>Account</button>
                </div>
                <div className='flex justify-around my-6 md:hidden '>
                    <FaFacebook className='icon'   />
                    <FaTwitter  className='icon' />
                    <FaYoutube   className='icon'/>
                    <FaPinterest  className='icon' />
                    <FaInstagram  className='icon'/>
                </div>
            </div>

            <div className='hidden md:flex'>
                <BiSearch className='mr-6 ' size={20} />
                <BsPerson size={20} />
            </div>

            <div className='md:hidden'>
                {
                    nav? <GrClose className='transition-all duration-200 ease-in-out' size={20} onClick={()=>setNav(!nav)} /> : <GrMenu className='transition-all duration-200 ease-in-out' onClick={()=>setNav(!nav)} size={20}/> 
                }
            </div>

        </div>
    )
}

export default Navbar
