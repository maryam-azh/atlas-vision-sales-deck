import { useState, useEffect } from 'react';
import { animate } from 'animejs';
import atlasInsightsLogo from '../assets/Atlas Insights logo.png';

export default function ProductRoadmapS() {
  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null);
  const [hoveredBridging, setHoveredBridging] = useState(false);
  const [hoveredBridging2, setHoveredBridging2] = useState(false);
  const [hoveredBridging3, setHoveredBridging3] = useState(false);
  const [hoveredBridging4, setHoveredBridging4] = useState(false);

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
      title: "Atlas Vision Lite - Rental/Used-car",
      description: "Edge app for rental and used-car inspection",
      timeline: "Q4 2026–Q1 2027",
      role: "Technical and Business Validation",
      bridging: [
        "Maturity assessment",
        "Business process mapping",
        "Agentic workflow design",
      ],
      color: "#D0E8E1",
      badgeColor: "bg-black"
    },
    {
      id: 2,
      phase: "Phase 2",
      title: "Atlas Vision Restore - Workshop",
      description: "Mobile scanner integrated into existing workshop workflows",
      timeline: "Q2 2027–Q4 2027",
      role: "Workshop workflow integration and performance optimization",
      bridging: [
        "Impact assessment",
        "Workshop workflow redesign",
        "Agentic workflow design",
        "Training: New ways of working (NWOW)",
        "Data Advisory & Governance setup",
      ],
      color: "#AAC8E2",
      badgeColor: "bg-black"
    },
    {
      id: 3,
      phase: "Phase 3",
      title: "Atlas Vision Suite - VPC warehouse",
      description: "Scaled agentic inspection for Vehicle Processing Centers & warehouses",
      timeline: "Q1 2028–Q1 2029",
      role: "Vertical integration into VPCs with enhanced autonomy and performance",
      bridging: [
        "Agentic workflow design",
        "Engineering partnership for integration into VPC workflows",
        "Dedicated business onboarding",
        "AI Safety training",
        "Scale-up NWOW",
      ],
      color: "#F5F3E6",
      badgeColor: "bg-black"
    },
    {
      id: 4,
      phase: "Phase 4",
      title: "Atlas Robotic Vision Suite - Enterprise",
      description: "Horizontal scale-up with semi-autonomous ground-robot hardware",
      timeline: "Q2 2029 – onwards",
      role: "Horizontal expansion into new use cases with semi-autonomous hardware",
      bridging: [
        "AI-enabled workflow transformation",
        "Engineering partnership for Enterprise",
        "Engineering for robotic hardware integration",
        "Robotic AI Safety training",
        "Integration maintenance partnership",
      ],
      color: "#F6D9C9",
      badgeColor: "bg-black"
    }
  ];

  const foundationModules = [
    {
      name: "Governance Engine",
      description: "Robust AI governance framework to meet regulatory requirements across all use cases.",
      color: "#D0E8E1",
      availableFrom: "Phase 1"
    },
    {
      name: "Integration Management",
      description: "Backward compatibility, robust API versioning, and wrappers for reliability in live deployments.",
      color: "#AAC8E2",
      availableFrom: "Phase 2"
    },
    {
      name: "Cost-aware Architecture",
      description: "Migration towards edge inference to deliver lower latency and reduce cloud bandwidth usage.",
      color: "#F5F3E6",
      availableFrom: "Phase 3"
    },
    {
      name: "Containerized Scaling",
      description: "Securely isolates each device or robot as an independent unit for maximum scalability and security.",
      color: "#F6D9C9",
      availableFrom: "Phase 4"
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
            SOLUTION ROADMAP
          </h1>
          <p className="roadmap-subtitle text-lg sm:text-xl lg:text-2xl font-body mb-4 sm:mb-5 opacity-0">
            Evolve confidently from mobile scanners to enterprise grade robotic agents, with Atlas Consultancy Services.
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
                  {/* Bridging & Redesign */}
                  <div className="mt-2 pt-2 border-t border-black/10">
                    <img src={atlasInsightsLogo} alt="Atlas Insights" className="h-4 mb-1" />
                    <ul className="space-y-0.5">
                      {milestone.bridging.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs text-gray-700 font-body">
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
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

            {/* Bridging & Redesign annotation — start of road to just before Phase 1 */}
            <g
              onMouseEnter={() => setHoveredBridging(true)}
              onMouseLeave={() => setHoveredBridging(false)}
              onClick={() => setHoveredBridging(v => !v)}
              style={{ cursor: 'pointer' }}
            >
              {/* Invisible hit-area */}
              <rect x="0" y="0" width="300" height="50" fill="transparent" />
              <line x1="10" y1="30" x2="290" y2="30" stroke={hoveredBridging ? '#000' : '#9CA3AF'} strokeWidth="1.5" />
              <line x1="10" y1="25" x2="10" y2="38" stroke={hoveredBridging ? '#000' : '#9CA3AF'} strokeWidth="1.5" />
              <line x1="290" y1="25" x2="290" y2="38" stroke={hoveredBridging ? '#000' : '#9CA3AF'} strokeWidth="1.5" />
              <image href={atlasInsightsLogo} x="-70" y="0" width="440" height="23" opacity="1" />
            </g>

            {/* Bridging & Redesign annotation — Phase 1 to just before Phase 2 */}
            <g
              onMouseEnter={() => setHoveredBridging2(true)}
              onMouseLeave={() => setHoveredBridging2(false)}
              onClick={() => setHoveredBridging2(v => !v)}
              style={{ cursor: 'pointer' }}
            >
              <rect x="355" y="0" width="345" height="50" fill="transparent" />
              <line x1="360" y1="30" x2="695" y2="30" stroke={hoveredBridging2 ? '#000' : '#9CA3AF'} strokeWidth="1.5" />
              <line x1="360" y1="25" x2="360" y2="38" stroke={hoveredBridging2 ? '#000' : '#9CA3AF'} strokeWidth="1.5" />
              <line x1="695" y1="25" x2="695" y2="38" stroke={hoveredBridging2 ? '#000' : '#9CA3AF'} strokeWidth="1.5" />
              <image href={atlasInsightsLogo} x="307" y="0" width="440" height="23" opacity="1" />
            </g>

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
              <text x="470" y="307" fontSize="26" fontWeight="1000" textAnchor="middle" fill="#000">3</text>
            </g>

            {/* Bridging & Redesign annotation — between Phase 2 and Phase 3 (below middle horizontal road) */}
            <g
              onMouseEnter={() => setHoveredBridging3(true)}
              onMouseLeave={() => setHoveredBridging3(false)}
              onClick={() => setHoveredBridging3(v => !v)}
              style={{ cursor: 'pointer' }}
            >
              <rect x="460" y="167" width="215" height="35" fill="transparent" />
              <line x1="465" y1="190" x2="670" y2="190" stroke={hoveredBridging3 ? '#000' : '#9CA3AF'} strokeWidth="1.5" />
              <line x1="465" y1="185" x2="465" y2="197" stroke={hoveredBridging3 ? '#000' : '#9CA3AF'} strokeWidth="1.5" />
              <line x1="670" y1="185" x2="670" y2="197" stroke={hoveredBridging3 ? '#000' : '#9CA3AF'} strokeWidth="1.5" />
              <image href={atlasInsightsLogo} x="367" y="151" width="400" height="32" opacity="1" />
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
              <text x="875" y="390" fontSize="26" fontWeight="1000" textAnchor="middle" fill="#000">4</text>
            </g>

            {/* Bridging & Redesign annotation — between Phase 3 and Phase 4 (above bottom road) */}
            <g
              onMouseEnter={() => setHoveredBridging4(true)}
              onMouseLeave={() => setHoveredBridging4(false)}
              onClick={() => setHoveredBridging4(v => !v)}
              style={{ cursor: 'pointer' }}
            >
              <rect x="555" y="325" width="290" height="35" fill="transparent" />
              <line x1="560" y1="348" x2="845" y2="348" stroke={hoveredBridging4 ? '#000' : '#9CA3AF'} strokeWidth="1.5" />
              <line x1="560" y1="343" x2="560" y2="355" stroke={hoveredBridging4 ? '#000' : '#9CA3AF'} strokeWidth="1.5" />
              <line x1="845" y1="343" x2="845" y2="355" stroke={hoveredBridging4 ? '#000' : '#9CA3AF'} strokeWidth="1.5" />
              <image href={atlasInsightsLogo} x="482" y="309" width="440" height="32" opacity="1" />
            </g>
          </svg>

          {/* Bridging & Redesign Tooltip */}
          {hoveredBridging && (
            <div className="absolute z-30 pointer-events-none" style={{ top: '5%', left: '1%' }}>
              <div className="p-4 shadow-xl w-64 rounded-2xl border border-gray-200" style={{ backgroundColor: '#D0E8E1' }}>
                <div className="bg-black text-white text-xs font-bold px-2.5 py-1 inline-block mb-2 rounded">Phase 1</div>
                <img src={atlasInsightsLogo} alt="Atlas Insights" className="h-5 mb-2" />
                <ul className="space-y-1">
                  {milestones[0].bridging.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-gray-700 font-body">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Bridging & Redesign Tooltip — Phase 2 */}
          {hoveredBridging2 && (
            <div className="absolute z-30 pointer-events-none" style={{ top: '5%', left: '30%' }}>
              <div className="p-4 shadow-xl w-64 rounded-2xl border border-gray-200" style={{ backgroundColor: '#AAC8E2' }}>
                <div className="bg-black text-white text-xs font-bold px-2.5 py-1 inline-block mb-2 rounded">Phase 2</div>
                <img src={atlasInsightsLogo} alt="Atlas Insights" className="h-5 mb-2" />
                <ul className="space-y-1">
                  {milestones[1].bridging.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-gray-700 font-body">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Bridging & Redesign Tooltip — Phase 3 */}
          {hoveredBridging3 && (
            <div className="absolute z-30 pointer-events-none" style={{ top: '35%', left: '40%' }}>
              <div className="p-4 shadow-xl w-64 rounded-2xl border border-gray-200" style={{ backgroundColor: '#F5F3E6' }}>
                <div className="bg-black text-white text-xs font-bold px-2.5 py-1 inline-block mb-2 rounded">Phase 3</div>
                <img src={atlasInsightsLogo} alt="Atlas Insights" className="h-5 mb-2" />
                <ul className="space-y-1">
                  {milestones[2].bridging.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-gray-700 font-body">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Bridging & Redesign Tooltip — Phase 4 */}
          {hoveredBridging4 && (
            <div className="absolute z-30 pointer-events-none" style={{ top: '60%', left: '42%' }}>
              <div className="p-4 shadow-xl w-64 rounded-2xl border border-gray-200" style={{ backgroundColor: '#F6D9C9' }}>
                <div className="bg-black text-white text-xs font-bold px-2.5 py-1 inline-block mb-2 rounded">Phase 4</div>
                <img src={atlasInsightsLogo} alt="Atlas Insights" className="h-5 mb-2" />
                <ul className="space-y-1">
                  {milestones[3].bridging.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-gray-700 font-body">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

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
                {/* Bridging & Redesign — only show for phases 2–4 (Phase 1 has dedicated annotation) */}
                {(() => {
                  const m = milestones.find(m => m.id === hoveredMilestone);
                  if (!m || m.id === 1 || m.id === 2 || m.id === 3 || m.id === 4 || !m.bridging?.length) return null;
                  return (
                    <div className="mt-2 pt-2 border-t border-black/10">
                      <img src={atlasInsightsLogo} alt="Atlas Insights" className="h-4 mb-1" />
                      <ul className="space-y-0.5">
                        {m.bridging.map((item, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-xs text-gray-700 font-body">
                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })()}
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
                <div className="flex items-start justify-between">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold leading-tight flex-1 pr-2">
                    {module.name}
                  </h3>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-black text-white whitespace-nowrap flex-shrink-0">
                    From {module.availableFrom}
                  </span>
                </div>
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