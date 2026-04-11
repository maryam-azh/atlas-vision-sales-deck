import { useEffect } from 'react'
import { animate } from 'animejs'

const categories = [
  {
    title: 'AI & GENAI TRAINING',
    items: ['Executive courses', 'Practitioner workshops', 'Hands-on GenAI lab exercises'],
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
    document.querySelectorAll('.exec-card').forEach((el, i) => {
      animate(el, {
        opacity: { from: 0, to: 1 },
        translateY: { from: 20, to: 0 },
        duration: 600,
        delay: 350 + i * 120,
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

        {/* Right: 2×2 grid, each cell = label box + items tile */}
        <div className="flex-1 grid grid-cols-2 gap-4" style={{ alignContent: 'center' }}>
          {categories.map((cat, i) => (
            <div key={i} className="exec-card opacity-0 flex flex-row items-stretch gap-2">
              {/* Navy label box */}
              <div
                className="shrink-0 w-32 lg:w-36 rounded-xl flex items-center justify-center px-3 py-5 border-2"
                style={{ borderColor: '#081E4C' }}
              >
                <span className="font-semibold text-sm lg:text-base leading-snug text-center" style={{ color: '#081E4C' }}>
                  {cat.title}
                </span>
              </div>
              {/* Items tile */}
              <div
                className="flex-1 rounded-xl flex items-center px-4 py-5"
              >
                <ul className="flex flex-col gap-1.5">
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

      {/* Footnote spacer */}
      <div className="pb-5" />

    </div>
  )
}
