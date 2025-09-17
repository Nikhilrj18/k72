import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import Agence from './pages/Agence'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Navbar from './Components/Navigation/Navbar'
import FullScreenNav from './Components/Navigation/FullScreenNav'

const App = () => {

  return (
<div >
  <Navbar />
  <FullScreenNav />
  <Routes >
 <Route path='/' element={<Home />} />
 <Route path='/Agence' element={<Agence />} />
 <Route path='/Projects' element={<Project />} />
    </Routes>
</div>
  )
}

export default App