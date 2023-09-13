import React from 'react'

const Booking = () => {
  return (
    <div  id='deals' className='max-w-[1140px] m-auto w-full p-4'>
      <form  className='lg:flex lg:justify-between w-full items-center'>
        <div className=' flex  flex-col py-2 my-2  '>

            <label htmlFor="booking" > Destination</label>
            <select name="deals" id="booking" className='lg:w-[300px] md:w-full  border rounded-md p-2'>
                <option value="Grade Antigua"> Grade Antigua </option>
                <option value="key West"> key West  </option>
                <option value="Maldives"> Maldives </option>
                <option value="Cozumel"> Cozumel </option>
            </select>
        </div>
        <div className='flex  w-full'>
            <div className=' flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                <label htmlFor="date">Check-In</label>
                <input type="date" className='border rounded-md p-2' name="date" id="date" />
            </div>
            <div className=' flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                <label htmlFor="date2">Check-out</label>
                <input type="date" name="date2" id="date2" className='border rounded-md p-2' />
            </div>
        </div>
        <div  className=' flex flex-col w-full p-2 my-2 '>
            <label htmlFor="search">search</label>
            <button>Rates & Availabilities</button>
        </div>
      </form>
    </div>
  )
}

export default Booking
