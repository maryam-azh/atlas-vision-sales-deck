import { useEffect } from 'react'
import { animate } from 'animejs'
import atlasLogo from '../assets/Atlas Insights logo.png'

export default function SlideThankYou() {
  useEffect(() => {
    animate('.ty-heading', {
      opacity: { from: 0, to: 1 },
      translateY: { from: 40, to: 0 },
      duration: 900,
      ease: 'outExpo',
    })
    animate('.ty-rule', {
      opacity: { from: 0, to: 1 },
      scaleX: { from: 0, to: 1 },
      duration: 700,
      delay: 500,
      ease: 'outExpo',
    })
    animate('.ty-sub', {
      opacity: { from: 0, to: 1 },
      translateY: { from: 20, to: 0 },
      duration: 700,
      delay: 700,
      ease: 'outExpo',
    })
    animate('.ty-logo', {
      opacity: { from: 0, to: 1 },
      translateY: { from: 20, to: 0 },
      duration: 700,
      delay: 950,
      ease: 'outExpo',
    })
  }, [])

  return (
    <div className="h-full w-full bg-white flex flex-col items-center justify-center gap-6 px-12">

      {/* THANK YOU */}
      <h1
        className="ty-heading opacity-0 font-black leading-none text-center"
        style={{ color: '#081E4C', fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}
      >
        THANK YOU
      </h1>

      {/* Gold rule */}
      <div
        className="ty-rule origin-center w-80 lg:w-[28rem] h-[3px]"
        style={{ backgroundColor: '#DAB954' }}
      />

      {/* Subtitle */}
      <p
        className="ty-sub opacity-0 font-black tracking-widest text-center text-base lg:text-lg"
        style={{ color: '#081E4C' }}
      >
        AND LET'S BUILD &amp; SCALE<br />AI WITH CONFIDENCE
      </p>

      {/* Atlas Insights logo */}
      <div className="ty-logo opacity-0 mt-4">
        <img src={atlasLogo} alt="Atlas Insights" className="h-20 lg:h-24 w-auto" />
      </div>

    </div>
  )
}
