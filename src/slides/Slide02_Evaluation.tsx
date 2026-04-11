import { useEffect } from 'react'
import { animate } from 'animejs'

const categories = [
  {
    title: 'TECHNICAL',
    items: ['Technical Performance', 'Security & Data Privacy', 'Responsible AI'],
  },
  {
    title: 'HUMAN',
    items: ['Human-AI Interaction', 'Adoption', 'Trust'],
  },
  {
    title: 'FINANCIAL',
    items: ['Investment', 'Cost Efficiency', 'Value Realization'],
  },
  {
    title: 'ECOSYSTEM',
    items: ['IP', '3rd party', 'Lifecycle Management'],
  },
]

const pills = [
  'Bespoke Scope Per AI Initiative',
  '4* 3 Risk Scorecard Report',
  'Prioritized Mitigation Strategies',
]

export default function Slide02_Evaluation() {
  useEffect(() => {
    animate('.eval-left', {
      opacity: { from: 0, to: 1 },
      translateY: { from: 30, to: 0 },
      duration: 800,
      ease: 'outExpo',
    })
    document.querySelectorAll('.eval-card').forEach((el, i) => {
      animate(el, {
        opacity: { from: 0, to: 1 },
        translateY: { from: 20, to: 0 },
        duration: 600,
        delay: 350 + i * 120,
        ease: 'outExpo',
      })
    })
    animate('.eval-pills', {
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
        <div className="eval-left opacity-0 w-[34%] shrink-0 flex flex-col pr-10">
          <div
            className="w-44 h-44 rounded-full flex items-center justify-center shrink-0 mb-5"
            style={{ backgroundColor: '#8fa8bc' }}
          >
            <span className="text-white font-black text-xl">Evaluation</span>
          </div>

          <h2 className="text-2xl lg:text-3xl font-black text-[#081E4C] mb-1 leading-tight">
            GAP ANALYSIS
          </h2>
          <p className="text-base font-body text-[#081E4C] italic mb-4">
            What do we fix &amp; how?
          </p>
          <p className="text-sm lg:text-base font-body text-gray-700 leading-relaxed">
            Define the risks of adoption and analyze the root cause of failures for your AI initiatives
            with a risk profile and prioritized mitigation plan.
          </p>

          {/* Pills */}
          <div className="eval-pills opacity-0 mt-8 flex flex-wrap gap-2">
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

        {/* Right: 2×2 grid of cards */}
        <div className="flex-1 grid grid-cols-2 gap-3" style={{ alignContent: 'center' }}>
          {categories.map((cat, i) => (
            <div
              key={i}
              className="eval-card opacity-0 rounded-2xl p-4 lg:p-5 flex flex-col gap-2"
              style={{ backgroundColor: 'rgb(170 198 218 / 0.35)' }}
            >
              <h3 className="text-sm lg:text-base font-black text-[#081E4C] underline underline-offset-2 decoration-1 leading-snug">
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

      {/* Footnote */}
      <div className="px-16 lg:px-24 pb-5 text-right">
        <p className="text-xs font-body italic text-gray-400">
          Inspired by NIST AI 600-1: AI Risk Management Framework
        </p>
      </div>

    </div>
  )
}
