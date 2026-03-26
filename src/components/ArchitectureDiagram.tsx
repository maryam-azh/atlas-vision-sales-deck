import React from 'react';

function renderModule(layer: any, colorClasses: any, isCore = false, isMobile = false) {
  const colorKey = layer.color as keyof typeof colorClasses;
  const colors = colorClasses[colorKey];
  
  return (
    <div
      className={`h-full min-h-[50%] rounded-lg ${isMobile ? 'p-4 sm:p-5' : 'p-2.5 lg:p-3'} flex flex-col justify-center relative cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 group overflow-hidden shadow-md`}
      style={{ backgroundColor: colors.bg, border: isCore ? '2px solid #000' : '1px solid rgba(0,0,0,0.1)' }}
    >
      {/* Category Badge */}
      <div className="absolute bottom-1.5 right-1.5 lg:bottom-2 lg:right-2">
        <span className={`${isMobile ? 'text-xs' : 'text-[9px] lg:text-[10px]'} font-bold px-1.5 py-0.5 lg:px-2 lg:py-1 rounded bg-black text-white`}>
          {layer.category}
        </span>
      </div>

      {/* Icon */}
      {layer.icon && <div className={`${isCore ? 'text-4xl lg:text-5xl' : 'text-3xl lg:text-4xl'} mb-1.5 lg:mb-2 opacity-90`}>{layer.icon}</div>}

      {/* Title */}
      <div className={`${isMobile ? (isCore ? 'text-2xl' : 'text-xl') : (isCore ? 'text-lg lg:text-xl xl:text-2xl' : 'text-base lg:text-lg xl:text-xl')} text-black leading-tight pr-12 font-body font-bold`}>
        {layer.title}
      </div>

      {/* Hover Overlay with Details */}
      <div className="absolute inset-0 bg-black/95 p-2.5 lg:p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col overflow-y-auto">
        <div className="mb-1">
          <h4 className={`${isMobile ? 'text-base sm:text-lg' : (isCore ? 'text-sm lg:text-base' : 'text-xs lg:text-sm')} font-black text-white mb-1.5 lg:mb-2 leading-tight`}>
            {layer.title}
          </h4>
          {/* Modules */}
          <div className="flex flex-wrap gap-1 mb-1.5 lg:mb-2">
            {layer.modules.map((module: string, idx: number) => (
              <span
                key={idx}
                className={`${isMobile ? 'text-xs' : 'text-[9px] lg:text-[10px]'} px-1.5 py-0.5 bg-white/20 text-white rounded border border-white/40 font-medium leading-none`}
              >
                {module}
              </span>
            ))}
          </div>
        </div>
        {/* Outcome */}
        <div className="pt-1.5 lg:pt-2 border-t border-white/30 flex-shrink-0">
          <p className={`${isMobile ? 'text-sm' : (isCore ? 'text-xs lg:text-sm' : 'text-[10px] lg:text-xs')} text-white leading-tight font-body`}>
            {layer.outcome}
          </p>
        </div>
      </div>
    </div>
  );
}

interface ArchitectureDiagramProps {
  layers: any[];
  colorClasses: any;
}

const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ layers, colorClasses }) => {
  return (
    <div className="hidden lg:flex flex-1 relative flex-col" style={{ minHeight: 0 }}>
      {/* Diagram container with proper spacing for legend */}
      <div className="flex-1 relative" style={{ marginBottom: '40px' }}>
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
          {/* Connection: Edge → Control */}
          <line x1="26.5%" y1="14%" x2="36%" y2="14%" stroke="#6B7280" strokeWidth="2.5" markerEnd="url(#arrowhead)" />
          <text x="28.5%" y="12%" fill="black" fontSize="11" fontWeight="bold" fontFamily="monospace">CAPTURE</text>
          
          {/* Connection: Control → AI Core */}
          <line x1="47%" y1="29%" x2="47%" y2="36%" stroke="#6B7280" strokeWidth="2.5" markerEnd="url(#arrowhead)" />
          <text x="48.5%" y="32.5%" fill="black" fontSize="11" fontWeight="bold" fontFamily="monospace">ORCHESTRATE</text>
          
          {/* Connection: AI Core → Learning */}
          <line x1="62%" y1="50%" x2="70%" y2="50%" stroke="#6B7280" strokeWidth="2.5" strokeDasharray="6,4" markerEnd="url(#arrowhead-dashed)" />
          <text x="64.5%" y="48%" fill="black" fontSize="11" fontWeight="bold" fontFamily="monospace">LEARN</text>
          
          {/* Connection: AI Core → Human */}
          <line x1="32%" y1="50%" x2="16%" y2="50%" stroke="#6B7280" strokeWidth="2.5" />
          <line x1="16%" y1="50%" x2="16%" y2="69%" stroke="#6B7280" strokeWidth="2.5" markerEnd="url(#arrowhead)" />
          <text x="18%" y="59.5%" fill="black" fontSize="11" fontWeight="bold" fontFamily="monospace">VALIDATE</text>
          
          {/* Connection: Enterprise → Learning */}
          <line x1="58%" y1="83%" x2="64%" y2="83%" stroke="#6B7280" strokeWidth="2.5" strokeDasharray="6,4" />
          <line x1="64%" y1="83%" x2="64%" y2="67%" stroke="#6B7280" strokeWidth="2.5" strokeDasharray="6,4" />
          <line x1="64%" y1="67%" x2="81.5%" y2="67%" stroke="#6B7280" strokeWidth="2.5" strokeDasharray="6,4" />
          <line x1="81.5%" y1="67%" x2="81.5%" y2="64%" stroke="#6B7280" strokeWidth="2.5" strokeDasharray="6,4" markerEnd="url(#arrowhead-dashed)" />
          <text x="61%" y="81%" fill="black" fontSize="10" fontWeight="bold" fontFamily="monospace">FEEDBACK</text>
          
          {/* Connection: Human → Enterprise */}
          <line x1="26.5%" y1="83%" x2="36%" y2="83%" stroke="#6B7280" strokeWidth="2.5" markerEnd="url(#arrowhead)" />
          <text x="29.5%" y="81%" fill="black" fontSize="11" fontWeight="bold" fontFamily="monospace">INTEGRATE</text>

          {/* Connection: Governance → AI Engine */}
          <line x1="70%" y1="14%" x2="66%" y2="14%" stroke="#6B7280" strokeWidth="2.5" strokeDasharray="6,4" />
          <line x1="66%" y1="14%" x2="66%" y2="43%" stroke="#6B7280" strokeWidth="2.5" strokeDasharray="6,4" />
          <line x1="66%" y1="43%" x2="62%" y2="43%" stroke="#6B7280" strokeWidth="2.5" strokeDasharray="6,4" markerEnd="url(#arrowhead-governance)" />
          <text x="67%" y="28.5%" fill="black" fontSize="10" fontWeight="bold" fontFamily="monospace">GOVERN</text>
          
          {/* Connection: Governance → Learning */}
          <line x1="81.5%" y1="29%" x2="81.5%" y2="36%" stroke="#6B7280" strokeWidth="2.5" strokeDasharray="6,4" markerEnd="url(#arrowhead-governance)" />
          <text x="83%" y="32.5%" fill="black" fontSize="10" fontWeight="bold" fontFamily="monospace">MONITOR</text>
          
          {/* Connection: Governance → Enterprise */}
          <line x1="96%" y1="14%" x2="98%" y2="14%" stroke="#6B7280" strokeWidth="2.5" strokeDasharray="6,4" />
          <line x1="98%" y1="14%" x2="98%" y2="93%" stroke="#6B7280" strokeWidth="2.5" strokeDasharray="6,4" />
          <line x1="98%" y1="93%" x2="47%" y2="93%" stroke="#6B7280" strokeWidth="2.5" strokeDasharray="6,4" />
          <line x1="47%" y1="93%" x2="47%" y2="90%" stroke="#6B7280" strokeWidth="2.5" strokeDasharray="6,4" markerEnd="url(#arrowhead-governance)" />
          <text x="66%" y="91%" fill="black" fontSize="10" fontWeight="bold" fontFamily="monospace">AUDIT</text>

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

        {/* Components positioned absolutely - using more width */}
        <div className="absolute" style={{ top: '0%', left: '4%', width: '22.5%', height: '29%' }}>
          {renderModule(layers[0], colorClasses)}
        </div>
        
        <div className="absolute" style={{ top: '0%', left: '36%', width: '22%', height: '29%' }}>
          {renderModule(layers[1], colorClasses)}
        </div>
        
        <div className="absolute" style={{ top: '36%', left: '32%', width: '30%', height: '28%', zIndex: 1 }}>
          {renderModule(layers[2], colorClasses, true)}
        </div>
        
        <div className="absolute" style={{ top: '0%', right: '4%', width: '22.5%', height: '29%' }}>
          {renderModule(layers[6], colorClasses)}
        </div>
        
        <div className="absolute" style={{ top: '36%', right: '4%', width: '22.5%', height: '28%' }}>
          {renderModule(layers[3], colorClasses)}
        </div>
        
        <div className="absolute" style={{ top: '69%', left: '4%', width: '22.5%', height: '28%' }}>
          {renderModule(layers[4], colorClasses)}
        </div>
        
        <div className="absolute" style={{ top: '69%', left: '36%', width: '22%', height: '28%' }}>
          {renderModule(layers[5], colorClasses)}
        </div>
      </div>

      {/* Legend container - positioned below diagram with no overlap */}
      <div className="flex-shrink-0 flex gap-4 xl:gap-6 text-xs xl:text-sm font-mono">
        <div className="flex items-center gap-2">
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <span>Data Flow</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-0.5 border-t-2 border-dashed border-gray-600"></div>
          <span>Feedback Loop</span>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
