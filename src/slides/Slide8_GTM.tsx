import { useState, useEffect } from 'react';
import { animate } from 'animejs'

export default function Slide8_GTM() {
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);

  useEffect(() => {
    const titleEl = document.querySelector('.gtm-title')
    const subtitleEl = document.querySelector('.gtm-subtitle')

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

  const phases = [
    {
      window: "Phase 1: 0–6 MONTHS",
      badgeBg: "rgb(var(--light-cream))",
      cardBg: "rgb(var(--bright-cream))",
      title: "Validate speed & accuracy on edge",
      market: "Used-car dealers & rental fleets",
      goal: "Prove ≥70% faster inspections; seed baseline dataset",
      outcomes: ["Two pilot deployments completed", "One repair network pilot signed"]
    },
    {
      window: "Phase 2: 6–12 MONTHS",
      badgeBg: "rgb(var(--chalky-light-blue))",
      cardBg: "rgb(var(--bright-blue))",      title: "Monetize Claims Vision API",
      market: "Insurers & claims processors",
      goal: "$500K ARR pilot via claim automation & DVP integration",
      outcomes: ["Two insurance carriers live", "Repair network integrations completed", "Dealer network contract closed"]
    },
    {
      window: "Phase 3: 12–18 MONTHS",
      badgeBg: "rgb(var(--soft-mint-green))",
      cardBg: "rgb(var(--bright-mint))",      title: "Launch OEM SaaS suite",
      market: "OEMs & dealership networks",
      goal: "VPC integrations; audit-ready inspections for rollout",
      outcomes: ["Two repair networks live", "DVP API integration with dealer network", "Two OEM contracts closed"]
    },
    {
      window: "Phase 4: 18–24 MONTHS",
      badgeBg: "rgb(var(--pale-peach))",
      cardBg: "rgb(var(--bright-peach))",
      title: "Scale autonomy & multi-agent ops",
      market: "Fleet logistics & OEM storage yards",
      goal: "Fleet-level inspections  ground agents",
      outcomes: ["Multi-OEM deployments across APAC", "Partnership with global logistics operator"]
    }
  ];

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
        <h2 className="gtm-title text-4xl sm:text-5xl lg:text-6xl font-black mb-2 sm:mb-3 opacity-0">GO-TO-MARKET</h2>
        <p className="gtm-subtitle text-lg sm:text-xl lg:text-2xl font-body mb-4 sm:mb-5 opacity-0">
          Mobile-first activation followed by SaaS monetization, paves our way to autonomous agents.
        </p>

        {/* Four-phase grid (matches deck spacing & card style) */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 lg:gap-5 items-stretch"
        >
          {phases.map((p, i) => (
            <div 
              key={i} 
              className="relative rounded-lg border border-gray-200 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus-within:ring-2 focus-within:ring-black/20 hover:z-[200] p-4 sm:p-5 lg:p-6 flex flex-col group cursor-pointer hover:scale-[1.02] hover:-translate-y-1 min-h-[220px] sm:min-h-[240px]" 
              style={{ backgroundColor: p.cardBg }}
              onMouseEnter={() => setHoveredPhase(i)}
              onMouseLeave={() => setHoveredPhase(null)}
              onClick={() => setHoveredPhase(hoveredPhase === i ? null : i)}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${p.title}`}
              onKeyDown={(e) => e.key === 'Enter' && setHoveredPhase(hoveredPhase === i ? null : i)}
            >
              <div
                className="font-mono text-xs sm:text-sm mb-2 sm:mb-3 px-3 py-1.5 inline-block border border-black/20 rounded-md font-bold self-start"
                style={{ backgroundColor: p.badgeBg, color: "#222" }}
              >
                {p.window}
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-black mb-2 sm:mb-3 leading-tight">{p.title}</h3>
              <p className="font-body text-xs sm:text-sm mb-2 leading-relaxed"><strong>Market:</strong> {p.market}</p>
              <p className="font-body text-xs sm:text-sm leading-relaxed"><strong>Goal:</strong> {p.goal}</p>

              {/* Hover State Overlay */}
                <div
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] sm:w-[140%] bg-white/90 backdrop-blur-md text-black rounded-xl p-3 sm:p-6 lg:p-8 flex items-center justify-center rounded-xl pointer-events-none border border-white/40 shadow-2xl z-[100] ${hoveredPhase === i ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} transition-all duration-300`}
                >
                  <div className="flex flex-col gap-1.5 sm:gap-2 lg:gap-3 w-full">
                    <h4 className="font-black text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 lg:mb-4 text-center">Expected Outcomes</h4>
                    <ul className="text-[10px] sm:text-xs lg:text-sm space-y-1.5 sm:space-y-2 lg:space-y-2.5 w-full">
                      {p.outcomes.map((o, idx) => <li key={idx} className="flex items-start gap-1.5 sm:gap-2.5 border-b border-gray-200 pb-1.5 sm:pb-2 last:border-b-0">
                        <span className="text-green-500 text-sm sm:text-base flex-shrink-0 mt-0.5">✓</span>
                        <span className="leading-tight sm:leading-relaxed">{o}</span>
                      </li>)}
                    </ul>
                  </div>
                </div>
            </div>
          ))}
        </div>

        {/* Partnership ecosystem - Black background with compact cards */}
        <div 
          className="mt-5 sm:mt-6 bg-black text-white rounded-2xl min-h-[140px] sm:min-h-[150px] shadow-md border border-gray-200 flex flex-col sm:flex-row gap-5 sm:gap-6 lg:gap-8 items-start p-5 sm:p-6 lg:p-7"
        >          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-4 sm:mb-5 flex items-center gap-2 sm:gap-3">
            <span className="w-1.5 sm:w-2 h-10 sm:h-20 bg-white rounded-full" />
            PARTNERSHIP ECOSYSTEM
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                        <div className="flex flex-col p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:bg-white/10 transition-all duration-300">
              <h4 className="text-sm sm:text-base font-black uppercase mb-1.5">Technology Partners</h4>
              <p className="text-xs sm:text-sm text-white leading-relaxed border-t border-white/10 pt-2">LiDAR, Robotics</p>
            </div>
            <div className="flex flex-col p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:bg-white/10 transition-all duration-300">
              <h4 className="text-sm sm:text-base font-black uppercase mb-1.5">Integration Partners</h4>
              <p className="text-xs sm:text-sm text-white leading-relaxed border-t border-white/10 pt-2">ERP, DMS, Insurance APIs</p>
            </div>
            <div className="flex flex-col p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:bg-white/10 transition-all duration-300">
              <h4 className="text-sm sm:text-base font-black uppercase mb-1.5">Strategic Clients</h4>
              <p className="text-xs sm:text-sm text-white leading-relaxed border-t border-white/10 pt-2">OEMs, Insurers, Fleets, VPCs</p>
            </div>
            <div className="flex flex-col p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:bg-white/10 transition-all duration-300">
              <h4 className="text-sm sm:text-base font-black uppercase mb-1.5">Governance Allies</h4>
              <p className="text-xs sm:text-sm text-white leading-relaxed border-t border-white/10 pt-2">ISO 42001, AI compliance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
