import { useEffect, useRef } from 'react'
import { animate } from 'animejs'
import * as d3 from 'd3'

interface MarketData {
  segment: string
  value: number
  percentage: number
  color: string
}

const marketData: MarketData[] = [
  { segment: 'OEM PDI', value: 4.3, percentage: 45, color: '#AAC8E2' },
  { segment: 'Dealer', value: 2.0, percentage: 20, color: '#D0E8E1' },
  { segment: 'Fleet', value: 1.8, percentage: 18, color: '#E6C8C8' },
  { segment: 'Insurance', value: 1.5, percentage: 17, color: '#F6D9C9' },
]

export default function Slide3_Market() {
  const chartRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const titleEl = document.querySelector('.market-title')
    const subtitleEl = document.querySelector('.market-subtitle')

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

    if (!chartRef.current || !containerRef.current) return

    const svg = d3.select(chartRef.current)
    
    const render = () => {
      const rect = containerRef.current!.getBoundingClientRect()
      const isMobile = rect.width < 640
      const margin = isMobile 
        ? { top: 10, right: 10, bottom: 35, left: 45 }
        : { top: 10, right: 15, bottom: 35, left: 55 }
      const width = Math.max(320, rect.width)
      const height = Math.max(260, rect.height * 0.95)

      svg.attr('width', width).attr('height', height)
      svg.selectAll('*').remove()

      const x = d3.scaleBand()
        .domain(marketData.map(d => d.segment))
        .range([margin.left, width - margin.right])
        .padding(0.3)

      const y = d3.scaleLinear()
        .domain([0, d3.max(marketData, d => d.value)! * 1.2])
        .nice()
        .range([height - margin.bottom, margin.top])

      // Bars
      svg.selectAll('rect')
        .data(marketData)
        .join('rect')
        .attr('x', d => x(d.segment)!)
        .attr('y', height - margin.bottom)
        .attr('width', x.bandwidth())
        .attr('height', 0)
        .attr('fill', d => d.color)
        .attr('stroke', '#000')
        .attr('stroke-width', 2)
        .transition()
        .duration(800)
        .delay((_, i) => i * 80)
        .attr('y', d => y(d.value))
        .attr('height', d => height - margin.bottom - y(d.value))

      // Labels
      svg.selectAll('.value-label')
        .data(marketData)
        .join('text')
        .attr('class', 'value-label')
        .attr('x', d => x(d.segment)! + x.bandwidth() / 2)
        .attr('y', d => y(d.value) - 6)
        .attr('text-anchor', 'middle')
        .attr('font-family', 'IBM Plex Mono, monospace')
        .attr('font-size', Math.max(12, Math.round(width / 60)) + 'px')
        .attr('font-weight', 'bold')
        .attr('opacity', 0)
        .text(d => `$${d.value}B`)
        .transition()
        .duration(400)
        .delay((_, i) => i * 100 + 600)
        .attr('opacity', 1)

      // x-axis
      svg.append('g')
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x))
        .selectAll('text')
        .attr('font-family', 'IBM Plex Mono, monospace')
        .attr('font-size', Math.max(10, Math.round(width / 90)) + 'px')

      // y-axis
      svg.append('g')
        .attr('transform', `translate(${margin.left},0)`)
        .call(d3.axisLeft(y).ticks(5).tickFormat(d => `$${d}B`))
        .selectAll('text')
        .attr('font-family', 'IBM Plex Mono, monospace')
        .attr('font-size', Math.max(10, Math.round(width / 90)) + 'px')
    }

    render()

    const ro = new ResizeObserver(() => render())
    ro.observe(containerRef.current)
    return () => ro.disconnect()
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
        <h2 className="market-title text-4xl sm:text-5xl lg:text-6xl font-black mb-2 sm:mb-3 opacity-0">MARKET OPPORTUNITY</h2>
        <p className="market-subtitle text-lg sm:text-xl lg:text-2xl font-body mb-4 sm:mb-5 lg:mb-6 opacity-0">There is a $10B market transformation potential across customer segments.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
          {/* Left: D3 Chart */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-2 sm:p-3 md:p-5 flex flex-col">
            <div ref={containerRef} className="flex-1 flex items-center justify-center w-full min-h-[280px]">
              <svg ref={chartRef} style={{ maxWidth: '100%', height: '100%' }}></svg>
            </div>
            <div className="mt-2 pt-2 border-t border-gray-200">
              <p className="text-lg sm:text-xl lg:text-2xl font-mono font-black text-center">Total Addressable Market: $9.6B</p>
            </div>
          </div>

          {/* Right: Market Details */}
          <div className="flex flex-col gap-3 w-full">
            <div className="flex-1 rounded-2xl shadow-md border border-gray-200 p-4 relative group cursor-pointer transition-transform hover:scale-105 overflow-hidden" style={{ backgroundColor: '#AAC8E2' }}>
              <h4 className="font-black text-base sm:text-xl text-gray-900">OEM Pre-Delivery (45%)</h4>
              <p className="font-body text-sm sm:text-base text-gray-800">54M inspections/year × $80 = $4.3B</p>
              <div className="absolute inset-0 bg-black/90 p-3 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-xs sm:text-sm md:text-base font-body leading-relaxed">Pre-delivery inspection market for new vehicles before customer delivery. Includes QC checks, cosmetic inspection, & compliance verification at facilities & ports.</p>
              </div>
            </div>

            <div className="flex-1 rounded-2xl shadow-md border border-gray-200 p-4 relative group cursor-pointer transition-transform hover:scale-105 overflow-hidden" style={{ backgroundColor: '#D0E8E1' }}>
              <h4 className="font-black text-base sm:text-xl text-gray-900">Dealer & Certified Used (20%)</h4>
              <p className="font-body text-sm sm:text-base text-gray-800">50M inspections/year × $40 = $2.0B</p>
              <div className="absolute inset-0 bg-black/90 p-3 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-xs sm:text-sm md:text-base font-body leading-relaxed">Certification programs for used vehicles at dealerships. Includes multi-point inspections, reconditioning verification, & QA for certified pre-owned programs.</p>
              </div>
            </div>

            <div className="flex-1 rounded-2xl shadow-md border border-gray-200 p-4 relative group cursor-pointer transition-transform hover:scale-105 overflow-hidden" style={{ backgroundColor: '#E6C8C8' }}>
              <h4 className="font-black text-base sm:text-xl text-gray-900">Fleet & Logistics (18%)</h4>
              <p className="font-body text-sm sm:text-base text-gray-800">120M inspections/year × $15 = $1.8B</p>
              <div className="absolute inset-0 bg-black/90 p-3 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-xs sm:text-sm md:text-base font-body leading-relaxed">Regular inspections for rental fleets, corporate vehicles, & logistics companies. Includes damage assessment, maintenance verification, & documentation.</p>
              </div>
            </div>

            <div className="flex-1 rounded-2xl shadow-md border border-gray-200 p-4 relative group cursor-pointer transition-transform hover:scale-105 overflow-hidden" style={{ backgroundColor: '#F6D9C9' }}>
              <h4 className="font-black text-base sm:text-xl text-gray-900">Insurance (17%)</h4>
              <p className="font-body text-sm sm:text-base text-gray-800">30M inspections/year × $50 = $1.5B</p>
              <div className="absolute inset-0 bg-black/90 p-3 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-xs sm:text-sm md:text-base font-body leading-relaxed">Claims verification and underwriting inspections for insurance companies. Includes damage assessment, pre-policy inspections, & fraud detection workflows.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}