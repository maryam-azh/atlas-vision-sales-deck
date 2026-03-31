import { useEffect } from 'react'
import { animate } from 'animejs'

export default function Slide00_AIAdoptionCompanion() {
  useEffect(() => {
    const left = document.querySelector('.companion-left')
    const circles = document.querySelectorAll('.companion-circle')

    if (left) {
      animate(left, {
        translateY: { from: 30, to: 0 },
        opacity: { from: 0, to: 1 },
        duration: 900,
        ease: 'outExpo',
      })
    }
    circles.forEach((el, i) => {
      animate(el, {
        scale: { from: 0.7, to: 1 },
        opacity: { from: 0, to: 1 },
        duration: 700,
        delay: 300 + i * 180,
        ease: 'outExpo',
      })
    })
  }, [])

  const pillars = [
    { label: 'Discovery',  sub: 'Maturity Assessment',  color: '#c9a84c' },
    { label: 'Evaluation', sub: 'Impact Assessment',    color: '#8fa8bc' },
    { label: 'Execution',  sub: 'Bridging & Redesign',  color: '#0f1f4b' },
  ]

  return (
    <div className="h-full w-full bg-white flex items-center justify-center p-10 lg:p-14">
      {/* Framed container */}
      <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-2xl shadow-md px-12 lg:px-16 py-10 lg:py-12 flex flex-col md:flex-row items-center gap-12 md:gap-16">

        {/* Left: title + divider + body */}
        <div className="companion-left opacity-0 flex-shrink-0 w-full md:w-[320px]">
          <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black leading-tight text-[#0f1f4b] mb-4">
            YOUR AI ADOPTION<br />COMPANION
          </h1>
          <div className="w-full h-px bg-[#c9a84c] mb-5" />
          <p className="text-sm sm:text-base font-body text-gray-700 leading-relaxed">
            We diagnose your current AI Initiatives, and support improvements for sustainable success and scalability, with the Atlas Framework.
          </p>
        </div>

        {/* Right: three circles */}
        <div className="flex flex-row items-start justify-center gap-10 lg:gap-14 flex-1">
          {pillars.map((p, i) => (
            <div key={i} className="companion-circle opacity-0 flex flex-col items-center gap-3 text-center">
              <div
                className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full flex items-center justify-center"
                style={{ backgroundColor: p.color }}
              >
                <span className="text-white font-black text-lg sm:text-xl leading-tight px-3">
                  {p.label}
                </span>
              </div>
              <p className="text-sm sm:text-base font-black text-[#0f1f4b] leading-snug">
                {p.sub}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
