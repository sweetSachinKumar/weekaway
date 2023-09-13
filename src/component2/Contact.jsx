import React from 'react'
import contacImg from './img/contact.jpg'

const Contact = () => {
  return (
    <div id="contact" className='max-w-[1140px] m-auto px-4 py-16 '>
      <h2 className='text-center text-gray-700'>Send us a message</h2>

      <p  className='text-center text-gray-700 py-2'>We're standing by!</p>
      <div className='grid md:grid-cols-2 '>
        <img src={contacImg} className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px] '  alt="" />
        <form  >
            <div className='  grid  grid-cols-2'>
                <input type="text" placeholder='First Name' className='border m-2 p-2 ' />
                <input className='border m-2 p-2 ' type="text" placeholder='First lastName' />
                <input type="email" placeholder='First Email' className='border m-2 p-2 '/>
                <input type="tel" className='border m-2 p-2 ' placeholder='First Phone' />
                <input type="text" placeholder=' Address' className='border m-2 p-2  col-span-2' />
                <textarea name="" id="" rows="5 " placeholder='comment here' className='border m-2 p-2  col-span-2' ></textarea>
                <button className=' m-2  col-span-2'>Submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Contact