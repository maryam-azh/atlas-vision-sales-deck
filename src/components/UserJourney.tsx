

import { useState } from 'react';

// Placeholder images
import capturePink from '../assets/capture-pink-s.png';
import detectBlue from '../assets/detect-blue.png';
import reasonGreen from '../assets/reason-green.png';
import verifyPeach from '../assets/verify-peach.png';
import integratePink from '../assets/integrate-pink.png';

// Data for the steps
const steps = [
  {
    id: 1,
    label: 'CAPTURE',
    bgColor: 'rgb(255, 218, 224)',
    description: 'Mobile, or mobile robots scan all around the vehicle.',
    detailedDescription:
      'Multi-modal capture system enabled by various hardware setups for optimal data collection.',
  },
  {
    id: 2,
    label: 'DETECT',
    bgColor: 'rgb(191, 219, 254)',
    description: 'Vision agent selects models to identify defects in real time.',
    detailedDescription:
      'Vision agent with a library of computer vision models to select in run-time.',
  },
  {
    id: 3,
    label: 'REASON',
    bgColor: 'rgb(254, 249, 195)',
    description: 'Classifier agent assesses severity & recommends actions.',
    detailedDescription:
      'Damage severity classifier agent with repair prioritization & recommendation logic.',
  },
  {
    id: 4,
    label: 'VERIFY',
    bgColor: 'rgb(254, 215, 170)',
    description: 'Human collaborates with AI by verifying or evaluating AI findings.',
    detailedDescription:
      'Human in the loop workflow for validation & continuous learning of new defect types.',
  },
  {
    id: 5,
    label: 'INTEGRATE',
    bgColor: '#FFB5B5',
    description: 'AI orchestrator coordinates with external systems for continuity.',
    detailedDescription:
      'Intelligent data flow for downstream repair workflow and enterprise integration.',
  },
];

export default function UserJourney() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="h-full w-full flex flex-col p-2 sm:p-4 lg:p-6">
      {/* Step cards - properly spaced grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3 lg:gap-2 h-full w-full"
        style={{ 
          gridAutoRows: '1fr'
        }}
      >
        {steps.map((step, index) => {
          const isActive = activeStep === index;
          return (
            <div
              key={step.id}
              className={`relative transition-all duration-500 cursor-pointer group flex min-h-[280px] sm:min-h-[320px] lg:min-h-0`}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
              onClick={() => setActiveStep(isActive ? null : index)}
              tabIndex={0}
              role="button"
              aria-label={`Show details for ${step.label}`}
            >
              <div
                className="bg-white rounded-lg sm:rounded-xl overflow-hidden flex flex-col w-full relative"
                style={{
                  boxShadow: isActive
                    ? '0 10px 30px rgba(0, 0, 0, 0.12)'
                    : '0 4px 15px rgba(0, 0, 0, 0.06)',
                }}
              >
                {/* Visual header with color block */}
                <div
                  className="h-20 sm:h-24 lg:h-28 xl:h-32 flex items-center justify-center relative overflow-hidden flex-shrink-0"
                  style={{ backgroundColor: step.bgColor }}
                >
                  {/* Semi-transparent dusty overlay to balance brightness */}
                  <div className="absolute inset-0 bg-gray-600/20 z-10"></div>
                  <div className="opacity-95 flex items-center justify-center w-full h-full p-2 relative z-0">
                    {index === 0 ? (
                      <img
                        src={capturePink}
                        alt="Capture"
                        className="object-contain"
                        style={{
                          maxHeight: '100%',
                          maxWidth: '100%',
                          transform: 'scale(3)',
                        }}
                      />
                    ) : index === 1 ? (
                      <img
                        src={detectBlue}
                        alt="Detect"
                        className="object-contain"
                        style={{
                          maxHeight: '100%',
                          maxWidth: '100%',
                          transform: 'scale(4.5)',
                        }}
                      />
                    ) : index === 2 ? (
                      <img
                        src={reasonGreen}
                        alt="Reason"
                        className="object-contain"
                        style={{
                          maxHeight: '100%',
                          maxWidth: '100%',
                          transform: 'scale(4)',
                        }}
                      />
                    ) : index === 3 ? (
                      <img
                        src={verifyPeach}
                        alt="Verify"
                        className="object-contain"
                        style={{
                          maxHeight: '100%',
                          maxWidth: '100%',
                          transform: 'scale(4)',
                        }}
                      />
                    ) : (
                      <img
                        src={integratePink}
                        alt="Integrate"
                        className="object-contain"
                        style={{
                          maxHeight: '100%',
                          maxWidth: '100%',
                          transform: 'scale(4)',
                        }}
                      />
                    )}
                  </div>
                </div>
                
                {/* Default State Content */}
                <div className="p-2 sm:p-3 lg:p-4 flex-1 flex flex-col justify-start bg-white">
                  <div className="font-black text-base sm:text-lg lg:text-xl mb-1 tracking-tight leading-tight">
                    {step.id}. {step.label}
                  </div>
                  <p className="text-sm sm:text-base font-body leading-relaxed text-gray-700">
                    {step.description}
                  </p>
                </div>

                {/* Hover State Overlay */}
                <div
                  className={`absolute inset-0 bg-black text-white rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 flex items-center justify-center transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <p className="text-sm sm:text-base lg:text-lg font-body leading-relaxed text-center">
                    {step.detailedDescription.replace(/\*\*/g, '')}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}