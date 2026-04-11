import { useEffect } from 'react'
import { animate } from 'animejs'

const indexes = [
  {
    letter: 'A',
    name: 'Ambition',
    definition: 'Clarity of AI vision and the presence of dedicated leadership and strategy.',
    metrics: ['Existence of AI strategy', 'Specialized AI government agency/ministry'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
        <line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/>
      </svg>
    ),
  },
  {
    letter: 'P',
    name: 'Portfolio Sync',
    definition: 'Systematic evaluation and prioritization of AI initiatives to ensure strategic fit.',
    metrics: ['Use case prioritization frameworks', 'Roadmap alignment', 'Resource allocation logic'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
  },
  {
    letter: 'V',
    name: 'Value Accountability',
    definition: 'Formal assignment of business impact ownership and ROI measurement.',
    metrics: ['Business unit KPI integration', 'P&L impact tracking', 'Realized vs. projected value'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
  },
  {
    letter: 'S',
    name: 'Skills',
    definition: 'Concentration and availability of technical talent and AI literacy.',
    metrics: ['Pool of AI specialists', 'GitHub contributions', 'Kaggle Grandmasters', 'Python package downloads'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2z"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
      </svg>
    ),
  },
  {
    letter: 'R',
    name: 'R&D',
    definition: 'The capacity for proprietary innovation and intellectual property development.',
    metrics: ['AI research papers', 'AI-related patents', 'Number of AI startups', 'University rankings in Data Science'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-5-5z"/>
        <polyline points="9 3 9 8 14 8"/><line x1="12" y1="13" x2="12" y2="17"/><line x1="10" y1="15" x2="14" y2="15"/>
      </svg>
    ),
  },
  {
    letter: 'I',
    name: 'Infrastructure',
    definition: 'The digital and physical backbone required to host, scale, and run AI systems.',
    metrics: ['Broadband traffic per capita', 'Download speeds', 'Telecomm infrastructure index', 'Compute availability'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="5" rx="1"/><rect x="2" y="10" width="20" height="5" rx="1"/>
        <rect x="2" y="17" width="20" height="4" rx="1"/>
        <circle cx="18" cy="5.5" r="1" fill="currentColor"/><circle cx="18" cy="12.5" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    letter: 'P',
    name: 'Policy & Reg',
    definition: 'Adherence to legal requirements and ethical governance frameworks.',
    metrics: ['Regulatory quality', 'Governance effectiveness', 'Governance of data', 'AI and democratic values index'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2L3 7v4c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
  {
    letter: 'E',
    name: 'Ecosystem',
    definition: 'Management of external partnerships, supply chains, and third-party AI risks.',
    metrics: ['Vendor risk assessments', 'Open-source contributions', 'Partnership network breadth', 'Supply chain transparency'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/>
      </svg>
    ),
  },
  {
    letter: 'F',
    name: 'Financial Stewardship',
    definition: 'Governance over AI-related capital expenditure and operational usage costs.',
    metrics: ['VC availability', 'Computer software spending', 'Token/API budget caps', 'Unit cost of AI transactions'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v2m0 8v2m-3-7h6m-6 4h6"/>
        <path d="M9 9a3 3 0 0 1 6 0c0 2-3 3-3 5"/>
      </svg>
    ),
  },
]

export default function Slide0a_AIIndex() {
  useEffect(() => {
    animate('.aidx-header', { opacity: { from: 0, to: 1 }, translateY: { from: 30, to: 0 }, duration: 800, ease: 'outExpo' })
    document.querySelectorAll('.aidx-col').forEach((el, i) => {
      animate(el, { opacity: { from: 0, to: 1 }, translateY: { from: 20, to: 0 }, duration: 600, delay: 300 + i * 80, ease: 'outExpo' })
    })
  }, [])

  return (
    <div className="h-full w-full bg-white relative overflow-y-auto">
      {/* Background grid texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(0,0,0,0.08) 50px, rgba(0,0,0,0.08) 51px)' }} />
        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(0,0,0,0.08) 50px, rgba(0,0,0,0.08) 51px)' }} />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 px-4 py-4 md:px-6 md:py-5 flex flex-col gap-3">

        {/* Header */}
        <div className="aidx-header opacity-0">
          <p className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase mb-0.5">Atlas Insights · AI Readiness Framework</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-none">AI READINESS INDEX</h2>
          <p className="text-sm sm:text-base font-body text-gray-500 mt-1">Nine dimensions that determine an organisation's capacity to conceive, deploy, and sustain AI at scale.</p>
        </div>

        {/* Columns */}
        <div className="overflow-x-auto">
          <div className="flex gap-2" style={{ minWidth: '900px' }}>
            {indexes.map((idx, i) => {
              const colColors = [
                'rgb(var(--pale-peach))',
                'rgb(var(--soft-mint-green))',
                'rgb(var(--chalky-light-blue))',
              ]
              const bg = colColors[i % 3]
              return (
                <div key={i} className="aidx-col opacity-0 flex-1 rounded-2xl overflow-hidden flex flex-col shadow-sm" style={{ backgroundColor: bg }}>

                  {/* Icon */}
                  <div className="flex justify-center pt-3 pb-1 px-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full" style={{ backgroundColor: 'rgba(8,30,76,0.12)', color: '#081E4C' }}>
                      {idx.icon}
                    </div>
                  </div>

                  {/* Letter + Name */}
                  <div className="flex flex-col items-center px-2 pb-2 gap-0.5">
                    <div className="text-2xl sm:text-3xl font-black leading-none" style={{ color: '#081E4C' }}>{idx.letter}</div>
                    <div className="text-[9px] sm:text-[10px] font-black text-center leading-tight break-words" style={{ color: '#081E4C' }}>{idx.name}</div>
                  </div>

                  {/* Divider */}
                  <div className="mx-3 h-px" style={{ backgroundColor: 'rgba(8,30,76,0.15)' }} />

                  {/* Definition */}
                  <div className="px-2.5 py-2 text-[9px] sm:text-[10px] font-body italic leading-snug" style={{ color: 'rgba(8,30,76,0.6)' }}>
                    {idx.definition}
                  </div>

                  {/* Divider */}
                  <div className="mx-3 h-px" style={{ backgroundColor: 'rgba(8,30,76,0.15)' }} />

                  {/* Metrics */}
                  <div className="px-2.5 py-2 flex flex-col gap-1 flex-1">
                    {idx.metrics.map((m, j) => (
                      <div key={j} className="flex items-start gap-1 text-[9px] sm:text-[10px] font-body leading-snug" style={{ color: '#081E4C' }}>
                        <span className="flex-shrink-0 mt-[2px] opacity-40">·</span>
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>

                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}
