import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, ReferenceDot, Label,
} from 'recharts';

// ── Data ──────────────────────────────────────────────────────────────────────
const pricingData = [
  { month: 0, coreValue: 0, premiumValue: 0, consultancyValue: 150000 },
  
  {
    month: 2,
    coreValue: 150000,
    premiumValue: 0,
    consultancyValue: 160000,
    phase: "1",
    name: "Atlas Vision Lite - Rental/Used-car",
    priceRange: ["Setup", "Multi-site Monthly"],
    pricingNote: "Unlimited use with mobile hardware provided",
    tagline: "Proof of concept package with validated performance",
    highlights: [
      "Core vision capabilities with HITL workflows",
      "Setup includes calibration and training",
      "Default security & compliance features included",
    ],
    color: "#A7C7E7",
  },
  {
    month: 6,
    coreValue: 0,
    premiumValue: 500000,
    consultancyValue: 250000,
    phase: "2",
    name: "Atlas Vision Restore - Workshop",
    priceRange: ["Custom", "Multi-site Monthly"],
    pricingNote: "",
    tagline: "Mobile scanner plugged into your existing workflows",
    highlights: [
      "Improved performance for defect range expansion",
      "CI/CD with HITL and continuous learning",  
      "Workflow integrations and custom AI Governance",
    ],
    color: "#F2D2BD",
  },
  {
    month: 12,
    coreValue: 0,
    premiumValue: 2500000,
    consultancyValue: 1500000,
    phase: "2.5",
    name: "Atlas Vision Suite - VPC warehouse",
    priceRange: ["Custom", "Multi-site Monthly"],
    pricingNote: "",
    tagline: "Scaled deployment tailored to supply chain operations",
    highlights: [
      "Autonomy and edge deployment options",
      "Advanced governance and data management",
      "Enterprise transformation with priority SLA",
    ],
    color: "#F2B8C1",
  },
  {
    month: 24,
    coreValue: 0,
    premiumValue: 4500000,
    consultancyValue: 3500000,
    phase: "3",
    name: "Atlas Robotic Vision Suite - Enterprise",
    priceRange: ["Custom", "Structured annually", "Ownership options"],
    pricingNote: "Bundle options with edge ground-robot hardware lease",
    tagline: "Horizontal scale up with semi-autonomous hardware",
    highlights: [
      "Autonomy with ground-robot integration",
      "Workflow orchestration and data integrations",
      "Dedicated transformation team",
    ],
    color: "#C1E1C1",
  },
  // {
  //   month: 24,
  //   coreValue: 0,
  //   premiumValue: 5000000,
  //   consultancyValue: 5000000,
  //   phase: "4",
  //   name: "Atlas Aerial Agent Suite - Enterprise",
  //   priceRange: "Custom · Structured annually . Ownership options",
  //   pricingNote: "",
  //   tagline: "Full platform: analytics, compliance & fleet insights",
  //   highlights: [
  //     "Fleet-wide analytics dashboard",
  //     "Compliance & audit reporting",
  //     "Enterprise new ways of working",
  //   ],
  //   color: "#FDFD96",
  // },
  
];

// ── Y-axis formatter ───────────────────────────────────────────────────────────
const formatY = (v: number) => {
  if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(1)}M`;
  if (v >= 1_000) return `$${(v / 1_000).toFixed(0)}K`;
  return `$${v}`;
};

// ── Tooltip (overview only) ────────────────────────────────────────────────────
const PricingCallout = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  if (!d.phase) return null;

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const isTablet = typeof window !== 'undefined' && window.innerWidth >= 640 && window.innerWidth < 1024;
  const fs   = isMobile ? 11 : isTablet ? 12 : 13;
  const tffs = isMobile ? 13 : isTablet ? 14 : 16;
  const pfs  = isMobile ? 16 : isTablet ? 18 : 21;
  const pad  = isMobile ? '10px 12px' : isTablet ? '12px 16px' : '16px 20px';

  // yellow text is unreadable on white — darken it
  const checkColor = d.color === '#FDFD96' ? '#a09600' : d.color;

  return (
    <div style={{
      background: 'rgba(255,255,255,0.97)',
      border: `2px solid ${d.color}`,
      borderRadius: 12,
      padding: pad,
      boxShadow: '0 6px 20px rgba(0,0,0,0.12)',
      minWidth: isMobile ? 210 : 260,
      maxWidth: isMobile ? 280 : 340,
      fontSize: fs,
      lineHeight: 1.55,
    }}>
      {/* Header */}
      <div style={{ borderBottom: `2px solid ${d.color}`, paddingBottom: 8, marginBottom: 10 }}>
        {/* <div style={{ fontSize: fs - 1, color: '#999', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 2 }}>
          Package {d.phase}
        </div> */}
        <div style={{ fontSize: tffs, fontWeight: 800, color: '#1a1a2e' }}>{d.name}</div>
        <div style={{ fontSize: fs - 1, color: '#666', marginTop: 3, fontStyle: 'italic' }}>{d.tagline}</div>
      </div>

      {/* Price highlight */}
      <div style={{ margin: '8px 0', background: `${d.color}55`, borderRadius: 8, padding: '8px 12px' }}>
        <div style={{ fontSize: fs - 2, color: '#666', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 2 }}>
          Indicative Price
        </div>
        <div style={{ fontSize: pfs, fontWeight: 800, color: '#1a1a2e', lineHeight: 1.2 }}>
          {(Array.isArray(d.priceRange) ? d.priceRange : [d.priceRange]).map((line: string, idx: number, arr: string[]) => (
            <React.Fragment key={idx}>
              {line}
              {idx < arr.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
        <div style={{ fontSize: fs - 2, color: '#888', marginTop: 3 }}>{d.pricingNote}</div>
      </div>

      {/* Highlights */}
      <div style={{ marginTop: 10 }}>
        <div style={{ fontSize: fs - 2, fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 6 }}>
          What's Included
        </div>
        {d.highlights.map((h: string, i: number) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 7, marginBottom: 5 }}>
            <span style={{ color: checkColor, fontWeight: 800, fontSize: fs + 1, lineHeight: 1.3, flexShrink: 0 }}>✓</span>
            <span style={{ color: '#333', fontSize: fs }}>{h}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ── Chart ─────────────────────────────────────────────────────────────────────
export const PricingModelChart: React.FC = () => {
  const [windowWidth, setWindowWidth] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const handle = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handle);
    return () => window.removeEventListener('resize', handle);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;
  const tickFs  = isMobile ? 9  : isTablet ? 10 : 11;
  const labelFs = isMobile ? 10 : isTablet ? 11 : 13;
  const dotR    = isMobile ? 5  : isTablet ? 6  : 8;
  const minH    = isMobile ? 300 : isTablet ? 350 : 390;

  return (
    <div style={{ width: '100%', fontFamily: 'sans-serif' }}>

      {/* ── Title block ──
      <div style={{ textAlign: 'center', marginBottom: 14, padding: '0 12px' }}>
        <div style={{
          fontSize: isMobile ? 16 : isTablet ? 19 : 23,
          fontWeight: 800,
          color: '#1a1a2e',
          letterSpacing: '-0.4px',
        }}>
          Partnership Pricing Overview
        </div>
        <div style={{
          fontSize: isMobile ? 10 : isTablet ? 11 : 13,
          color: '#888',
          marginTop: 5,
          fontStyle: 'italic',
        }}>
          Flexible, scalable packages built around your needs
          &nbsp;·&nbsp; All pricing indicative &amp; open for discussion
        </div>
      </div> */}

      {/* ── Legend ── */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: isMobile ? 16 : 28, marginBottom: 10, flexWrap: 'wrap' }}>
        {[
          { color: '#6B4C9A', label: 'Bridging & Redesign' },
          // { color: '#d76374', label: 'Core Packages' },
          { color: '#82ca9d', label: 'Technology' },
        ].map(({ color, label }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: isMobile ? 10 : 12, color: '#555', fontWeight: 600 }}>
            <div style={{ width: 12, height: 12, borderRadius: 3, background: color }} />
            {label}
          </div>
        ))}
      </div>

      {/* ── Area Chart ── */}
      <div style={{ width: '100%', height: minH }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={pricingData} margin={{ top: 55, right: 150, left: 30, bottom: 28 }}>
            <defs>
              <linearGradient id="gradConsultancy" x1="0" y1="0" x2="0" y2="1">
                <stop offset="70%" stopColor="#9B7FBF" stopOpacity={0.85} />
                <stop offset="95%" stopColor="#9B7FBF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gradCore" x1="0" y1="0" x2="0" y2="1">
                <stop offset="70%" stopColor="#f2b8be" stopOpacity={0.85} />
                <stop offset="95%" stopColor="#f2b8be" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gradPremium" x1="0" y1="0" x2="0" y2="1">
                <stop offset="65%" stopColor="#a8e6bf" stopOpacity={0.85} />
                <stop offset="95%" stopColor="#a8e6bf" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            <XAxis
              type="number"
              dataKey="month"
              tick={{ fontSize: tickFs }}
              label={{
                value: 'Implementation Journey (Months)',
                position: 'insideBottom',
                offset: -16,
                fontSize: labelFs,
                fontWeight: 'bold',
              }}
              domain={[0, 24]}
              ticks={[0, 2, 6, 12, 24]}
              allowDecimals={false}
            />

            <YAxis
              tickFormatter={formatY}
              tick={{ fontSize: tickFs }}
              label={{
                value: 'Platform Value Scale',
                angle: -90,
                position: 'insideLeft',
                offset: -18,
                fontSize: labelFs,
                fontWeight: 'bold',
              }}
              domain={[0, 6_000_000]}
            />

            <Tooltip
              content={<PricingCallout />}
              cursor={{ stroke: 'rgba(0,0,0,0.07)', strokeWidth: 2, strokeDasharray: '3 3' }}
            />

            <Area
              type="monotone"
              dataKey="consultancyValue"
              stackId="1"
              stroke="#6B4C9A"
              fill="url(#gradConsultancy)"
              animationDuration={1200}
            />
            {/* <Area
              type="monotone"
              dataKey="coreValue"
              stackId="1"
              stroke="#d76374"
              fill="url(#gradCore)"
              animationDuration={1200}
              animationBegin={100}
            /> */}
            <Area
              type="monotone"
              dataKey="premiumValue"
              stackId="1"
              stroke="#82ca9d"
              fill="url(#gradPremium)"
              animationDuration={1200}
              animationBegin={300}
            />

            {/* Package milestone dots */}
            {pricingData
              .filter((p: any) => p.month > 0)
              .map((entry: any, idx: number, arr: any[]) => (
                <ReferenceDot
                  key={`dot-${entry.month}`}
                  x={entry.month}
                  y={entry.consultancyValue + entry.coreValue + entry.premiumValue}
                  r={dotR}
                  fill={entry.color}
                  stroke="white"
                  strokeWidth={2}
                >
                  <Label
                    value={entry.name}
                    position="top"
                    offset={14}
                    fontSize={isMobile ? 9 : isTablet ? 10 : 11}
                    fontWeight="bold"
                    fill="#555"
                    textAnchor={idx === arr.length - 1 ? "end" : "middle"}
                  />
                </ReferenceDot>
              ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* ── Footer note ── */}
      <div style={{
        textAlign: 'center',
        marginTop: 10,
        fontSize: isMobile ? 9 : 11,
        color: '#bbb',
        padding: '0 16px',
      }}>
        Hover each milestone to explore package details · Prices are indicative ranges, subject to scope &amp; volume
      </div>
    </div>
  );
};

export default PricingModelChart;