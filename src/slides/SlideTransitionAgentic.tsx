import { useEffect } from 'react'
import { animate } from 'animejs'

export default function SlideTransitionAgentic() {
  useEffect(() => {
    animate('.trans-title', {
      opacity: { from: 0, to: 1 },
      translateY: { from: 30, to: 0 },
      duration: 900,
      ease: 'outExpo',
    })
    animate('.trans-rule', {
      opacity: { from: 0, to: 1 },
      scaleX: { from: 0, to: 1 },
      duration: 700,
      delay: 400,
      ease: 'outExpo',
    })
  }, [])

  return (
    <div className="h-full w-full bg-white flex flex-col justify-end px-20 lg:px-28 pb-40">
      <h1 className="trans-title opacity-0 font-black text-[#081E4C] leading-tight text-4xl lg:text-5xl mb-4">
        LET&apos;S SEE AN<br />
        AGENTIC PROJECT<br />
        EXAMPLE
      </h1>
      <div
        className="trans-rule origin-left w-64 lg:w-80 h-[3px]"
        style={{ backgroundColor: '#DAB954' }}
      />
    </div>
  )
}
