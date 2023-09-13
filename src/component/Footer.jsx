import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'> 

        <div className='sm:flex text-center justify-between items-center'>
            <h1>BEACHES.</h1>    
            <div className='flex justify-around my-6   sm:w-[200px] '>
                    <FaFacebook className='icon'   />
                    <FaTwitter  className='icon' />
                    <FaYoutube   className='icon'/>
                    <FaPinterest  className='icon' />
                    <FaInstagram  className='icon'/>
            </div>
        </div>

        <div className=' flex justify-between'>
            <ul className='lg:flex'>
                {
                     ["About","Partnerships","Newsroom","Advertising" ].map(navOp => {
                        return <li className='p-4' key={navOp}>
                         {navOp}  
                 </li>
                     })
                }
                
            </ul>

            <ul className='lg:flex '>
              {  ["Home","Destinations","Traval","View", "Book"].map(navOp => {
                return <li className='p-4' key={navOp}>
                             {navOp} 
                      </li> 
              })
            }  
                </ul>
        </div>


      </div>
    </div>
  )
}

export default Footer
