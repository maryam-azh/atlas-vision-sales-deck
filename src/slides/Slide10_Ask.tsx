import { useEffect } from 'react'
import { animate } from 'animejs'

export default function Slide10_Ask() {
  useEffect(() => {
    const titleEl = document.querySelector('.ask-title')
    const subtitleEl = document.querySelector('.ask-subtitle')

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
  
  const accent = {
    border: "rgb(var(--pale-peach))",
    rule: "rgb(var(--light-cream))",
    pillBg: "rgb(var(--soft-mint-green))",
    pillText: "rgb(var(--chalky-light-blue))"
  };
  
  const fundAllocation = [
    {
      percent: 40,
      label: "Product & AI",
      color: "rgb(var(--soft-mint-green))",
      activities: "Model refinement; iPhone edge + cloud orchestration; evaluation harness",
      outcomes: "TRL 7 inspection stack; ≥97% detection on priority classes; production-ready APIs"
    },
    {
      percent: 25,
      label: "Market Pilots",
      color: "rgb(var(--chalky-light-blue))",
      activities: "Fleet + insurer deployments; field ops; success playbooks",
      outcomes: "3 fleet + 2 insurer pilots live; baseline ROI & case studies captured"
    },
    {
      percent: 20,
      label: "Talent & Ops",
      color: "rgb(var(--light-cream))",
      activities: "Hire 2–3 core engineers; DevOps/MLOps; support runbooks",
      outcomes: "OEM pilot readiness; <X min> scan time; SLOs defined"
    },
    {
      percent: 15,
      label: "Contingency",
      color: "rgb(var(--pale-peach))",
      activities: "AI governance & security hardening; compliance buffer",
      outcomes: "Regulatory readiness; audit trail + DVP links; risk controls in place"
    }
  ];

  return (
    <div className="h-full w-full bg-white relative overflow-y-auto">
      {/* Background texture - Subtle square grid pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(0,0,0,0.08) 50px, rgba(0,0,0,0.08) 51px)',
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(0,0,0,0.08) 50px, rgba(0,0,0,0.08) 51px)',
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 pt-6 md:pt-8 lg:pt-10 px-6 md:px-8 lg:px-10 pb-4 md:pb-6 lg:pb-8">
        <h2 className="ask-title text-4xl sm:text-5xl lg:text-6xl font-black mb-2 sm:mb-3">THE ASK: US$800K</h2>
        <p className="ask-subtitle text-lg sm:text-xl lg:text-2xl font-body mb-3 sm:mb-4">
          First year investment will secure 5 pilot deployments across APAC.
        </p>

        {/* Main Content Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6 min-h-0">
          {/* LEFT — Use of Funds */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200 pt-4 px-5 pb-[15px] sm:pt-5 sm:px-6 sm:pb-[19px] lg:pt-5 lg:px-7 lg:pb-[23px] flex flex-col">
            <h3 className="text-2xl sm:text-3xl font-black mb-5 sm:mb-5 flex items-center gap-3">
              <span className="w-2 h-8 bg-black rounded-full"></span>
              USE OF FUNDS
            </h3>

            <div className="space-y-4 sm:space-y-3">
              {fundAllocation.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl border-2 border-black flex items-center justify-center font-black text-xl sm:text-2xl shadow-sm transform transition-all group-hover:scale-105"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.percent}%
                    </div>
                    <div className="flex-1">
                      <h4 className="font-black text-base sm:text-lg">{item.label}</h4>
                      <div className="h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{ width: `${item.percent * 2.5}%`, backgroundColor: item.color }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Tooltip */}
                  <div
                    className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity absolute inset-x-0 mx-auto max-w-xs mt-3 z-20 sm:top-1/2 sm:-translate-y-1/2 sm:left-24 sm:right-auto sm:min-w-[340px] lg:min-w-[360px]"
                    aria-hidden="true"
                  >
                    <div
                      className="rounded-2xl bg-white text-gray-800 shadow-2xl"
                      style={{ border: `2px solid ${accent.border}` }}
                    >
                      {/* Header */}
                      <div className="px-4 sm:px-5 pt-3 sm:pt-4 pb-2 sm:pb-3">
                        <div className="text-sm sm:text-base font-extrabold leading-tight">{item.label}</div>
                        <div
                          className="mt-2 sm:mt-3"
                          style={{ height: 2, backgroundColor: accent.rule, borderRadius: 2 }}
                        />
                      </div>

                      {/* Body */}
                      <div className="px-4 sm:px-5 pb-3 sm:pb-4 space-y-2 sm:space-y-3">
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wide text-gray-500">Activities</div>
                          <div className="text-xs sm:text-sm mt-1">{item.activities}</div>
                        </div>
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wide text-gray-500">Outcomes</div>
                          <div className="text-xs sm:text-sm mt-1">{item.outcomes}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        {/* RIGHT PANEL */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm pt-4 px-5 pb-[15px] text-black border border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-black mb-1 flex items-center gap-3">
              <span className="w-2 h-8 bg-black rounded-full"></span>
              12-MONTH OUTCOMES
            </h3>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
              <div className="bg-white rounded-xl p-2 border border-gray-300 shadow-sm hover:shadow-sm transition-all" style={{ backgroundColor: 'rgb(var(--soft-mint-green))' }}>
                <div className="text-3xl font-black mb-0.5 text-black">5</div>
                <div className="text-xs font-bold text-gray-700">Pilot Deployments</div>
              </div>
              <div className="rounded-xl p-2 border border-gray-300 shadow-sm hover:shadow-sm transition-all" style={{ backgroundColor: 'rgb(var(--chalky-light-blue))' }}>
                <div className="text-3xl font-black mb-0.5 text-black">TRL 7</div>
                <div className="text-xs font-bold text-gray-700">Technology Readiness</div>
              </div>
              <div className="bg-white rounded-xl p-2 border border-gray-300 shadow-sm hover:shadow-sm transition-all" style={{ backgroundColor: 'rgb(var(--pale-peach))' }}>
                <div className="text-3xl font-black mb-0.5 text-black">US$5.5M</div>
                <div className="text-xs font-bold text-gray-700">ARR Revenue Stream</div>
              </div>
            </div>

            {/* Detailed outcomes */}
            <div className="flex-1 space-y-2 font-body">
              <div className="bg-white rounded-xl p-2 border border-gray-200 hover:shadow-sm transition-all">
                <h4 className="font-black text-xl mb-2">Commercial Traction</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>Recurring enterprise revenue from APAC deployments</li>
                  <li>Strategic partnership with global logistics/fleet operator</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-2 border border-gray-200 hover:shadow-sm transition-all">
                <h4 className="font-black text-xl mb-2">Technical Milestones</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>Scalable autonomous inspections with coordinated robotics</li>
                  <li>Continuous learning via Digital Vehicle Passport system</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-2 border border-gray-200 hover:shadow-sm transition-all">
                <h4 className="font-black text-xl mb-2">Strategic Position</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>Leading AI inspection platform in APAC automotive sector</li>
                  <li>Enterprise compliance & partnership foundation established</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}