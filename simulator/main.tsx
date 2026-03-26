import React from 'react'
import { createRoot } from 'react-dom/client'
import Slide1_Hero from '../src/slides/Slide1_Hero'
import '../src/index.css'

function App(){
  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center p-6">
      <div className="w-full max-w-4xl">
        <Slide1_Hero />
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
