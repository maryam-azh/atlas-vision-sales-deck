import { useEffect } from 'react'
import { animate } from 'animejs'
import UserJourney from '../components/UserJourney'

export default function Slide4_Solution() {
  useEffect(() => {
    const titleEl = document.querySelector('.solution-title')
    const subtitleEl = document.querySelector('.solution-subtitle')
    const boxes = document.querySelectorAll('.solution-box')

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

    // Animate feature boxes
    boxes.forEach((box, index) => {
      animate(box, {
        translateY: { from: 40, to: 0 },
        opacity: { from: 0, to: 1 },
        duration: 800,
        delay: 500 + (index * 150),
        ease: 'outExpo',
      })
    })
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
        <h2 className="solution-title text-4xl sm:text-5xl lg:text-6xl font-black mb-2 sm:mb-3 opacity-0">THE SOLUTION</h2>
        <p className="solution-subtitle text-lg sm:text-xl lg:text-2xl font-body mb-4 sm:mb-5 opacity-0">Mobile Autonomy Powered by AI for Your Vehicle Pre-Delivery Inspection Workflows.</p>

        <div className="flex flex-col gap-1">
          
          {/* Feature boxes - Equal height on desktop, flexible on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
            <div className="solution-box bg-white rounded-2xl shadow-md border border-gray-200 p-4 sm:p-5 flex flex-col opacity-0">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black mb-2 sm:mb-3">
                MOBILE & AGENTIC
              </h3>
              <p className="font-body text-sm sm:text-base flex-1">
                <strong>Mobile AI agents orchestrate inspection tasks verified by human oversight.</strong>
              </p>
            </div>

            <div className="solution-box bg-white rounded-2xl shadow-md border border-gray-200 p-4 sm:p-5 flex flex-col opacity-0">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black mb-2 sm:mb-3">
                CUSTOMER CENTRIC
              </h3>
              <p className="font-body text-sm sm:text-base flex-1">
                <strong>Our team of automotive experts guide enterprise bridging to AI-enabled workflows.</strong>
              </p>
            </div>

            <div className="solution-box bg-white rounded-2xl shadow-md border border-gray-200 p-4 sm:p-5 flex flex-col opacity-0">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black mb-2 sm:mb-3">
                SCALABLE & AUTONOMOUS
              </h3>
              <p className="font-body text-sm sm:text-base flex-1">
                <strong>Mobile robotics enable inspection operations safely with minimal human intervention.</strong>
              </p>
            </div>
          </div>

          {/* User Journey - Takes remaining space with guaranteed visibility */}
          <div className="min-h-[192px] sm:min-h-[224px] lg:min-h-[240px] flex items-center justify-center">
            <div className="w-full h-full">
              <UserJourney />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}