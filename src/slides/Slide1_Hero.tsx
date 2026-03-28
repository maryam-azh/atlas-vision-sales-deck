import { useEffect, useRef } from 'react'
import { animate } from 'animejs'
import introMovie from '../assets/intro-movie.mp4'

export default function Slide1_Hero() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const titleEl = document.querySelector('.hero-title')
    const subtitleEl = document.querySelector('.hero-subtitle')

    if (titleEl) {
      animate(titleEl, {
        translateY: { from: 50, to: 0 },
        opacity: { from: 0, to: 1 },
        duration: 1000,
        ease: 'outExpo',
      })
    }

    if (subtitleEl) {
      animate(subtitleEl, {
        translateY: { from: 30, to: 0 },
        opacity: { from: 0, to: 1 },
        duration: 800,
        delay: 300,
        ease: 'outExpo',
      })
    }
  }, [])

  return (
    <div ref={rootRef} className="h-full w-full bg-white relative overflow-y-auto">
      {/* Background texture - Subtle square grid pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(0,0,0,0.08) 50px, rgba(0,0,0,0.08) 51px)',
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(0,0,0,0.08) 50px, rgba(0,0,0,0.08) 51px)',
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 p-6 md:p-12 lg:p-16">
        {/* Header */}
        <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 opacity-0" data-testid="hero-title">
          ATLAS VISION
        </h1>
        <p className="hero-subtitle text-lg sm:text-xl lg:text-2xl font-body mb-6 sm:mb-8 opacity-0" data-testid="hero-subtitle">
          AI-Powered Robotics for Automotive Pre-Delivery Inspection
        </p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Left Card - Text Content */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
            <h2 className="text-xl sm:text-xl lg:text-2xl font-black mb-4 sm:mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-black rounded-full"></span>
              OUR MISSION
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-body leading-relaxed mb-6">
              To revolutionize quality control with AI inspection technology
            </p>
            <div className="mt-4 p-4 sm:p-6 bg-black text-white rounded-xl">
              <p className=" leading-relaxed text-base sm:text-lg lg:text-xl">
                Autonomous intelligent agents that identify, categorize, and process damages and defects across the automotive supply chain
              </p>
            </div>
          </div>

          {/* Right Card - Product Video */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-4 md:p-6 flex items-center justify-center min-h-[300px]">
            <div className="w-full h-full rounded-xl overflow-hidden bg-primary-blue relative">
              <video
                src={introMovie}
                className="w-full h-full object-cover"
                muted
                autoPlay
                loop
                playsInline
                data-testid="hero-video"
              />
              {/* Semi-transparent dusty overlay */}
              <div className="absolute inset-0 bg-gray-500/20 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}