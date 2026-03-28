import { useState, useEffect } from 'react';
import { animate } from 'animejs';

export default function ProductRoadmapS() {
  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null);

  useEffect(() => {
    const titleEl = document.querySelector('.roadmap-title');
    const subtitleEl = document.querySelector('.roadmap-subtitle');

    if (titleEl) {
      animate(titleEl, {
        translateY: { from: 50, to: 0 },
        opacity: { from: 0, to: 1 },
        duration: 1000,
        ease: 'outExpo',
      });
    }

    if (subtitleEl) {
      animate(subtitleEl, {
        translateY: { from: 30, to: 0 },
        opacity: { from: 0, to: 1 },
        duration: 800,
        delay: 300,
        ease: 'outExpo',
      });
    }
  }, []);

  const milestones = [
    {
      id: 1,
      phase: "Phase 1",
      title: "Atlas Vision Lite",
      description: "Edge app for rental and used-car inspection",
      timeline: "Q2–Q3 2026",
      role: "Early market traction and dataset generation",
      color: "#D0E8E1",
      badgeColor: "bg-black"
    },
    {
      id: 2,
      phase: "Phase 2",
      title: "Atlas Vision Restore",
      description: "Mobile scanner integrated into existing workshop workflows",
      timeline: "Q3 2026–Q1 2027",
      role: "Expands SaaS footprint in insurance & repair; validates VLM performance",
      color: "#AAC8E2",
      badgeColor: "bg-black"
    },
    {
      id: 3,
      phase: "Phase 3",
      title: "Atlas Vision Suite — VPC",
      description: "Scaled agentic inspection for Vehicle Processing Centers & warehouses",
      timeline: "Q1 2027 – Q1 2028",
      role: "OEM entry wedge; rapid ROI pilot-to-production path",
      color: "#F5F3E6",
      badgeColor: "bg-black"
    },
    {
      id: 4,
      phase: "Phase 4",
      title: "Atlas Ground Vision Suite",
      description: "Horizontal scale-up with semi-autonomous ground-robot hardware",
      timeline: "Q1 2028 – Q4 2028",
      role: "Core OEM adoption path with semi-autonomous ground scanning",
      color: "#F6D9C9",
      badgeColor: "bg-black"
    }
  ];

  const foundationModules = [
    {
      name: "Integration Management",
      description: "Backward compatibility, robust API versioning, and wrappers for reliability in live deployments.",
      color: "#D0E8E1"
    },
    {
      name: "Containerized Scaling",
      description: "Securely isolates each device or robot as an independent unit for maximum scalability and security.",
      color: "#AAC8E2"
    },
    {
      name: "Cost-aware Architecture",
      description: "Inference gradually migrates on device to minimize bandwidth once performance is stable.",
      color: "#F6D9C9"
    },
    {
      name: "Governance Engine",
      description: "Adopting robust AI Governance framework to meet regulatory requirements across use cases.",
      color: "#F5F3E6"
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
      
      <div className="max-w-7xl mx-auto relative z-10 p-6 md:p-8 lg:p-10">
        
        {/* Header */}
        <div className="mb-4 sm:mb-6">
          <h1 className="roadmap-title text-4xl sm:text-5xl lg:text-6xl font-black mb-2 sm:mb-3 opacity-0">
            PRODUCT ROADMAP
          </h1>
          <p className="roadmap-subtitle text-lg sm:text-xl lg:text-2xl font-body mb-4 sm:mb-5 opacity-0">
            From mobile only workshop inspection to robotic fleet inspections in Vehicle Processing Centers (VPCs).
          </p>
        </div>

        {/* Mobile/Tablet: Linear Timeline */}
        <div className="lg:hidden mb-3 sm:mb-4">
          <div className="space-y-4 sm:space-y-5">
            {milestones.map((milestone) => (
              <div
                key={milestone.id}
                className="relative pl-8 sm:pl-12"
              >
                {/* Timeline dot */}
                <div 
                  className="absolute left-0 top-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-black flex items-center justify-center font-black text-xs sm:text-sm"
                  style={{ backgroundColor: milestone.color }}
                >
                  {milestone.id}
                </div>
                
                {/* Connecting line (except for last item) */}
                {milestone.id !== 4 && (
                  <div className="absolute left-3 sm:left-4 top-10 sm:top-12 w-0.5 h-full bg-gray-300"></div>
                )}

                {/* Card */}
                <div 
                  className="p-4 sm:p-5 shadow-md rounded-2xl border border-gray-200"
                  style={{ backgroundColor: milestone.color }}
                >
                  <div className={`${milestone.badgeColor} text-white text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 inline-block mb-2 rounded`}>
                    {milestone.phase}
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-black mb-1 sm:mb-2 leading-tight">
                    {milestone.title}
                  </h3>
                  <p className="text-sm sm:text-base mb-2 font-body">
                    {milestone.description}
                  </p>
                  <div className="bg-white/60 px-2 sm:px-3 py-1 mb-2 rounded border border-gray-200">
                    <p className="text-xs sm:text-sm font-bold">
                      {milestone.timeline}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-snug font-body">
                    {milestone.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: S-Curve Visualization */}
        <div className="hidden lg:block relative h-[270px] mb-2">
          
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 420" preserveAspectRatio="xMidYMid meet" style={{ zIndex: 1 }}>
            <defs>
              <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#000000">
                  <animate attributeName="stop-color" values="#000000;#333333;#000000" dur="4s" repeatCount="indefinite"/>
                </stop>
                <stop offset="50%" stopColor="#333333">
                  <animate attributeName="stop-color" values="#333333;#000000;#333333" dur="4s" repeatCount="indefinite"/>
                </stop>
                <stop offset="100%" stopColor="#000000">
                  <animate attributeName="stop-color" values="#000000;#333333;#000000" dur="4s" repeatCount="indefinite"/>
                </stop>
              </linearGradient>
              
              <filter id="roadShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="1.5"/>
                <feOffset dx="0" dy="1" result="offsetblur"/>
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.15"/>
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>

              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>

              <filter id="roadGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="10" result="glowBlur"/>
                <feFlood floodColor="#ffffff" floodOpacity="0.9" result="glowColor"/>
                <feComposite in="glowColor" in2="glowBlur" operator="in" result="softGlow"/>
                <feMerge>
                  <feMergeNode in="softGlow"/>
                  <feMergeNode in="softGlow"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Main Road */}
            {/* Main Road */}
            <path
              d="M 0 60 
                 L 650 60
                 Q 690 60, 710 80
                 Q 730 100, 730 140
                 Q 730 180, 710 200
                 Q 690 220, 650 220
                 L 550 220
                 Q 510 220, 490 240
                 Q 470 260, 470 300
                 Q 470 340, 490 360
                 Q 510 380, 550 380
                 L 1200 380"
              stroke="url(#roadGradient)"
              strokeWidth="40"
              fill="none"
              strokeLinecap="butt"
              strokeLinejoin="round"
              filter="url(#roadGlow)"
            />
            
            {/* White dashed center line */}
            <path
              d="M 0 60 
                 L 650 60
                 Q 690 60, 710 80
                 Q 730 100, 730 140
                 Q 730 180, 710 200
                 Q 690 220, 650 220
                 L 550 220
                 Q 510 220, 490 240
                 Q 470 260, 470 300
                 Q 470 340, 490 360
                 Q 510 380, 550 380
                 L 1200 380"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="10,7"
              strokeLinecap="butt"
              strokeLinejoin="round"
              opacity="0.7"
            />

            {/* Milestone Circles */}
            <g 
              onMouseEnter={() => setHoveredMilestone(1)}
              onMouseLeave={() => setHoveredMilestone(null)}
              onClick={() => setHoveredMilestone(hoveredMilestone === 1 ? null : 1)}
              style={{ cursor: 'pointer' }}
            >
              <circle cx="325" cy="60" r="30" fill="#D0E8E1" stroke="#000" strokeWidth="2" filter="url(#glow)">
                <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite"/>
              </circle>
              <text x="325" y="70" fontSize="26" fontWeight="1000" textAnchor="middle" fill="#000">1</text>
            </g>

            <g
              onMouseEnter={() => setHoveredMilestone(2)}
              onMouseLeave={() => setHoveredMilestone(null)}
              onClick={() => setHoveredMilestone(hoveredMilestone === 2 ? null : 2)}
              style={{ cursor: 'pointer' }}
            >
              <circle cx="730" cy="140" r="30" fill="#AAC8E2" stroke="#000" strokeWidth="2" filter="url(#glow)">
                <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite" begin="0.75s"/>
              </circle>
              <text x="730" y="150" fontSize="26" fontWeight="1000" textAnchor="middle" fill="#000">2</text>
            </g>

            <g
              onMouseEnter={() => setHoveredMilestone(3)}
              onMouseLeave={() => setHoveredMilestone(null)}
              onClick={() => setHoveredMilestone(hoveredMilestone === 3 ? null : 3)}
              style={{ cursor: 'pointer' }}
            >
              <circle cx="470" cy="300" r="30" fill="#F5F3E6" stroke="#000" strokeWidth="2" filter="url(#glow)">
                <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite" begin="1.125s"/>
              </circle>
              <text x="470" y="310" fontSize="26" fontWeight="1000" textAnchor="middle" fill="#000">3</text>
            </g>

            <g
              onMouseEnter={() => setHoveredMilestone(4)}
              onMouseLeave={() => setHoveredMilestone(null)}
              onClick={() => setHoveredMilestone(hoveredMilestone === 4 ? null : 4)}
              style={{ cursor: 'pointer' }}
            >
              <circle cx="875" cy="380" r="30" fill="#F6D9C9" stroke="#000" strokeWidth="2" filter="url(#glow)">
                <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite" begin="1.5s"/>
              </circle>
              <text x="875" y="392" fontSize="26" fontWeight="1000" textAnchor="middle" fill="#000">4</text>
            </g>
          </svg>

          {/* Hover Cards - Desktop Only */}
          {hoveredMilestone !== null && (
            <div 
              className={`absolute z-30 animate-fadeIn pointer-events-none ${
                hoveredMilestone === 1 ? 'top-[5%] left-[28%]' :
                hoveredMilestone === 2 ? 'top-[20%] left-[55%]' :
                hoveredMilestone === 3 ? 'top-[52%] left-[28%]' :
                'top-[68%] left-[62%]'
              }`}
            >
              <div 
                className="p-5 shadow-xl w-80 rounded-2xl border border-gray-200"
                style={{ backgroundColor: milestones.find(m => m.id === hoveredMilestone)?.color }}
              >
                <div className={`${milestones.find(m => m.id === hoveredMilestone)?.badgeColor} text-white text-xs font-bold px-2.5 py-1 inline-block mb-2 rounded`}>
                  {milestones.find(m => m.id === hoveredMilestone)?.phase}
                </div>
                <h3 className="text-base font-black mb-1.5 leading-tight">
                  {milestones.find(m => m.id === hoveredMilestone)?.title}
                </h3>
                <p className="text-xs mb-1.5 font-body">
                  {milestones.find(m => m.id === hoveredMilestone)?.description}
                </p>
                <div className="bg-white/60 px-2.5 py-1 mb-1.5 rounded border border-gray-200">
                  <p className="text-xs font-bold">
                    {milestones.find(m => m.id === hoveredMilestone)?.timeline}
                  </p>
                </div>
                <p className="text-xs text-gray-700 leading-snug font-body">
                  {milestones.find(m => m.id === hoveredMilestone)?.role}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Foundation Layer */}
        <div className="pt-1">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-4 sm:w-6 h-1 bg-black rounded"></div>
            <h3 className="text-xs sm:text-sm md:text-base lg:text-l">
              FOUNDATION MODULES THROUGHOUT ALL PHASES
            </h3>
            <div className="flex-1 h-1 bg-black rounded"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            {foundationModules.map((module, idx) => (
              <div 
                key={idx} 
                className="p-3 sm:p-4 lg:p-5 shadow-md rounded-2xl border border-gray-200 flex flex-col min-h-[100px] sm:min-h-[120px]"
                style={{ backgroundColor: module.color }}
              >
                <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 leading-tight">
                  {module.name}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base leading-relaxed font-body">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}