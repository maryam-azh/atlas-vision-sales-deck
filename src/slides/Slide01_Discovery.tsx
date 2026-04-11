import { useEffect } from 'react'
import { animate } from 'animejs'

const categories = [
  {
    title: 'Strategic Alignment',
    items: ['Ambition', 'Portfolio Alignment', 'Accountability'],
  },
  {
    title: 'Core Capability',
    items: ['Skills', 'R&D', 'Infrastructure'],
  },
  {
    title: 'Principled Governance',
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
    document.querySelectorAll('.disc-card').forEach((el, i) => {
      animate(el, {
        opacity: { from: 0, to: 1 },
        translateY: { from: 20, to: 0 },
        duration: 600,
        delay: 350 + i * 120,
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
      <div className="flex-1 min-h-0 flex flex-row items-center justify-center px-16 lg:px-24 pt-6 pb-3 gap-8">

        {/* Left column */}
        <div className="disc-left opacity-0 w-[42%] shrink-0 flex flex-col">
          <div
            className="w-44 h-44 rounded-full flex items-center justify-center shrink-0 mb-5"
            style={{ backgroundColor: '#DAB954' }}
          >
            <span className="text-white font-black text-xl">Discovery</span>
          </div>

          <h2 className="text-2xl lg:text-3xl font-black text-[#081E4C] mb-1 leading-tight">
            MATURITY ASSESSMENT
          </h2>
          <p className="text-base font-body text-[#081E4C] italic mb-4">
            What is missing?
          </p>
          <p className="text-sm lg:text-base font-body text-gray-700 leading-relaxed">
            Assess the maturity of your organization for adopting AI across 3 dimensions and scope your investments with a Strategy Roadmap.
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

        {/* Right: stacked rows — label pill overlapping bordered items box */}
        <div className="flex-1 flex flex-col justify-center gap-4">
          {categories.map((cat, i) => (
            <div key={i} className="disc-card opacity-0 flex flex-row items-stretch">
              {/* Gold label box */}
              <div
                className="shrink-0 w-36 lg:w-40 rounded-xl flex items-center justify-center px-3 py-4 z-10"
                style={{ backgroundColor: 'rgb(201 168 76 / 0.35)' }}
              >
                <span className="font-semibold text-sm lg:text-base leading-snug text-center" style={{ color: '#081E4C' }}>
                  {cat.title}
                </span>
              </div>
              {/* Items box — overlaps the label on its left edge */}
              <div
                className="flex-1 rounded-xl border-2 flex items-center px-5 py-4 -ml-3"
                style={{ backgroundColor: 'white', borderColor: '#DAB954' }}
              >
                <ul className="flex flex-col gap-1">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm lg:text-base font-body text-gray-700">
                      <span className="shrink-0 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
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
