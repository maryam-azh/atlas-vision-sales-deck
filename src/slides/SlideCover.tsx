import { useEffect } from 'react'
import { animate } from 'animejs'
import atlasLogo from '../assets/Atlas Insights logo.png'

export default function SlideCover() {
  useEffect(() => {
    animate('.cover-logo', {
      opacity: { from: 0, to: 1 },
      translateY: { from: -20, to: 0 },
      duration: 700,
      ease: 'outExpo',
    })
    animate('.cover-title', {
      opacity: { from: 0, to: 1 },
      translateY: { from: 40, to: 0 },
      duration: 900,
      delay: 200,
      ease: 'outExpo',
    })
    animate('.cover-rule', {
      opacity: { from: 0, to: 1 },
      scaleX: { from: 0, to: 1 },
      duration: 600,
      delay: 600,
      ease: 'outExpo',
    })
    animate('.cover-meta', {
      opacity: { from: 0, to: 1 },
      translateY: { from: 15, to: 0 },
      duration: 600,
      delay: 800,
      ease: 'outExpo',
    })
    animate('.cover-contact', {
      opacity: { from: 0, to: 1 },
      translateY: { from: 10, to: 0 },
      duration: 600,
      delay: 1000,
      ease: 'outExpo',
    })
  }, [])

  return (
    <div className="h-full w-full bg-white flex flex-col items-center justify-center px-16 py-12">

      {/* Logo */}
      <img
        src={atlasLogo}
        alt="Atlas Insights"
        className="cover-logo opacity-0 h-20 lg:h-24 object-contain mb-10"
      />

      {/* Main headline */}
      <h1 className="cover-title opacity-0 text-5xl sm:text-6xl lg:text-7xl font-black text-center leading-tight text-[#081E4C] mb-8">
        INNOVATE<br />WITH CONFIDENCE
      </h1>

      {/* Gold rule */}
      <div
        className="cover-rule origin-center w-48 lg:w-64 h-px mb-8"
        style={{ backgroundColor: '#DAB954' }}
      />

      {/* Prepared for / date */}
      <div className="cover-meta opacity-0 text-center mb-8">
        <p className="text-base lg:text-lg font-body text-gray-700">Prepared for Tomoro</p>
        <p className="text-base lg:text-lg font-body text-gray-700">April 1, 2026</p>
      </div>

      {/* Contact */}
      <p className="cover-contact opacity-0 text-sm lg:text-base font-mono font-bold text-[#081E4C] tracking-wide">
        sales@atlasinsights.ai &nbsp;•&nbsp; www.atlasinsights.ai
      </p>

    </div>
  )
}
