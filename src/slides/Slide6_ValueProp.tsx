import { useState, useEffect } from 'react'
import { animate } from 'animejs'

export default function Slide6_ValueProp() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  useEffect(() => {
    const titleEl = document.querySelector('.value-title')
    const subtitleEl = document.querySelector('.value-subtitle')

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
  }, [])

  return (
    <div className="h-full w-full bg-white relative overflow-y-auto overflow-x-hidden">
      {/* Background texture - Subtle square grid pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(0,0,0,0.08) 50px, rgba(0,0,0,0.08) 51px)',
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(0,0,0,0.08) 50px, rgba(0,0,0,0.08) 51px)',
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 p-6 md:p-8 lg:p-10">
        <h2 className="value-title text-4xl sm:text-5xl lg:text-6xl font-black mb-2 sm:mb-3 opacity-0">VALUE PROPOSITION</h2>
        <p className="value-subtitle text-lg sm:text-xl lg:text-2xl font-body mb-3 sm:mb-4 opacity-0">
          We deliver significant gains and consistent customer satisfaction with measurable impact.
        </p>

        <div>
          {/* Top 4 cards - responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 lg:gap-5 mb-3 sm:mb-4 isolate">
            {/* Card 1: Accelerate Operations */}
            <div 
              className="p-5 sm:p-6 lg:p-7 relative group rounded-lg cursor-pointer min-h-[160px] sm:min-h-[170px] lg:min-h-[180px] flex flex-col justify-between border border-gray-200 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus-within:ring-2 focus-within:ring-black/20 hover:z-[200]" 
              style={{ backgroundColor: 'rgb(var(--pale-peach))' }}
              onMouseEnter={() => setActiveCard(1)}
              onMouseLeave={() => setActiveCard(null)}
              onClick={() => setActiveCard(activeCard === 1 ? null : 1)}
              role="button"
              tabIndex={0}
              aria-label="View details: Accelerate operations with AI-powered inspections"
              onKeyDown={(e) => e.key === 'Enter' && setActiveCard(activeCard === 1 ? null : 1)}
            >
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black mb-2 leading-tight">
                ACCELERATED OPERATIONS
              </h3>
              <p className="text-xs sm:text-sm lg:text-base font-body leading-relaxed">
                Cut inspection time from 20+ minutes to seconds and unblock bottlenecks
              </p>
              
              {/* Hover/Touch content */}
              <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] sm:w-[140%] bg-white/90 backdrop-blur-md ${activeCard === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} transition-all duration-300 p-3 sm:p-6 lg:p-8 flex items-center justify-center rounded-xl pointer-events-none border border-white/40 shadow-2xl z-[100]`}>
                <div className="flex flex-col gap-1 sm:gap-2 lg:gap-3 w-full">
                  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 lg:gap-5 justify-center">
                    <div className="text-center p-2 sm:p-3 lg:p-4 rounded shadow-sm border border-gray-200" style={{ backgroundColor: 'rgb(var(--light-cream))' }}>
                      <div className="text-lg sm:text-xl lg:text-2xl font-black mb-0.5 sm:mb-1 tracking-tight">20+ min</div>
                      <div className="font-mono text-[10px] sm:text-xs lg:text-sm uppercase text-gray-600">Manual</div>
                    </div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-400">→</div>
                    <div className="text-center p-2 sm:p-3 lg:p-4 rounded shadow-sm border border-gray-200" style={{ backgroundColor: 'rgb(var(--pale-peach))' }}>
                      <div className="text-lg sm:text-xl lg:text-2xl font-black mb-0.5 sm:mb-1 tracking-tight">&lt;1 min</div>
                      <div className="font-mono text-[10px] sm:text-xs lg:text-sm uppercase text-gray-600">AI</div>
                    </div>
                  </div>
                  <div className="text-[10px] sm:text-xs lg:text-sm text-gray-700 text-center leading-tight">
                    <span className="font-black">Modules:</span> Vision Pro, Claim API, Vision Lite
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Consistent Accuracy */}
            <div 
              className="p-4 sm:p-5 lg:p-6 relative group rounded-lg cursor-pointer min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] flex flex-col justify-between border border-gray-200 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus-within:ring-2 focus-within:ring-black/20 hover:z-[200]" 
              style={{ backgroundColor: 'rgb(var(--chalky-light-blue))' }}
              onMouseEnter={() => setActiveCard(2)}
              onMouseLeave={() => setActiveCard(null)}
              onClick={() => setActiveCard(activeCard === 2 ? null : 2)}
              role="button"
              tabIndex={0}
              aria-label="View details: Consistent accuracy"
              onKeyDown={(e) => e.key === 'Enter' && setActiveCard(activeCard === 2 ? null : 2)}
            >
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black mb-2 leading-tight">
                CONSISTENT ACCURACY
              </h3>
              <p className="text-xs sm:text-sm lg:text-base font-body leading-relaxed">
                Eliminate human error with consistent, auditable, data-driven records
              </p>
              
              {/* Hover/Touch content */}
              <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] sm:w-[140%] bg-white/90 backdrop-blur-md ${activeCard === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} transition-all duration-300 p-3 sm:p-6 lg:p-8 flex items-center justify-center rounded-xl pointer-events-none border border-white/40 shadow-2xl z-[100]`}>
                <div className="flex flex-col gap-1 sm:gap-2 lg:gap-3 w-full">
                  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 lg:gap-5 justify-center">
                    <div className="text-center p-2 sm:p-3 lg:p-4 rounded shadow-sm border border-gray-200" style={{ backgroundColor: 'rgb(var(--light-cream))' }}>
                      <div className="text-lg sm:text-xl lg:text-2xl font-black mb-0.5 sm:mb-1 tracking-tight">Variable</div>
                      <div className="font-mono text-[10px] sm:text-xs lg:text-sm uppercase text-gray-600">Human</div>
                    </div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-400">→</div>
                    <div className="text-center p-2 sm:p-3 lg:p-4 rounded shadow-sm border border-gray-200" style={{ backgroundColor: 'rgb(var(--chalky-light-blue))' }}>
                      <div className="text-lg sm:text-xl lg:text-2xl font-black mb-0.5 sm:mb-1 tracking-tight">95%+</div>
                      <div className="font-mono text-[10px] sm:text-xs lg:text-sm uppercase text-gray-600">AI Trust</div>
                    </div>
                  </div>
                  <div className="text-[10px] sm:text-xs lg:text-sm text-gray-700 text-center leading-tight">
                    <span className="font-black">Modules:</span> Calibration + Governance + Learning
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Scale Across Lifecycle */}
            <div 
              className="p-5 sm:p-6 lg:p-7 relative group rounded-lg sm:col-span-2 lg:col-span-1 cursor-pointer min-h-[160px] sm:min-h-[170px] lg:min-h-[180px] flex flex-col justify-between border border-black/10 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus-within:ring-2 focus-within:ring-black/20 hover:z-[200]" 
              style={{ backgroundColor: 'rgb(212 241 212)' }}
              onMouseEnter={() => setActiveCard(3)}
              onMouseLeave={() => setActiveCard(null)}
              onClick={() => setActiveCard(activeCard === 3 ? null : 3)}
              role="button"
              tabIndex={0}
              aria-label="View details: Scale across the entire vehicle lifecycle"
              onKeyDown={(e) => e.key === 'Enter' && setActiveCard(activeCard === 3 ? null : 3)}
            >
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black mb-2 leading-tight">
                LIFECYCLE SCALABILITY
              </h3>
              <p className="text-xs sm:text-sm lg:text-base font-body leading-relaxed">
                One modular platform serves OEMs, insurers, fleets, and rental companies
              </p>
              
              {/* Hover/Touch content */}
              <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] sm:w-[140%] bg-white/90 backdrop-blur-md ${activeCard === 3 ? 'opacity-100 scale-100 z-[300]' : 'opacity-0 scale-95 z-[50]'} transition-all duration-300 p-3 sm:p-6 lg:p-8 flex items-center justify-center rounded-xl pointer-events-none border border-white/40 shadow-2xl`}>
                <div className="flex flex-col gap-1 sm:gap-2 lg:gap-3 w-full">
                  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 lg:gap-5 justify-center">
                    <div className="text-center p-2 sm:p-3 lg:p-4 rounded shadow-sm border border-gray-200" style={{ backgroundColor: 'rgb(var(--light-cream))' }}>
                      <div className="text-lg sm:text-xl lg:text-2xl font-black mb-0.5 sm:mb-1 tracking-tight">1 Platform</div>
                      <div className="font-mono text-[10px] sm:text-xs lg:text-sm uppercase text-gray-600">Modular</div>
                    </div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-400">→</div>
                    <div className="text-center p-2 sm:p-3 lg:p-4 rounded shadow-sm border border-gray-200" style={{ backgroundColor: 'rgb(var(--soft-mint-green))' }}>
                      <div className="text-lg sm:text-xl lg:text-2xl font-black mb-0.5 sm:mb-1 tracking-tight">4+ Markets</div>
                      <div className="font-mono text-[10px] sm:text-xs lg:text-sm uppercase text-gray-600">All Segments</div>
                    </div>
                  </div>
                  <div className="text-[10px] sm:text-xs lg:text-sm text-gray-700 text-center leading-tight">
                    <span className="font-black">Modules:</span> Vision Pro · Vision Lite · Claim · Aero
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Customer Satisfaction */}
            <div 
              className="p-4 sm:p-5 lg:p-6 relative group rounded-lg cursor-pointer min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] flex flex-col justify-between border border-gray-200 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus-within:ring-2 focus-within:ring-black/20 hover:z-[200]" 
              style={{ backgroundColor: 'rgb(var(--dusty-rose-pink))' }}
              onMouseEnter={() => setActiveCard(4)}
              onMouseLeave={() => setActiveCard(null)}
              onClick={() => setActiveCard(activeCard === 4 ? null : 4)}
              role="button"
              tabIndex={0}
              aria-label="View details: Customer satisfaction through transparency"
              onKeyDown={(e) => e.key === 'Enter' && setActiveCard(activeCard === 4 ? null : 4)}
            >
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black mb-2 leading-tight">
                CUSTOMER SATISFACTION
              </h3>
              <p className="text-xs sm:text-sm lg:text-base font-body leading-relaxed">
                Boost trust and loyalty with transparent vehicle history and faster service
              </p>
              
              {/* Hover/Touch content */}
              <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] sm:w-[140%] bg-white/90 backdrop-blur-md ${activeCard === 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} transition-all duration-300 p-3 sm:p-6 lg:p-8 flex items-center justify-center rounded-xl pointer-events-none border border-white/40 shadow-2xl z-[100]`}>
                <div className="flex flex-col gap-1 sm:gap-2 lg:gap-3 w-full">
                  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 lg:gap-5 justify-center">
                    <div className="text-center p-2 sm:p-3 lg:p-4 rounded shadow-sm border border-gray-200" style={{ backgroundColor: 'rgb(var(--light-cream))' }}>
                      <div className="text-lg sm:text-xl lg:text-2xl font-black mb-0.5 sm:mb-1 tracking-tight">Limited</div>
                      <div className="font-mono text-[10px] sm:text-xs lg:text-sm uppercase text-gray-600">Manual</div>
                    </div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-400">→</div>
                    <div className="text-center p-2 sm:p-3 lg:p-4 rounded shadow-sm border border-gray-200" style={{ backgroundColor: 'rgb(var(--dusty-rose-pink))' }}>
                      <div className="text-lg sm:text-xl lg:text-2xl font-black mb-0.5 sm:mb-1 tracking-tight">100%</div>
                      <div className="font-mono text-[10px] sm:text-xs lg:text-sm uppercase text-gray-600">Transparent</div>
                    </div>
                  </div>
                  <div className="text-[10px] sm:text-xs lg:text-sm text-gray-700 text-center leading-tight">
                    <span className="font-black">Modules:</span> Digital Passport + Reports + History
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar: Deployment & Scalability */}
          {/* Bottom bar — Mobility & Scalability at the Core (improved) */}
<style>{`
  .elevSoft { box-shadow: 0 10px 24px rgba(10,10,10,0.10); }
  .pill { border-radius: 14px; padding: 6px 10px; font-weight: 600; font-size: 12px; display: inline-block; }
  @media (prefers-reduced-motion: reduce) {
    .anim-soft { transition: none !important; }
  }
`}</style>

{(() => {
  const accent = {
    border: '#F3D9C8', // peach border
    rule: '#EDC7B2',   // top rule
    pillBg: '#F9E9DF', // pill bg
    pillText: '#7A5C4A'
  };

  const chips = [
    {
      key: 5,
      title: "Deploy Anywhere",
      blurb: "Edge-native architecture runs on mobile without heavy setup or persistent connectivity.",
    },
    {
      key: 6,
      title: "Scale Effortlessly",
      blurb: "One AI model orchestrates inspections with linear scalability across agents.",
    },
    {
      key: 7,
      title: "Monetize Insight",
      blurb: "Continuous inspection data becomes analytics & feedback assets for partners via DVP.",
    }
  ];

  return (
    <div
      className="p-3 sm:p-4 lg:p-5 bg-black text-white rounded-2xl border border-white/10 elevSoft anim-soft"
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start">
        {/* Left: headline + summary + pill */}
        <div className="lg:col-span-1">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black leading-tight">
            MOBILITY & SCALABILITY<br className="hidden sm:block" /> AT THE CORE
          </h3>
          <div className="mt-2 text-sm text-white">
            Scale from a single handheld scan to a fully autonomous multi-agent fleet.
          </div>
          <div className="mt-3">
            <span
              className="pill"
              style={{
                background: accent.pillBg,
                color: accent.pillText,
                border: `1px solid ${accent.border}`
              }}
            >
              Edge-native • API-ready • Offline-first
            </span>
          </div>
        </div>

        {/* Right: three chips */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {chips.map((c) => (
            <div
              key={c.key}
              className="relative group bg-white/6 hover:bg-white/10 border border-white/10 rounded-xl p-3 anim-soft cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-white/40"
              role="button"
              tabIndex={0}
              aria-expanded={activeCard === c.key}
              onMouseEnter={() => setActiveCard(c.key)}
              onMouseLeave={() => setActiveCard(null)}
              onClick={() => setActiveCard(activeCard === c.key ? null : c.key)}
              onKeyDown={(e) => e.key === 'Enter' && setActiveCard(activeCard === c.key ? null : c.key)}
            >
              <h4 className="text-sm sm:text-base font-medium text-white">
                {c.title}
              </h4>
              <div className="mt-2 text-sm sm:text-base text-white">
                {c.blurb}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
})()}

              </div>
            </div>
          </div>
        
  )
}