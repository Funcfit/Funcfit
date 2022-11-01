import React,{useState}from 'react'
import "../StyleSheet/homeScreen.css"

import { Sidebar, Navbar } from '../Components'
import SearchBar from "../Components/SearchBar"
import MainList from "../Components/MainList"
import unsplash from "../api/unsplash"


  
const ExerciseScreen = () => {
    const [workoutImages,setWorkoutImages]=useState([])
  
    const onSearchSubmit=async (searchTerm)=>{
      const response=await unsplash.get('/search/photos',{
        params:{query: searchTerm}
    })
  
    setWorkoutImages(response.data.results)
  
    console.log("resp",response.data.results)
}
  return (
    <div className='flex flex-row'>
        <div>
            <Sidebar/>
        </div>
      <div className='flex flex-col'>
        <Navbar/>
        <div className="h-screen bg-gray-100 ">
      <section className="flex-row justify-center align-middle ml-20 mr-20  ">
        <SearchBar onSubmit={onSearchSubmit}/>
      </section>
      <section className='p-20 grid sm:grid-cols-3  md:grid-cols-6 gap-6'>
        <MainList workoutImages={workoutImages} />

      </section>
   
    </div>
        

      </div>

    </div>
  )
}

export default ExerciseScreen