import React from 'react'
import heroImg from './img/hero.jpg'
const Hero = () => {
  return (
    <div id='home'>
      <img src={heroImg} alt="" className='w-full    h-[80vh] object-cover' />
        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[30%] w-full  max-w-[600px]  flex flex-col text-white p-4 bg-black/30 sm:bg-black/10 rounded-md'>
                <h1 className='sm:text-4xl text-2xl   font-bold'>Find Your Special Trip </h1>
                <h2 className='sm:text-4xl py-4 text-2xl italic'>With Weekaway</h2>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repellat autem, consectetur, totam praesentium magnam, sequi fugit rerum at pariatur officiis! Corporis cupiditate tempore, aliquid voluptatem similique soluta maxime sed nobis commodi libero aspernatur!</p>
            </div>
        </div>
    </div>
  )
}

export default Hero
