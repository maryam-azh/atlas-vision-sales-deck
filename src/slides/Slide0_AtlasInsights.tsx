import { useEffect } from 'react'
import { animate } from 'animejs'

export default function Slide0_AtlasInsights() {
  useEffect(() => {
    const titleEl = document.querySelector('.insights-title')
    const subtitleEl = document.querySelector('.insights-subtitle')
    const cards = document.querySelectorAll('.insights-card')
    const footer = document.querySelector('.insights-footer')

    if (titleEl) {
      animate(titleEl, {
        translateY: { from: 50, to: 0 },
        opacity: { from: 0, to: 1 },
        duration: 1000,
        ease: 'outExpo',
      })
    }
    if (subtitleEl) {
      animate(subtitleEl, {
        translateY: { from: 30, to: 0 },
        opacity: { from: 0, to: 1 },
        duration: 800,
        delay: 300,
        ease: 'outExpo',
      })
    }
    cards.forEach((card, i) => {
      animate(card, {
        translateY: { from: 40, to: 0 },
        opacity: { from: 0, to: 1 },
        duration: 800,
        delay: 500 + i * 150,
        ease: 'outExpo',
      })
    })
    if (footer) {
      animate(footer, {
        opacity: { from: 0, to: 1 },
        duration: 600,
        delay: 1100,
        ease: 'outExpo',
      })
    }
  }, [])

  const services = [
    {
      step: '01',
      label: 'ASSESS',
      name: 'ATLAS POLARIS',
      role: 'AI Readiness Assessment',
      includes: [
        'Leadership Vision & Business Strategy',
        'People, Data & Infrastructure Maturity',
        'Principled AI Governance Framework',
      ],
      bg: 'rgb(var(--pale-peach))',
    },
    {
      step: '02',
      label: 'EVALUATE',
      name: 'ATLAS COMPASS',
      role: 'GenAI Impact Synthesis',
      includes: [
        'Feasibility & Performance Assessment',
        'Economic Value & ROI Validation',
        'Ethics, Risk & Governance Review',
      ],
      bg: 'rgb(var(--soft-mint-green))',
    },
    {
      step: '03',
      label: 'EXECUTE',
      name: 'ATLAS CATALOG',
      role: 'AI Execution Services',
      includes: [
        'Hands-on AI & GenAI Team Training',
        'Strategic Data Advisory',
        'Ecosystem & Partnership Development',
      ],
      bg: 'rgb(var(--chalky-light-blue))',
    },
  ]

  const values = [
    { label: 'Strategic Partnership', desc: 'We guide your AI journey from strategy through execution.' },
    { label: 'Structured Prioritisation', desc: 'Identify high-value, low-risk opportunities for real impact.' },
    { label: 'Measurable Outcomes', desc: 'Every engagement accelerates adoption and delivers results.' },
  ]

  return (
    <div className="h-full w-full bg-white relative overflow-y-auto">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(0,0,0,0.08) 50px, rgba(0,0,0,0.08) 51px)',
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(0,0,0,0.08) 50px, rgba(0,0,0,0.08) 51px)',
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 p-6 md:p-8 lg:p-10">
        {/* Header */}
        <h2 className="insights-title text-4xl sm:text-5xl lg:text-6xl font-black mb-2 sm:mb-3 opacity-0">
          ATLAS INSIGHTS
        </h2>
        <p className="insights-subtitle text-lg sm:text-xl lg:text-2xl font-body mb-5 sm:mb-6 opacity-0">
          Adopt AI where it matters most — from readiness through to execution.
        </p>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          {services.map((svc, i) => (
            <div key={i} className="insights-card opacity-0 rounded-2xl shadow-md border border-gray-200 p-5 sm:p-6 flex flex-col gap-3" style={{ backgroundColor: svc.bg }}>
              {/* Step + label */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold tracking-widest text-gray-500">{svc.step}</span>
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-gray-500">{svc.label}</span>
              </div>

              {/* Name */}
              <div>
                <h3 className="text-xl sm:text-2xl font-black leading-tight">{svc.name}</h3>
                <p className="text-sm sm:text-base font-body text-gray-600 mt-0.5">{svc.role}</p>
              </div>

              {/* Includes */}
              <ul className="flex flex-col gap-1.5 mt-auto">
                {svc.includes.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm font-body text-gray-700">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-black/40 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Value strip */}
        <div className="insights-footer opacity-0 bg-black text-white rounded-2xl px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {values.map((v, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="text-sm sm:text-base font-black">{v.label}</span>
              <span className="text-xs sm:text-sm font-body text-gray-300 leading-snug">{v.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
