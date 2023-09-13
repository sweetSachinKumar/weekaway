import React from 'react'
import TopBar from './component/TopBar'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Activity from './component/Activity'
import Booking from './component/Booking'
import Gallary from './component/Gallary'
import Contact from './component/Contact'
import Footer from './component/Footer'

const App = () => {
  return (
    <div>
      <TopBar/>
      <Navbar/>
      <Hero/>
      <Activity/>
      <Booking/>
      <Gallary/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
