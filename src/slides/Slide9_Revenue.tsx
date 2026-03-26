import React, { useEffect } from 'react';
import { animate } from 'animejs'
const RevenueModelChart = React.lazy(() => import('../components/RevenueModelChart'));

export default function Slide9_Revenue() {
  useEffect(() => {
    const titleEl = document.querySelector('.revenue-title')
    const subtitleEl = document.querySelector('.revenue-subtitle')

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
    <div className="h-full w-full bg-white relative overflow-auto">
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
        <h2 className="revenue-title text-4xl sm:text-5xl lg:text-6xl font-black mb-2 sm:mb-3 opacity-0">REVENUE MODEL</h2>
        <p className="revenue-subtitle text-lg sm:text-xl lg:text-2xl font-body mb-4 sm:mb-5 opacity-0">Our usage-based recurring revenue model is highly scalable and customer-friendly.</p>

        {/* Sticky header for ARR visibility */}
        <div className="sticky top-0 bg-white z-10 pb-1 border-b-2 border-gray-200 mb-2">
          <h3 className="text-lg sm:text-xl lg:text-xl font-black flex items-center gap-3">
            <span className="w-2 h-8 bg-black rounded-full" />
            Annual Recurring Revenue (ARR)
          </h3>
        </div>
        
        {/* Interactive revenue chart replaces the static rows */}
        <div className="w-full flex-1 min-h-0" style={{ height: '420px' }}>
          {/* Lazy-load the chart to avoid requiring recharts at module-eval time */}
          <React.Suspense fallback={<div className="p-6">Loading chart…</div>}>
            <RevenueModelChart />
          </React.Suspense>
        </div>
      </div>
    </div>
  )
}
