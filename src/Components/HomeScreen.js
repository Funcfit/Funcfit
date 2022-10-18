import React from 'react'
import "../StyleSheet/homeScreen.css"

import { Sidebar, Navbar } from '../Components'


const HomeScreen = () => {
  return (
    <div className='flex flex-row'>
      <Sidebar/>
      <Navbar/>
    </div>
  )
}

export default HomeScreen