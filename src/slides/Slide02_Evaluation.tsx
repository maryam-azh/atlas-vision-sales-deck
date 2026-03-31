import React, { useEffect } from 'react'
import { animate } from 'animejs'

const categories = [
  {
    title: 'TECHNICAL RISKS',
    items: ['Bias, Drift and Data Contamination', 'System Failure', 'Traceability and Transparency'],
  },
  {
    title: 'SOCIETAL RISKS',
    items: ['Privacy Violations', 'People & Culture', 'Workflow Disruption'],
  },
  {
    title: 'REGULATORY RISKS',
    items: ['Non-compliance', 'Organizational Reputation', 'Algorithmic Governance'],
  },
]

const pills = [
  'Bespoke scope per AI initiative',
  '8 Core impact dimensions',
  'RACI framework across key pillars',
  'Threshold establishment',
]

export default function Slide02_Evaluation() {
  useEffect(() => {
    animate('.eval-left', {
      opacity: { from: 0, to: 1 },
      translateY: { from: 30, to: 0 },
      duration: 800,
      ease: 'outExpo',
    })
    document.querySelectorAll('.eval-dot').forEach((el, i) => {
      animate(el, {
        opacity: { from: 0, to: 1 },
        scale: { from: 0, to: 1 },
        duration: 500,
        delay: 350 + i * 180,
        ease: 'outExpo',
      })
    })
    document.querySelectorAll('.eval-cat').forEach((el, i) => {
      animate(el, {
        opacity: { from: 0, to: 1 },
        translateX: { from: 15, to: 0 },
        duration: 600,
        delay: 400 + i * 180,
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
            IMPACT ASSESSMENT
          </h2>
          <p className="text-base font-body text-[#081E4C] italic mb-4">
            What do we fix &amp; how?
          </p>
          <p className="text-sm lg:text-base font-body text-gray-700 leading-relaxed">
            Define the value, risks, and organizational implications of your AI initiatives
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

        {/* Right: timeline + categories — fixed height, evenly spaced */}
        <div className="flex-1 flex flex-row" style={{ height: '75%' }}>

          {/* Timeline column */}
          <div className="w-10 shrink-0 flex flex-col items-center">
            {categories.map((_, i) => (
              <React.Fragment key={i}>
                <div
                  className="eval-dot opacity-0 w-4 h-4 rounded-full shrink-0"
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
              <div key={i} className="eval-cat opacity-0">
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
          Adopted from ISO 42005: AI system impact assessment
        </p>
      </div>

    </div>
  )
}
