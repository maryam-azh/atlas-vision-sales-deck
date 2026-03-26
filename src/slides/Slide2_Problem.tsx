import { useEffect } from 'react'
import { animate } from 'animejs'
import workshopImg from '../assets/workshop1.jpg';
import storageImg from '../assets/fleet.jpg';

export default function Slide2_Problem() {
  useEffect(() => {
    const titleEl = document.querySelector('.problem-title')
    const subtitleEl = document.querySelector('.problem-subtitle')

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
      
      <div className="max-w-7xl mx-auto relative z-10 p-6 md:p-8 lg:p-10">
        <h2 className="problem-title text-4xl sm:text-5xl lg:text-6xl font-black mb-2 sm:mb-3 opacity-0" data-testid="problem-title">THE PROBLEM</h2>
        <p className="problem-subtitle text-lg sm:text-xl lg:text-2xl font-body mb-4 sm:mb-5 opacity-0" data-testid="problem-description">Manual inspections are inconsistent, costly, and slow.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
          {/* Left: Visual */}
          <div className="flex flex-col gap-3 lg:gap-4">
            {/* Image container 1: Manual inspection */}
            <div className="h-44 sm:h-52 lg:h-52 rounded-2xl overflow-hidden border border-black/10 shadow-md bg-primary-peach">
              <div className="relative h-full">
                <img
                  src={workshopImg}
                  alt="Manual inspection"
                  className="w-full h-full object-cover object-center brightness-110"
                  data-testid="problem-image-manual"
                />
                {/* Semi-transparent dusty overlay */}
                <div className="absolute inset-0 bg-gray-600/25 pointer-events-none"></div>
                <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/30 to-transparent">
                  <p className="text-white text-xl font-bold tracking-tight" style={{
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.4)'
                  }}>
                    {/* Manual inspection: Technician with clipboard */}
                  </p>
                </div>
              </div>
            </div>

            {/* Image container 2: Delivery yard */}
            <div className="h-44 sm:h-52 lg:h-52 rounded-2xl overflow-hidden border border-black/10 shadow-md bg-primary-lavender">
              <div className="relative h-full">
                <img
                  src={storageImg}
                  alt="Crowded delivery yard"
                  className="w-full h-full object-cover object-center brightness-110"
                  data-testid="problem-image-yard"
                />
                {/* Semi-transparent dusty overlay */}
                <div className="absolute inset-0 bg-gray-600/25 pointer-events-none"></div>
                <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/30 to-transparent">
                  <p className="text-white text-xl font-bold tracking-tight" style={{
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.4)'
                  }}>
                    {/* Crowded delivery yard showing delays */}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Pain Points - reduced width for alignment */}
          <div className="flex flex-col lg:h-full items-start justify-between gap-4 lg:gap-4 lg:max-w-7xl">
            <h3 className="text-2xl sm:text-5xl lg:text-3xl font-black mb-2 flex items-center gap-3">
              <span className="w-2 h-20 bg-black rounded-full flex-shrink-0"></span>
              <span>50M+ vehicles are inspected <br />manually each year</span>
            </h3>

            <div className="bg-black text-white rounded-2xl shadow-md border border-gray-200 p-5 lg:p-6">
              {/* <div className="bg-black text-white p-6 rounded-xl"> */}
                <h4 className="text-xl sm:text-2xl font-black mb-4">KEY PAIN POINTS</h4>
                <ul className="space-y-3 font-body text-base sm:text-lg">
                  <li>• <strong>Inconsistent results:</strong> Up to 30% of defects undetected</li>
                  <li>• <strong>Delivery bottlenecks:</strong> 20–30 minutes per vehicle</li>
                  <li>• <strong>High cost of errors:</strong> Hundreds of millions annually</li>
                  <li>• <strong>No digital traceability:</strong> Paper-based, no analytics</li>
                </ul>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}