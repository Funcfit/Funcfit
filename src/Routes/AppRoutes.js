import React from 'react'
import { LandingScreen, LoginScreen, RegisterScreen, HomeScreen, ExerciseScreen } from "../Components";
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingScreen />}/>
            <Route path="/welcome" element={<LandingScreen />}/>
            <Route path="/login" element={<LoginScreen />}/>
            <Route path="/register" element={<RegisterScreen />}/>
            <Route path="/home" element={<HomeScreen />}/>
            <Route path="/exercise" element={<ExerciseScreen />}/>

        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes