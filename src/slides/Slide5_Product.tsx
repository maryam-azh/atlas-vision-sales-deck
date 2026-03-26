import { useEffect } from 'react'
import { animate } from 'animejs'

export default function Slide5_Product() {
  const layers = [
    {
      icon: "",
      title: "Intelligent Robotic Systems",
      color: "purple",
      modules: ["Drones", "Ground Robots", "Mobile Vision", "Autonomous Mobility Control"],
      outcome: "24/7 inspection coverage and scalability across OEM yards",
      category: "EDGE LAYER",
      order: 1
    },
    {
      icon: "",
      title: "Agentic Orchestration",
      color: "blue",
      modules: ["Task Scheduler", "Policy Framework", "Context Manager"],
      outcome: "Predictable, explainable operation across inspection modes",
      category: "CONTROL LAYER",
      order: 2
    },
    {
      icon: "",
      title: "Multimodal AI Engine",
      color: "white",
      modules: ["Proprietary Vision-Language Models", "hybrid edge/cloud stack"],
      outcome: "Detects defects with high accuracy",
      category: "AI CORE",
      isCore: true,
      order: 3
    },
    {
      icon: "",
      title: "Continuous Learning & Data Pipeline",
      color: "peach",
      modules: ["Technician Feedback", "RLHF Pipeline", "Synthetic Data Gen", "Dataset Versioning"],
      outcome: "Continuous model accuracy improvement and dataset management",
      category: "LEARNING LAYER",
      order: 4
    },
    {
      icon: "",
      title: "Technician Assistant App",
      color: "cream",
      modules: ["iOS/Edge App", "Voice-Visual Interface"],
      outcome: "Human-in-loop trust and compliance",
      category: "HUMAN INTERFACE",
      order: 5
    },
    {
      icon: "",
      title: "Enterprise Integration",
      color: "pink",
      modules: ["Digital Vehicle Passport (DVP)", "ERP Connector", "VPC Gateway Connector", "Central Dashboard"],
      outcome: "Supply chain quality intelligence and VPC automation",
      category: "INTEGRATION LAYER",
      order: 6
    },
    {
      icon: "",
      title: "Governance & Analytics",
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
            Our product is adaptable to the evolving needs of modern vehicle inspection.</p>
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
        <div className="hidden lg:block relative w-full" style={{ minHeight: '460px', paddingBottom: '60px' }}>
        {/* Legend container - below main content, no overlap */}
        <div className="absolute left-0 flex gap-6 text-sm font-mono z-20" style={{ bottom: '5px' }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-0.5 bg-gray-600"></div>
            <span>Data Flow</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-0.5 border-t-2 border-dashed border-gray-600"></div>
            <span>Feedback Loop</span>
          </div>
        </div>

          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            {/* Connection: Edge → Control */}
            <line x1="29.15%" y1="13.5%" x2="38%" y2="13.5%" stroke="#6B7280" strokeWidth="3" markerEnd="url(#arrowhead)" />
            <text x="31.5%" y="11.5%" fill="black" fontSize="13" fontWeight="bold" fontFamily="monospace">CAPTURE</text>
            
            {/* Connection: Control → AI Core */}
            <line x1="50.075%" y1="27%" x2="50.075%" y2="33%" stroke="#6B7280" strokeWidth="3" markerEnd="url(#arrowhead)" />
            <text x="51.5%" y="30%" fill="black" fontSize="13" fontWeight="bold" fontFamily="monospace">ORCHESTRATE</text>
            
            {/* Connection: AI Core → Learning */}
            <line x1="66%" y1="46.5%" x2="72.85%" y2="46.5%" stroke="#6B7280" strokeWidth="3" strokeDasharray="6,4" markerEnd="url(#arrowhead-dashed)" />
            <text x="68%" y="44.5%" fill="black" fontSize="13" fontWeight="bold" fontFamily="monospace">LEARN</text>
            
            {/* Connection: AI Core → Human */}
            <line x1="34%" y1="46.5%" x2="17.075%" y2="46.5%" stroke="#6B7280" strokeWidth="3" />
            <line x1="17.075%" y1="46.5%" x2="17.075%" y2="66%" stroke="#6B7280" strokeWidth="3" markerEnd="url(#arrowhead)" />
            <text x="20%" y="56%" fill="black" fontSize="13" fontWeight="bold" fontFamily="monospace">VALIDATE</text>
            
            {/* Connection: Enterprise → Learning */}
            <line x1="62.15%" y1="79.5%" x2="68%" y2="79.5%" stroke="#6B7280" strokeWidth="3" strokeDasharray="6,4" />
            <line x1="68%" y1="79.5%" x2="68%" y2="62%" stroke="#6B7280" strokeWidth="3" strokeDasharray="6,4" />
            <line x1="68%" y1="62%" x2="84.575%" y2="62%" stroke="#6B7280" strokeWidth="3" strokeDasharray="6,4" />
            <line x1="84.575%" y1="62%" x2="84.575%" y2="60%" stroke="#6B7280" strokeWidth="3" strokeDasharray="6,4" markerEnd="url(#arrowhead-dashed)" />
            <text x="65%" y="77%" fill="black" fontSize="12" fontWeight="bold" fontFamily="monospace">FEEDBACK</text>
            
            {/* Connection: Human → Enterprise */}
            <line x1="29.15%" y1="79.5%" x2="38%" y2="79.5%" stroke="#6B7280" strokeWidth="3" markerEnd="url(#arrowhead)" />
            <text x="32%" y="77.5%" fill="black" fontSize="13" fontWeight="bold" fontFamily="monospace">INTEGRATE</text>

            {/* Connection: Governance → AI Engine */}
            <line x1="72.85%" y1="13.5%" x2="68%" y2="13.5%" stroke="#6B7280" strokeWidth="3" strokeDasharray="6,4" />
            <line x1="68%" y1="13.5%" x2="68%" y2="40%" stroke="#6B7280" strokeWidth="3" strokeDasharray="6,4" />
            <line x1="68%" y1="40%" x2="66%" y2="40%" stroke="#6B7280" strokeWidth="3" strokeDasharray="6,4" markerEnd="url(#arrowhead-governance)" />
            <text x="69%" y="27%" fill="black" fontSize="11" fontWeight="bold" fontFamily="monospace">GOVERN</text>
            
            {/* Connection: Governance → Learning */}
            <line x1="84.575%" y1="27%" x2="84.575%" y2="33%" stroke="#6B7280" strokeWidth="3" strokeDasharray="6,4" markerEnd="url(#arrowhead-governance)" />
            <text x="86%" y="30%" fill="black" fontSize="11" fontWeight="bold" fontFamily="monospace">MONITOR</text>
            
            {/* Connection: Governance → Enterprise */}
            <line x1="97%" y1="13.5%" x2="99%" y2="13.5%" stroke="#6B7280" strokeWidth="3" strokeDasharray="6,4" />
            <line x1="99%" y1="13.5%" x2="99%" y2="97%" stroke="#6B7280" strokeWidth="3" strokeDasharray="6,4" />
            <line x1="99%" y1="97%" x2="50.075%" y2="97%" stroke="#6B7280" strokeWidth="3" strokeDasharray="6,4" />
            <line x1="50.075%" y1="97%" x2="50.075%" y2="93%" stroke="#6B7280" strokeWidth="3" strokeDasharray="6,4" markerEnd="url(#arrowhead-governance)" />
            <text x="70%" y="95%" fill="black" fontSize="11" fontWeight="bold" fontFamily="monospace">AUDIT</text>

            {/* Arrow markers */}
            <defs>
              <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto">
                <polygon points="0 0, 6 2, 0 4" fill="#6B7280" />
              </marker>
              <marker id="arrowhead-dashed" markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto">
                <polygon points="0 0, 6 2, 0 4" fill="#6B7280" />
              </marker>
              <marker id="arrowhead-governance" markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto">
                <polygon points="0 0, 6 2, 0 4" fill="#6B7280" />
              </marker>
            </defs>
          </svg>

          {/* Components positioned absolutely for custom flow layout */}
          <div className="absolute" style={{ top: '0%', left: '5%', width: '24.15%', height: '27%' }}>
            {renderModule(layers[0], colorClasses)}
          </div>
          
          <div className="absolute" style={{ top: '0%', left: '38%', width: '24.15%', height: '27%' }}>
            {renderModule(layers[1], colorClasses)}
          </div>
          
          <div className="absolute" style={{ top: '33%', left: '34%', width: '32%', height: '27%', zIndex: 1 }}>
            {renderModule(layers[2], colorClasses, true)}
          </div>
          
          <div className="absolute" style={{ top: '0%', right: '3%', width: '24.15%', height: '27%' }}>
            {renderModule(layers[6], colorClasses)}
          </div>
          
          <div className="absolute" style={{ top: '33%', right: '3%', width: '24.15%', height: '27%' }}>
            {renderModule(layers[3], colorClasses)}
          </div>
          
          <div className="absolute" style={{ top: '66%', left: '5%', width: '24.15%', height: '27%' }}>
            {renderModule(layers[4], colorClasses)}
          </div>
          
          <div className="absolute" style={{ top: '66%', left: '38%', width: '24.15%', height: '27%' }}>
            {renderModule(layers[5], colorClasses)}
          </div>
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