import React from 'react'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { MdOutlineTravelExplore } from 'react-icons/md'

const Search = () => {
    return (
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
            {/* left  */}
            <div className='lg:col-span-2 flex flex-col justify-evenly '>

                <div>
                    <h2 className='uppercase'>luxury included vacations for tow people</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit delectus in possimus doloremque tempore harum eum dolorum soluta alias? Aut, repellendus doloremque assumenda id, autem a itaque libero cupiditate, quaerat quae consequatur ducimus! Facere nam alias illum itaque! Fuga, adipisci voluptas. Ratione quia animi provident quo nihil pariatur, alias in aliquam id sint molestiae praesentium distinctio ab. Hic officia inventore aspernatur, quo rerum omnis corporis. Dolores labore repellendus perferendis nam, delectus voluptatibus laboriosam obcaecati et porro dolorum officia suscipit fugiat inventore doloremque aspernatur a iusto accusantium error.</p>
                </div>
          
          
            <div className='grid sm:grid-cols-2 gap-8 py-8 md:py-4'>
                <div className='flex   flex-col lg:flex-row items-center text-center  w-full'>
                    <button className="btn" >
                        <RiCustomerService2Fill size={50}/>
                    </button>
                    <div>
                        <h3 className='py-2'>Leading Service</h3>
                        <p className='py-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate.</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center text-center w-full'>
                    <button className="btn" >
                        <MdOutlineTravelExplore size={50}/>
                    </button>
                    <div>
                        <h3 className='py-2'>Leading Service</h3>
                        <p className='py-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate.</p>
                    </div>
                </div>


            </div>
            </div>
              {/* right  */}
            <div>
                <div className='uppercase text-center pt-4 border-2'>
                    <p>Get an additional 10% off</p>
                    <p className='py-4'>12 hours left</p>
                    <button className= ' hover:scale-[1.02] transition-all duration-300   bg-gray-900 text-white w-full py-2'>Book Now and Save </button>
                </div>
                <form className='w-full'>
                    <div className='flex my-2 flex-col'>
                        <label htmlFor="Destination">Destination</label>
                        <select className='border rounded-md p-2' name="" id="Destination">
                            <option value="">Grande Antigua</option>
                            <option value="">Key West </option>
                            <option value="">Maldives</option>
                            <option value="">Cozumel</option>
                        </select>
                    </div>
                    <div className='flex my-2 flex-col' >
                        <label htmlFor="in">Check in </label>
                        <input className='border rounded-md p-2' type="date" name="" id="in" />
                    </div>
                    <div className='flex my-2 flex-col' >
                        <label htmlFor="out">Check out </label>
                        <input className='border rounded-md p-2' type="date" name="" id="out" />
                    </div>
                     
                        <button className="btn w-full ">Rates & Availibility</button>
                </form>
            </div>
        </div>
    )
}

export default Search
