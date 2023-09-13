import React from 'react'
import img1 from './img/activity1.jpg'
import img2 from './img/activity2.jpg'
import img3 from './img/activity3.jpg'
import img4 from './img/gallary2.jpg'
import img5 from './img/gallary4.jpg'
import SlectCard from './SlectCard'
const Select = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4' >
    <SlectCard img1={img2} title="Maloives"/>
    <SlectCard img1={img3} title="Maloives"/>
    <SlectCard  img1={img1} title="Maloives"/>
    <SlectCard img1={img4} title="Maloives"/>
    <SlectCard img1={img5} title="Maloives"/>
    <SlectCard img1={img3} title="Maloives"/>

    </div>
  )
}

export default Select
