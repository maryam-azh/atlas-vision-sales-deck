import { useEffect } from 'react'
import { animate } from 'animejs'

const phases = [
  {
    label: 'Pre-\ndiscovery',
    price: '1 AICU',
    color: '#8fa8bc',
    annotations: [],
  },
  {
    label: 'Discovery &\nEvaluation',
    price: 'Min 2 AICUs',
    color: '#4a6d8c',
    annotations: ['Scope', 'Plan'],
  },
  {
    label: 'Execution',
    price: 'AICU or value-\nbased pricing',
    color: '#081E4C',
    annotations: [],
  },
]

export default function SlideEngagementModel() {
  useEffect(() => {
    animate('.eng-left', {
      opacity: { from: 0, to: 1 },
      translateY: { from: 30, to: 0 },
      duration: 800,
      ease: 'outExpo',
    })
    document.querySelectorAll('.eng-phase').forEach((el, i) => {
      animate(el, {
        opacity: { from: 0, to: 1 },
        translateX: { from: 20, to: 0 },
        duration: 600,
        delay: 400 + i * 150,
        ease: 'outExpo',
      })
    })
  }, [])

  return (
    <div className="h-full w-full bg-white flex flex-col overflow-hidden">
      <div className="flex-1 min-h-0 flex flex-row items-center px-16 lg:px-24 gap-16">

        {/* Left */}
        <div className="eng-left opacity-0 w-[30%] shrink-0 flex flex-col gap-4">
          <div>
            <h2 className="text-3xl lg:text-4xl font-black text-[#081E4C] leading-tight mb-3">
              ENGAGEMENT<br />MODEL
            </h2>
            <div className="w-16 h-[3px]" style={{ backgroundColor: '#DAB954' }} />
          </div>
          <p className="text-sm lg:text-base font-body text-gray-700 leading-relaxed">
            We offer a predictable unit-based pricing for Atlas consultancy services.
          </p>
          <p className="text-sm lg:text-base font-body text-gray-700 leading-relaxed">
            Each Atlas Insights Consultancy Unit (<strong>AICU</strong>) is a <strong>half-day</strong> engagement session
          </p>
        </div>

        {/* Right: chevron pipeline */}
        <div className="flex-1 flex flex-col justify-center gap-5">

          {/* Annotation brackets */}
          <div className="relative" style={{ height: '48px' }}>
            {/* Scope: spans over Pre-discovery → left portion of Discovery */}
            <div className="absolute flex flex-col items-end" style={{ left: '18%', right: '54%' }}>
              <span className="text-sm font-body italic self-center mb-1" style={{ color: '#DAB954' }}>Scope</span>
              <div className="relative w-full" style={{ height: '20px' }}>
                <div className="absolute top-0 left-0 right-0 h-px" style={{ backgroundColor: '#DAB954' }} />
                <div className="absolute top-0 left-0 w-px h-full" style={{ backgroundColor: '#DAB954' }} />
                <div className="absolute top-0 right-0 w-px h-full" style={{ backgroundColor: '#DAB954' }} />
                <div className="absolute w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#DAB954', bottom: '-5px', left: '-5px' }} />
                <div className="absolute w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#DAB954', bottom: '-5px', right: '-5px' }} />
              </div>
            </div>
            {/* Plan: spans right portion of Discovery → Execution */}
            <div className="absolute flex flex-col items-end" style={{ left: '54%', right: '18%' }}>
              <span className="text-sm font-body italic self-center mb-1" style={{ color: '#DAB954' }}>Plan</span>
              <div className="relative w-full" style={{ height: '20px' }}>
                <div className="absolute top-0 left-0 right-0 h-px" style={{ backgroundColor: '#DAB954' }} />
                <div className="absolute top-0 left-0 w-px h-full" style={{ backgroundColor: '#DAB954' }} />
                <div className="absolute top-0 right-0 w-px h-full" style={{ backgroundColor: '#DAB954' }} />
                <div className="absolute w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#DAB954', bottom: '-5px', left: '-5px' }} />
                <div className="absolute w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#DAB954', bottom: '-5px', right: '-5px' }} />
              </div>
            </div>
          </div>

          {/* Chevron row — clip-path approach so text fills the full div reliably */}
          <div className="flex flex-row" style={{ height: '90px' }}>
            {phases.map((phase, i) => (
              <div
                key={i}
                className="eng-phase opacity-0 relative flex-1 flex items-center justify-center"
                style={{
                  backgroundColor: phase.color,
                  clipPath: i === 0
                    ? 'polygon(0% 0%, calc(100% - 22px) 0%, 100% 50%, calc(100% - 22px) 100%, 0% 100%)'
                    : 'polygon(0% 0%, calc(100% - 22px) 0%, 100% 50%, calc(100% - 22px) 100%, 0% 100%, 22px 50%)',
                  marginLeft: i > 0 ? '-18px' : '0',
                  zIndex: i + 1,
                  paddingLeft: i > 0 ? '2.5rem' : '1rem',
                  paddingRight: '2rem',
                }}
              >
                <span className="text-white font-semibold text-sm lg:text-base leading-snug text-center">
                  {phase.label}
                </span>
              </div>
            ))}
          </div>

          {/* Price row */}
          <div className="flex flex-row">
            {phases.map((phase, i) => (
              <div key={i} className="eng-phase opacity-0 flex-1 flex flex-col gap-1.5">
                <div className="w-8 h-px" style={{ backgroundColor: '#081E4C' }} />
                <span className="text-sm lg:text-base font-black text-[#081E4C] leading-snug">
                  {phase.price}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Page number */}
      <div className="px-16 lg:px-24 pb-4 text-right">
        <span className="text-xs text-gray-400">8</span>
      </div>
    </div>
  )
}
