import React, { useEffect } from 'react';
import { animate } from 'animejs';
import PricingModelChart from '../components/RevenueModelChart';

export default function Slide9_Pricing() {
  useEffect(() => {
    const titleEl    = document.querySelector('.pricing-title');
    const subtitleEl = document.querySelector('.pricing-subtitle');

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

  return (
    <div className="h-full w-full bg-white relative overflow-auto flex flex-col">

      {/* Background texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(0,0,0,0.08) 50px, rgba(0,0,0,0.08) 51px)',
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(0,0,0,0.08) 50px, rgba(0,0,0,0.08) 51px)',
        }} />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 p-6 md:p-8 lg:p-10 flex flex-col flex-1">

        {/* ── Title ── */}
        <h2 className="pricing-title text-4xl sm:text-5xl lg:text-6xl font-black mb-2 sm:mb-3 opacity-0">
          PRICING & PARTNERSHIP
        </h2>

        {/* ── Subtitle ── */}
        <p className="pricing-subtitle text-lg sm:text-xl lg:text-2xl font-body mb-4 sm:mb-5 opacity-0">
          We partner with you in a low risk model and walk the transformation journey together.
        </p>

        {/* ── Chart ── */}
        <div className="w-full flex-1 min-h-0">
          <React.Suspense fallback={<div className="p-6 text-gray-400">Loading chart…</div>}>
            <PricingModelChart />
          </React.Suspense>
        </div>

      </div>
    </div>
  );
}