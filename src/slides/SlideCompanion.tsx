import { useEffect } from 'react'
import { animate } from 'animejs'

export default function SlideCompanion() {
  useEffect(() => {
    animate('.comp-left', {
      opacity: { from: 0, to: 1 },
      translateY: { from: 30, to: 0 },
      duration: 800,
      ease: 'outExpo',
    })
    const circles = document.querySelectorAll('.comp-circle')
    circles.forEach((el, i) => {
      animate(el, {
        opacity: { from: 0, to: 1 },
        scale: { from: 0.75, to: 1 },
        duration: 700,
        delay: 300 + i * 180,
        ease: 'outExpo',
      })
    })
  }, [])

  const pillars = [
    { label: 'Discovery',  sub: 'Maturity Assessment', color: '#DAB954' },
    { label: 'Evaluation', sub: 'Impact Assessment',   color: '#8fa8bc' },
    { label: 'Execution',  sub: 'Bridging & Redesign', color: '#081E4C' },
  ]

  return (
    <div className="h-full w-full bg-white flex items-center justify-center px-14 lg:px-20">
      <div className="w-full max-w-5xl flex flex-row items-center gap-16 lg:gap-24">

        {/* Left: title + rule + body */}
        <div className="comp-left opacity-0 w-[38%] shrink-0">
          <h1 className="text-3xl lg:text-4xl font-black text-[#081E4C] leading-tight mb-4">
            YOUR AI ADOPTION<br />COMPANION
          </h1>
          <div className="w-full h-px mb-5" style={{ backgroundColor: '#DAB954' }} />
          <p className="text-sm lg:text-base font-body text-[#081E4C] leading-relaxed">
            Diagnose your AI Initiatives and improve them with the Atlas Framework for sustainable success and scalability.
          </p>
        </div>

        {/* Right: three circles */}
        <div className="flex-1 flex flex-row items-start justify-between gap-6">
          {pillars.map((p, i) => (
            <div key={i} className="comp-circle opacity-0 flex flex-col items-center text-center gap-4">
              <div
                className="w-36 h-36 lg:w-44 lg:h-44 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: p.color }}
              >
                <span className="text-white font-black text-lg lg:text-xl px-2 leading-tight">
                  {p.label}
                </span>
              </div>
              <p className="text-sm lg:text-base font-black text-[#081E4C]">
                {p.sub}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
