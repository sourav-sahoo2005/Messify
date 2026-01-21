import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import { Routes,Route } from 'react-router'
import Faq from './Components/Faq/Faq'
import About from './Components/AboutUs/About'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Hero/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/faq' element = {<Faq/>}/>

      </Routes >
    </>
  )
}

export default App
