import React, { useEffect } from 'react'
import { animate } from 'animejs'

const categories = [
  {
    title: 'STRATEGIC ALIGNMENT',
    items: ['Ambition', 'Portfolio Alignment', 'Accountability'],
  },
  {
    title: 'CORE CAPABILITY –the How',
    items: ['Skills', 'R&D', 'Infrastructure'],
  },
  {
    title: 'PRINCIPLED GOVERNANCE – the Rules',
    items: ['Policy & Regulation', 'Budget', 'Ecosystem'],
  },
]

const pills = [
  'One day workshop',
  '9 Dimensions assessed',
  '1-6 Archetype',
  '3×3 strategic Recommendations',
]

export default function Slide01_Discovery() {
  useEffect(() => {
    animate('.disc-left', {
      opacity: { from: 0, to: 1 },
      translateY: { from: 30, to: 0 },
      duration: 800,
      ease: 'outExpo',
    })
    document.querySelectorAll('.disc-dot').forEach((el, i) => {
      animate(el, {
        opacity: { from: 0, to: 1 },
        scale: { from: 0, to: 1 },
        duration: 500,
        delay: 350 + i * 180,
        ease: 'outExpo',
      })
    })
    document.querySelectorAll('.disc-cat').forEach((el, i) => {
      animate(el, {
        opacity: { from: 0, to: 1 },
        translateX: { from: 15, to: 0 },
        duration: 600,
        delay: 400 + i * 180,
        ease: 'outExpo',
      })
    })
    animate('.disc-pills', {
      opacity: { from: 0, to: 1 },
      duration: 500,
      delay: 900,
      ease: 'outExpo',
    })
  }, [])

  return (
    <div className="h-full w-full bg-white flex flex-col overflow-hidden">

      {/* Main row — vertically centred */}
      <div className="flex-1 min-h-0 flex flex-row items-center justify-center px-16 lg:px-24 pt-6 pb-3 gap-0">

        {/* Left column */}
        <div className="disc-left opacity-0 w-[34%] shrink-0 flex flex-col pr-10">
          <div
            className="w-44 h-44 rounded-full flex items-center justify-center shrink-0 mb-5"
            style={{ backgroundColor: '#DAB954' }}
          >
            <span className="text-white font-black text-xl">Discovery</span>
          </div>

          <h2 className="text-2xl lg:text-3xl font-black text-[#081E4C] mb-1 leading-tight">
            Maturity Assessment
          </h2>
          <p className="text-base font-body text-[#081E4C] italic mb-4">
            What is wrong?
          </p>
          <p className="text-sm lg:text-base font-body text-gray-700 leading-relaxed">
            Assess the maturity of your organization for adopting AI with a Strategy Roadmap.
          </p>

          {/* Pills */}
          <div className="disc-pills opacity-0 mt-8 flex flex-wrap gap-2">
            {pills.map((p, i) => (
              <span
                key={i}
                className="text-xs font-body text-white px-3 py-1.5 rounded font-semibold"
                style={{ backgroundColor: '#081E4C' }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Right: timeline + categories — fixed height, evenly spaced */}
        <div className="flex-1 flex flex-row" style={{ height: '75%' }}>

          {/* Timeline column */}
          <div className="w-10 shrink-0 flex flex-col items-center">
            {categories.map((_, i) => (
              <React.Fragment key={i}>
                <div
                  className="disc-dot opacity-0 w-4 h-4 rounded-full shrink-0"
                  style={{ backgroundColor: '#DAB954' }}
                />
                {i < categories.length - 1 && (
                  <div className="flex-1 w-px" style={{ backgroundColor: '#DAB954' }} />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Categories column */}
          <div className="flex-1 pl-5 flex flex-col justify-between">
            {categories.map((cat, i) => (
              <div key={i} className="disc-cat opacity-0">
                <h3 className="text-sm lg:text-base font-black text-[#081E4C] underline underline-offset-2 decoration-1 mb-2 leading-snug">
                  {cat.title}
                </h3>
                <ul className="flex flex-col gap-1">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm lg:text-base font-body text-gray-700">
                      <span className="shrink-0 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Footnote */}
      <div className="px-16 lg:px-24 pb-5 text-right">
        <p className="text-xs font-body italic text-gray-400">
          Inspired by The AI Maturity Matrix, BCG
        </p>
      </div>

    </div>
  )
}
