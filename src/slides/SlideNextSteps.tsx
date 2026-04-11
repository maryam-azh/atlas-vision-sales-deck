import { useEffect } from 'react'
import { animate } from 'animejs'

const steps = [
  {
    number: '1',
    title: 'Schedule for Pre-discovery',
    items: ['Allocate ownership', 'Define priorities and map ROI'],
  },
  {
    number: '2',
    title: 'Align on Methodology',
    items: ['Consensus on prerequisites', 'Agree on deliverables'],
  },
]

export default function SlideNextSteps() {
  useEffect(() => {
    animate('.ns-heading', {
      opacity: { from: 0, to: 1 },
      translateY: { from: 30, to: 0 },
      duration: 800,
      ease: 'outExpo',
    })
    document.querySelectorAll('.ns-step').forEach((el, i) => {
      animate(el, {
        opacity: { from: 0, to: 1 },
        translateY: { from: 20, to: 0 },
        duration: 600,
        delay: 400 + i * 200,
        ease: 'outExpo',
      })
    })
  }, [])

  return (
    <div className="h-full w-full bg-white flex flex-col overflow-hidden">
      <div className="flex-1 min-h-0 flex flex-row items-center px-16 lg:px-24 gap-20">

        {/* Left heading */}
        <div className="ns-heading opacity-0 shrink-0 w-[22%]">
          <h2 className="text-3xl lg:text-4xl font-black text-[#081E4C] leading-tight">
            NEXT STEPS
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-row gap-16 lg:gap-24 flex-1">
          {steps.map((step, i) => (
            <div key={i} className="ns-step opacity-0 flex flex-col gap-4">
              {/* Number + gold underline */}
              <div className="flex flex-col gap-1">
                <span className="text-5xl lg:text-6xl font-light leading-none" style={{ color: '#DAB954' }}>
                  {step.number}
                </span>
                <div className="w-12 h-[2px]" style={{ backgroundColor: '#DAB954' }} />
              </div>
              {/* Title */}
              <h3 className="text-lg lg:text-xl font-black text-[#081E4C] leading-snug">
                {step.title}
              </h3>
              {/* Items */}
              <ul className="flex flex-col gap-1">
                {step.items.map((item, j) => (
                  <li key={j} className="text-sm lg:text-base font-body text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Page number */}
      <div className="px-16 lg:px-24 pb-4 text-right">
        <span className="text-xs text-gray-400">9</span>
      </div>
    </div>
  )
}
