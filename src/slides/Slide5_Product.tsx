import { useEffect } from 'react'
import { animate } from 'animejs'

export default function Slide5_Product() {
  const layers = [
    {
      icon: "",
      title: "Multimodal Vision Hardware",
      color: "purple",
      modules: [ "Mobile Device", "Lighting","Sensors","Robots with Autonomous Mobility Control"],
      outcome: "Data capture across diverse inspection environments",
      category: "EDGE LAYER",
      order: 1
    },
    {
      icon: "",
      title: "Agentic Orchestrator",
      color: "blue",
      modules: ["Policy Framework", "Context Manager", "Governance & Security", "Integration Manager"],
      outcome: "Intelligent & explainable operation across inspection workflows",
      category: "CONTROL LAYER",
      order: 2
    },
    {
      icon: "",
      title: "Multimodal Vision Engine",
      color: "white",
      modules: ["Agentic Vision-Language Models",  "Visual Reasoning Models"],
      outcome: "Defects detected and classified with contextual understanding",
      category: "AI CORE",
      isCore: true,
      order: 3
    },
    {
      icon: "",
      title: "Continuous Learning ",
      color: "peach",
      modules: ["Technician Feedback", "RLHF Pipeline", "Synthetic Data Gen", "Dataset Versioning"],
      outcome: "Continuous model accuracy improvement and dataset management",
      category: "LEARNING LAYER",
      order: 4
    },
    {
      icon: "",
      title: "Human Interface",
      color: "cream",
      modules: ["Verification and Review","Alerting & Notifications", "Analytics Dashboard"],
      outcome: "Validated defects, actionable insights, and seamless human-AI collaboration",
      category: "HUMAN INTERFACE",
      order: 5
    },
    {
      icon: "",
      title: "Enterprise Integration",
      color: "pink",
      modules: ["Workshop Connector", "ERP Connector", "VPC Gateway Connector", "Central Dashboard"],
      outcome: "Supply chain quality intelligence and Enterprise workflow automation",
      category: "INTEGRATION LAYER",
      order: 6
    },
    {
      icon: "",
      title: "Analytics & Reporting",
      color: "mint",
      modules: ["Compliance Dashboard", "Explainable AI Reports", "Performance Monitoring", "Audit Trails"],
      outcome: "Regulatory compliance, transparency, and continuous system oversight",
      category: "CROSS-CUTTING LAYER",
      order: 7
    }
  ];

  const colorClasses = {
    pink: { bg: "rgb(var(--bright-pink))" },
    blue: { bg: "rgb(var(--bright-blue))" },
    cream: { bg: "rgb(var(--bright-cream))" },
    peach: { bg: "rgb(var(--bright-peach))" },
    mint: { bg: "rgb(var(--bright-mint))" },
    purple: { bg: "rgb(var(--bright-purple))" },
    white: { bg: "#FFFFFF" }
  };

  useEffect(() => {
    const titleEl = document.querySelector('.architecture-title')
    const subtitleEl = document.querySelector('.architecture-subtitle')

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
      {/* Background texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(0,0,0,0.08) 50px, rgba(0,0,0,0.08) 51px)',
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(0,0,0,0.08) 50px, rgba(0,0,0,0.08) 51px)',
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 p-6 md:p-8 lg:p-8">
        {/* Header */}
        <div className="flex-shrink-0">
          <h2 className="architecture-title text-4xl sm:text-5xl lg:text-6xl font-black mb-2 sm:mb-3 opacity-0">SOLUTION ARCHITECTURE</h2>
          <p className="architecture-subtitle text-lg sm:text-xl lg:text-2xl font-body mb-4 sm:mb-5 opacity-0">
            We adapt to your evolving needs for modern vehicle inspection.</p>
        </div>

        {/* Mobile & Tablet: Simple Stacked/Grid Layout */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
            {layers.sort((a, b) => a.order - b.order).map((layer) => (
              <div key={layer.order} className={layer.isCore ? "sm:col-span-2" : ""}>
                {renderModule(layer, colorClasses, layer.isCore, true)}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Complex Architecture Layout with SVG */}
        <div className="hidden lg:block relative w-full" style={{ minHeight: '520px' }}>

          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            <defs>
              {/* Forward arrowhead (line end) */}
              <marker id="arr" markerWidth="6" markerHeight="6" refX="6" refY="2" orient="auto">
                <polygon points="0 0, 6 2, 0 4" fill="#6B7280" />
              </marker>
              {/* Backward arrowhead (line start, points outward) */}
              <marker id="arr-s" markerWidth="6" markerHeight="6" refX="0" refY="2" orient="auto">
                <polygon points="6 0, 0 2, 6 4" fill="#6B7280" />
              </marker>
            </defs>

            {/* ── A. Hardware ↔ Hub  |  CAPTURE / FEEDBACK  (two-way) ── */}
            <line x1="29.15%" y1="30%" x2="35%" y2="30%" stroke="#6B7280" strokeWidth="1.5" markerStart="url(#arr-s)" />
            <line x1="35%" y1="30%"  x2="35%" y2="46.5%" stroke="#6B7280" strokeWidth="1.5" />
            <line x1="35%" y1="46.5%" x2="38%" y2="46.5%" stroke="#6B7280" strokeWidth="1.5" markerEnd="url(#arr)" />
            <text x="29.5%" y="36%" fill="black" fontSize="10" fontWeight="bold" fontFamily="monospace">CAPTURE /</text>
            <text x="29.5%" y="39%" fill="black" fontSize="10" fontWeight="bold" fontFamily="monospace">FEEDBACK</text>

            {/* ── B. Vision Engine ↔ Hub  |  DETECT / CLASSIFY  (two-way) ── */}
            <line x1="50.075%" y1="27%" x2="50.075%" y2="33%" stroke="#6B7280" strokeWidth="1.5" markerStart="url(#arr-s)" markerEnd="url(#arr)" />
            <text x="51.5%" y="29%" fill="black" fontSize="10" fontWeight="bold" fontFamily="monospace">DETECT /</text>
            <text x="51.5%" y="32%" fill="black" fontSize="10" fontWeight="bold" fontFamily="monospace">CLASSIFY</text>

            {/* ── C. Human Verification ↔ Hub  |  VALIDATE  (two-way) ── */}
            <line x1="72.85%" y1="30%" x2="65%" y2="30%" stroke="#6B7280" strokeWidth="1.5" markerStart="url(#arr-s)" />
            <line x1="65%" y1="30%"  x2="65%" y2="44%"  stroke="#6B7280" strokeWidth="1.5" />
            <line x1="65%" y1="44%"  x2="62.15%" y2="44%" stroke="#6B7280" strokeWidth="1.5" markerEnd="url(#arr)" />
            <text x="66%" y="38%" fill="black" fontSize="10" fontWeight="bold" fontFamily="monospace">VALIDATE</text>

            {/* ── D. Hub → Enterprise  |  SYSTEM UPDATES  (one-way) ── */}
            <line x1="62.15%" y1="56%" x2="68%"    y2="56%"   stroke="#6B7280" strokeWidth="1.5" />
            <line x1="68%"    y1="56%" x2="68%"    y2="69.5%" stroke="#6B7280" strokeWidth="1.5" />
            <line x1="68%"    y1="69.5%" x2="72.85%" y2="69.5%" stroke="#6B7280" strokeWidth="1.5" markerEnd="url(#arr)" />
            <text x="63%" y="54%" fill="black" fontSize="10" fontWeight="bold" fontFamily="monospace">SYSTEM UPDATES</text>

            {/* ── E. Continuous Learning ↔ Hub  |  DATASET / MODEL  (two-way) ── */}
            <line x1="50.075%" y1="60%" x2="50.075%" y2="66%" stroke="#6B7280" strokeWidth="1.5" markerStart="url(#arr-s)" markerEnd="url(#arr)" />
            <text x="52%" y="63%" fill="black" fontSize="10" fontWeight="bold" fontFamily="monospace">DATASET /</text>
            <text x="52%" y="66%" fill="black" fontSize="10" fontWeight="bold" fontFamily="monospace">MODEL</text>

            {/* ── F. Hub → Analytics  |  INSIGHTS  (one-way) ── */}
            <line x1="38%"    y1="56%" x2="32%"    y2="56%"   stroke="#6B7280" strokeWidth="1.5" />
            <line x1="32%"    y1="56%" x2="32%"    y2="69.5%" stroke="#6B7280" strokeWidth="1.5" />
            <line x1="32%"    y1="69.5%" x2="29.15%" y2="69.5%" stroke="#6B7280" strokeWidth="1.5" markerEnd="url(#arr)" />
            <text x="33%" y="54%" fill="black" fontSize="10" fontWeight="bold" fontFamily="monospace">INSIGHTS</text>

          </svg>

          {/* Components positioned as hexagon - HEXAGON TOPOLOGY */}
          {/* Top-left: Multimodal Vision Hardware */}
          <div className="absolute" style={{ top: '10%', left: '5%', width: '24.15%', height: '27%' }}>
            {renderModule(layers[0], colorClasses)}
          </div>
          
          {/* Top-center: Multimodal Vision Engine */}
          <div className="absolute" style={{ top: '0%', left: '38%', width: '24.15%', height: '27%' }}>
            {renderModule(layers[2], colorClasses, true)}
          </div>
          
          {/* Top-right: Human Verification Interface */}
          <div className="absolute" style={{ top: '10%', right: '3%', width: '24.15%', height: '27%' }}>
            {renderModule(layers[4], colorClasses)}
          </div>
          
          {/* Bottom-right: Enterprise Integration */}
          <div className="absolute" style={{ top: '56%', right: '3%', width: '24.15%', height: '27%' }}>
            {renderModule(layers[5], colorClasses)}
          </div>
          
          {/* Bottom-center: Continuous Learning */}
          <div className="absolute" style={{ top: '66%', left: '38%', width: '24.15%', height: '27%' }}>
            {renderModule(layers[3], colorClasses)}
          </div>
          
          {/* Bottom-left: Analytics & Reporting */}
          <div className="absolute" style={{ top: '56%', left: '5%', width: '24.15%', height: '27%' }}>
            {renderModule(layers[6], colorClasses)}
          </div>
          
          {/* Center: Agentic Orchestrator */}
          <div className="absolute" style={{ top: '33%', left: '38%', width: '24.15%', height: '27%', zIndex: 2 }}>
            {renderModule(layers[1], colorClasses)}
          </div>
        </div>

        {/* Data & Privacy Compliance Strip */}
        <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-gray-200">
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider flex-shrink-0">Data &amp; Privacy</span>
          {['GDPR Ready', 'Data Residency Controls', 'ISO 27001 Aligned', 'Audit Trails', 'EU AI Act Aligned'].map(tag => (
            <span key={tag} className="text-[10px] font-bold px-2 py-0.5 rounded border border-gray-300 bg-gray-50 text-gray-600">
              {tag}
            </span>
          ))}
          <span className="text-[10px] text-gray-400 font-body ml-1">— enforced via the Governance &amp; Security module in the Control Layer</span>
        </div>
      </div>
    </div>
  );
}

function renderModule(layer: any, colorClasses: any, isCore = false, isMobile = false) {
  const colorKey = layer.color as keyof typeof colorClasses;
  const colors = colorClasses[colorKey];
  
  return (
    <div
      className={`h-full rounded-xl ${isMobile ? 'p-4 sm:p-5' : 'p-4'} flex flex-col justify-center relative cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 group overflow-hidden shadow-md ${isMobile ? 'min-h-[180px]' : ''}`}
      style={{ backgroundColor: colors.bg, border: isCore ? '3px solid #000' : '1px solid rgba(0,0,0,0.15)' }}
    >
      {/* Category Badge */}
      <div className="absolute top-2 right-2">
        <span className={`${isMobile ? 'text-[10px]' : 'text-[9px]'} font-bold px-2 py-0.5 rounded bg-black text-white uppercase tracking-wide`}>
          {layer.category}
        </span>
      </div>

      {/* Icon */}
      {layer.icon && <div className={`${isCore ? 'text-5xl' : 'text-4xl'} mb-2 opacity-90`}>{layer.icon}</div>}

      {/* Title */}
      <div className={`${isMobile ? (isCore ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl') : (isCore ? 'text-lg' : 'text-base')} text-black leading-tight pr-12 font-body font-bold`}>
        {layer.title}
      </div>

      {/* Hover Overlay with Details */}
      <div className="absolute inset-0 bg-black/95 p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center overflow-y-auto">
        <div className="mb-1">
          <h4 className={`${isMobile ? 'text-base sm:text-lg' : (isCore ? 'text-sm' : 'text-xs')} font-black text-white mb-2 leading-tight`}>
            {layer.title}
          </h4>
          
          {/* Modules */}
          <div className="flex flex-wrap gap-1 mb-2">
            {layer.modules.map((module: string, idx: number) => (
              <span
                key={idx}
                className={`${isMobile ? 'text-xs' : 'text-[10px]'} px-1.5 py-0.5 bg-white/20 text-white rounded border border-white/40 font-medium leading-none`}
              >
                {module}
              </span>
            ))}
          </div>
        </div>

        {/* Outcome */}
        <div className="pt-3 border-t border-white/30">
          <p className={`${isMobile ? 'text-sm' : (isCore ? 'text-sm' : 'text-xs')} text-white leading-tight font-body`}>
            {layer.outcome}
          </p>
        </div>
      </div>
    </div>
  );
}