import React, { useEffect } from 'react'
import { animate } from 'animejs'

const categories = [
  {
    title: 'AI & GENAI TRAINING',
    items: ['Executive AI leadership briefings', 'Practitioner workshops', 'Hands-on GenAI lab exercises'],
  },
  {
    title: 'DATA & ARCHITECTURE ADVISORY',
    items: ['Data maturity and gap assessment', 'AI-ready data architecture design', 'Governance & compliance framework'],
  },
  {
    title: 'AGENTIC WORKFLOW DESIGN',
    items: ['Use case specification and prototyping', 'Human-AI process redesign', 'Continuous learning flywheel'],
  },
  {
    title: 'ECOSYSTEM & PARTNERSHIP',
    items: ['AI vendor & platform evaluation', 'Strategic technology partnerships', 'Academic & innovation network access'],
  },
]

const pills = ['Bespoke scope', 'Time-bound engagement', 'Satisfaction Survey', 'Hand-off']

export default function Slide03_Execution() {
  useEffect(() => {
    animate('.exec-left', {
      opacity: { from: 0, to: 1 },
      translateY: { from: 30, to: 0 },
      duration: 800,
      ease: 'outExpo',
    })
    document.querySelectorAll('.exec-dot').forEach((el, i) => {
      animate(el, {
        opacity: { from: 0, to: 1 },
        scale: { from: 0, to: 1 },
        duration: 500,
        delay: 350 + i * 150,
        ease: 'outExpo',
      })
    })
    document.querySelectorAll('.exec-cat').forEach((el, i) => {
      animate(el, {
        opacity: { from: 0, to: 1 },
        translateX: { from: 15, to: 0 },
        duration: 600,
        delay: 400 + i * 150,
        ease: 'outExpo',
      })
    })
    animate('.exec-pills', {
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
        <div className="exec-left opacity-0 w-[34%] shrink-0 flex flex-col pr-10">
          <div
            className="w-44 h-44 rounded-full flex items-center justify-center shrink-0 mb-5"
            style={{ backgroundColor: '#081E4C' }}
          >
            <span className="text-white font-black text-xl">Execution</span>
          </div>

          <h2 className="text-2xl lg:text-3xl font-black text-[#081E4C] mb-1 leading-tight">
            BRIDGING &amp; REDESIGN
          </h2>
          <p className="text-base font-body text-[#081E4C] italic mb-4">
            Let&apos;s do it together!
          </p>
          <p className="text-sm lg:text-base font-body text-gray-700 leading-relaxed">
            Engage with us on a range of technical and advisory services for validated
            transformations that are ready to scale.
          </p>

          {/* Pills */}
          <div className="exec-pills opacity-0 mt-8 flex flex-wrap gap-2">
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
        <div className="flex-1 flex flex-row" style={{ height: '90%' }}>

          {/* Timeline column */}
          <div className="w-10 shrink-0 flex flex-col items-center">
            {categories.map((_, i) => (
              <React.Fragment key={i}>
                <div
                  className="exec-dot opacity-0 w-4 h-4 rounded-full shrink-0"
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
              <div key={i} className="exec-cat opacity-0">
                <h3 className="text-sm lg:text-base font-black text-[#081E4C] underline underline-offset-2 decoration-1 mb-1.5 leading-snug">
                  {cat.title}
                </h3>
                <ul className="flex flex-col gap-0.5">
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

      {/* Footnote spacer */}
      <div className="pb-5" />

    </div>
  )
}
