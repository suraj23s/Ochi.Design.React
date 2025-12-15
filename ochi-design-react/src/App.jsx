import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marque from './components/Marque'
import About from './components/About'

function App() {

  return (
    <div className='min-h-screen w-full text-white bg-zinc-900'>
    <Navbar />
    <Landing />
    <Marque />
    <About />
    </div>
  )
}

export default App
