import { useEffect } from 'react'
import { animate } from 'animejs'
import maryamPhoto from '../assets/maryam.png'
import nihonPhoto from '../assets/nihon-2024.png'

export default function SlideAboutUs() {
  useEffect(() => {
    animate('.about-left', {
      opacity: { from: 0, to: 1 },
      translateY: { from: 30, to: 0 },
      duration: 800,
      ease: 'outExpo',
    })
    animate('.about-person-1', {
      opacity: { from: 0, to: 1 },
      translateY: { from: 30, to: 0 },
      duration: 700,
      delay: 300,
      ease: 'outExpo',
    })
    animate('.about-person-2', {
      opacity: { from: 0, to: 1 },
      translateY: { from: 30, to: 0 },
      duration: 700,
      delay: 480,
      ease: 'outExpo',
    })
  }, [])

  return (
    <div className="h-full w-full bg-white flex items-center justify-center px-14 lg:px-20">
      <div className="w-full max-w-5xl flex flex-row items-center gap-16 lg:gap-24">

        {/* Left: heading + tagline + rule */}
        <div className="about-left opacity-0 w-[36%] shrink-0">
          <h1 className="text-4xl lg:text-5xl font-black text-[#081E4C] leading-tight mb-4">
            ABOUT US
          </h1>
          <p className="text-lg lg:text-xl font-black text-[#081E4C] leading-snug mb-5">
            We care about your success in planning for and executing your AI projects.
          </p>
          <div className="w-16 h-1 rounded-full" style={{ backgroundColor: '#DAB954' }} />
        </div>

        {/* Right: two person cards */}
        <div className="flex-1 flex flex-row items-start justify-center gap-12 lg:gap-16">

          {/* Person 1 — Maryam */}
          <div className="about-person-1 opacity-0 flex flex-col items-center text-center gap-3">
            <div
              className="w-36 h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden border-4 shrink-0 relative"
              style={{ borderColor: '#081E4C' }}
            >
              <img
                src={maryamPhoto}
                alt="Maryam Azh"
                className="absolute w-[150%] h-[150%] object-cover"
                style={{ top: '-1%', left: '-1%' }}
              />
            </div>
            <div>
              <p className="text-sm lg:text-base font-black text-[#081E4C]">Maryam Azh, PhD</p>
              <p className="text-sm lg:text-base font-body text-gray-600">AI Strategy</p>
            </div>
          </div>

          {/* Person 2 — Co-Founder */}
          <div className="about-person-2 opacity-0 flex flex-col items-center text-center gap-3">
            <div
              className="w-36 h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden border-4 shrink-0"
              style={{ borderColor: '#081E4C' }}
            >
              <img
                src={nihonPhoto}
                alt="Co-Founder"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm lg:text-base font-black text-[#081E4C]">Co-Founder, PhD</p>
              <p className="text-sm lg:text-base font-body text-gray-600">Enterprise Data &amp; AI</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
