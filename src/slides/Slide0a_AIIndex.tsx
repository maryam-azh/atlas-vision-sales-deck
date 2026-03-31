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

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-md">
          <table className="w-full border-collapse" style={{ minWidth: '900px' }}>

            {/* Icon row */}
            <thead>
              <tr>
                {indexes.map((idx, i) => (
                  <td key={i} className="aidx-col opacity-0 border-b border-gray-200 pt-3 pb-2 px-2 text-center" style={{ width: `${100 / indexes.length}%` }}>
                    <div className="flex items-center justify-center mx-auto w-9 h-9 rounded-full" style={{ backgroundColor: '#DAB954', color: '#081E4C' }}>
                      {idx.icon}
                    </div>
                  </td>
                ))}
              </tr>

              {/* Letter + Name header row */}
              <tr>
                {indexes.map((idx, i) => (
                  <th key={i} className="aidx-col opacity-0 border-b border-gray-300 px-2 py-2 text-center align-middle" style={{ backgroundColor: '#081E4C' }}>
                    <div className="text-2xl sm:text-3xl font-black leading-none" style={{ color: '#DAB954' }}>{idx.letter}</div>
                    <div className="text-[10px] sm:text-[11px] font-black text-white leading-tight mt-0.5 break-words">{idx.name}</div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {/* Definition row */}
              <tr>
                {indexes.map((idx, i) => (
                  <td key={i} className="aidx-col opacity-0 border-b border-gray-100 px-2 py-2 align-top text-[10px] sm:text-[11px] font-body text-gray-500 italic leading-snug bg-white">
                    {idx.definition}
                  </td>
                ))}
              </tr>

              {/* Metrics row */}
              <tr>
                {indexes.map((idx, i) => (
                  <td key={i} className="aidx-col opacity-0 px-2 py-2 align-top bg-white">
                    <ul className="flex flex-col gap-1">
                      {idx.metrics.map((m, j) => (
                        <li key={j} className="flex items-start gap-1 text-[10px] sm:text-[11px] font-body text-gray-700 leading-snug">
                          <span className="flex-shrink-0 mt-[3px] text-gray-400">·</span>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}
