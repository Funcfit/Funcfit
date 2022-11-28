import React from 'react'

import { Sidebar, Navbar, Calendar } from '../components'


const CalendarSreen = () => {
  return (
    <div>
      <div className='absolute right-0 left-80'>
        <Calendar/>
      </div>
      <div className='flex flex-row'>
        <div>
          <Sidebar/>

        </div>
        <Navbar/>
      </div>

      
    </div>


  )
}

export default CalendarSreen