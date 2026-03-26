import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
  Label,
} from 'recharts';

// ---------- 1) Data ----------

const revenueData = [
  { month: 0, baseArr: 0, diArr: 0 },

  {
    month: 6,
    baseArr: 150000,
    diArr: 0,
    phase: "1",
    name: "Lite",
    details: "Per-scan SaaS ($2–3 per scan)",
    arrRange: "$150K ARR",
    color: "#A7C7E7",
    revenueTypes: ["SaaS Subscriptions", "Per-Scan / API Fees"],
  },
  {
    month: 12,
    baseArr: 500000,
    diArr: 0,
    phase: "2",
    name: "Claims API",
    details: "API & VIN-based pricing ($20–30 per claim)",
    arrRange: "$500K ARR",
    color: "#F2D2BD",
    revenueTypes: ["Per-Scan / API Fees"],
  },
  // Replace ONLY these entries in revenueData:

{
  month: 15,
  baseArr: 1000000,
  diArr: 150000, // DVP micro-pricing (green)
  phase: "2.5",
  name: "VPC Fast-Lane",
  details: "OEM pilot suite with site subscription ($1–2K/site/month)", // <- removed DVP mention
  arrRange: "$750K–$1M ARR",
  color: "#C1E1C1",
  revenueTypes: ["SaaS Subscriptions"] // <- removed "Digital Vehicle Passports"
},
{
  month: 18,
  baseArr: 2200000, // includes Governance Tier (operational SaaS)
  diArr: 400000,    // DVP analytics growth (green)
  phase: "3",
  name: "Pro Suite + Governance Tier",
  details: "Per-vehicle & lease bundle +\ngovernance/compliance analytics add-on ($100/site/month)",
  arrRange: "$1.5–2M ARR (base)",
  color: "#FDFD96",
  revenueTypes: [
    "SaaS Subscriptions",
    "Per-Scan / API Fees",
    "Governance Tier"          // <- removed "Digital Vehicle Passports"
  ]
},
{
  month: 24,
  baseArr: 3000000,  // operational ARR (autonomy lease + SaaS) — purple
  diArr: 2500000,    // data intelligence (DVP + insights) — green
  phase: "4+",
  name: "Operational ARR (Phase 4)",
  details: "Autonomy bundle: hardware lease + SaaS (drones + ground robots)",
  arrRange: "$3.0M Base ARR",
  color: "#FFB347",
  revenueTypes: ["SaaS Subscriptions", "Hardware Lease"] // <- no DVP here
},
];

// Phase 4 operational callout (purple box, within base ARR)

// Three DVP (green) data-product milestones

// ---------- 2) Helpers ----------

// Tooltip (hover) shows Phase box with ARR, details, and Revenue Streams (consistent)
const CustomCallout = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;

    // Responsive sizing for mobile
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const isTablet = typeof window !== 'undefined' && window.innerWidth >= 640 && window.innerWidth < 1024;

    const calloutStyle: React.CSSProperties = {
      backgroundColor: 'rgba(255,255,255,0.95)',
      border: `2px solid ${data.color || '#ccc'}`,
      padding: isMobile ? '8px' : isTablet ? '10px' : '15px',
      borderRadius: isMobile ? '8px' : '12px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
      minWidth: isMobile ? '200px' : isTablet ? '230px' : '260px',
      maxWidth: isMobile ? '280px' : isTablet ? '320px' : '400px',
      fontSize: isMobile ? '11px' : isTablet ? '12px' : '14px',
      lineHeight: '1.5',
    };

    const headerStyle: React.CSSProperties = {
      margin: '0 0 8px 0',
      paddingBottom: isMobile ? '4px' : '8px',
      borderBottom: `2px solid ${data.color}`,
      color: '#333',
      fontWeight: 600,
      fontSize: isMobile ? '12px' : isTablet ? '13px' : '14px',
    };

    const detailText: React.CSSProperties = { 
      margin: isMobile ? '3px 0' : '5px 0', 
      color: '#555',
      fontSize: isMobile ? '10px' : isTablet ? '11px' : '13px',
    };

    return (
      <div style={calloutStyle}>
        <h4 style={headerStyle}>Phase {data.phase}: {data.name}</h4>
        <p style={detailText}><strong>ARR:</strong> {data.arrRange}</p>
        <p style={detailText}><strong>Details:</strong> {data.details}</p>
        {data.revenueTypes && (
          <>
            <p style={{ ...detailText, marginTop: isMobile ? '6px' : '10px' }}><strong>Revenue Streams:</strong></p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: isMobile ? '4px' : '8px', marginTop: isMobile ? '4px' : '6px' }}>
              {data.revenueTypes.map((type: string, idx: number) => {
                // Compute a brighter tint for the box
                const base = data.color || '#eee';
                // Simple tint: mix with white
                function tint(hex: string, percent: number) {
                  hex = hex.replace('#', '');
                  const r = Math.min(255, Math.round(parseInt(hex.slice(0,2),16) + (255-parseInt(hex.slice(0,2),16))*percent));
                  const g = Math.min(255, Math.round(parseInt(hex.slice(2,4),16) + (255-parseInt(hex.slice(2,4),16))*percent));
                  const b = Math.min(255, Math.round(parseInt(hex.slice(4,6),16) + (255-parseInt(hex.slice(4,6),16))*percent));
                  return `rgb(${r},${g},${b})`;
                }
                const boxColor = tint(base, 0.55);
                return (
                  <span
                    key={idx}
                    style={{
                      background: boxColor,
                      borderRadius: isMobile ? '5px' : '7px',
                      padding: isMobile ? '3px 8px' : isTablet ? '4px 10px' : '5px 12px',
                      fontWeight: 500,
                      fontSize: isMobile ? '10px' : isTablet ? '11px' : '13px',
                      color: '#222',
                      border: `1.5px solid ${base}`,
                      boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                      marginBottom: '2px',
                      display: 'inline-block',
                    }}
                  >
                    {type}
                  </span>
                );
              })}
            </div>
          </>
        )}
  {/* Embed DVP V0 info box in Phase 2.5 callout */}
  {data.phase === "2.5" && (
    <div style={{
      background: '#d6f5e3',
      borderRadius: isMobile ? '6px' : '10px',
      padding: isMobile ? '8px 10px' : isTablet ? '10px 12px' : '12px 16px',
      marginTop: isMobile ? '10px' : '18px',
      color: '#222',
      boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
      fontSize: isMobile ? '10px' : isTablet ? '11px' : '13px',
      fontWeight: 500,
      lineHeight: 1.5
    }}>
      <div style={{ fontWeight: 900, fontSize: isMobile ? '11px' : isTablet ? '13px' : '16px', marginBottom: isMobile ? '3px' : '6px', letterSpacing: '0.3px', textTransform: 'uppercase' }}>DVP - Data Intelligence V0 </div>
      <div style={{ fontWeight: 900, fontSize: isMobile ? '11px' : isTablet ? '12px' : '15px', color: '#155724', marginBottom: isMobile ? '2px' : '4px', letterSpacing: '0.2px' }}><strong>+ $150K</strong></div>
      <div style={{ whiteSpace: 'pre-line', marginBottom: isMobile ? '2px' : '4px', fontSize: isMobile ? '9px' : isTablet ? '10px' : '12px' }}>
        Micro-pricing starts via VPC pilots
        VIN-linked reports & exports
      </div>
    </div>
  )}

  {/* Embed DVP V1 info box in Phase 3 callout */}
  {data.phase === "3" && (
    <div style={{
      background: '#d6f5e3',
      borderRadius: isMobile ? '6px' : '10px',
      padding: isMobile ? '8px 10px' : isTablet ? '10px 12px' : '12px 16px',
      marginTop: isMobile ? '10px' : '18px',
      color: '#222',
      boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
      fontSize: isMobile ? '10px' : isTablet ? '11px' : '13px',
      fontWeight: 500,
      lineHeight: 1.5
    }}>
      <div style={{ fontWeight: 900, fontSize: isMobile ? '11px' : isTablet ? '13px' : '16px', marginBottom: isMobile ? '3px' : '6px', letterSpacing: '0.3px', textTransform: 'uppercase' }}>DVP - Data Intelligence V1 </div>
      <div style={{ fontWeight: 900, fontSize: isMobile ? '11px' : isTablet ? '12px' : '15px', color: '#155724', marginBottom: isMobile ? '2px' : '4px', letterSpacing: '0.2px' }}><strong>+ $400K</strong></div>
      <div style={{ whiteSpace: 'pre-line', marginBottom: isMobile ? '2px' : '4px', fontSize: isMobile ? '9px' : isTablet ? '10px' : '12px' }}>
        Governance analytics + supplier trends
        Pro Suite data monetization
      </div>
    </div>
  )}

    {/* Embed DVP V2 info box in Phase 4+ callout */}
    {data.phase === "4+" && (
      <div style={{
        background: '#d6f5e3',
        borderRadius: isMobile ? '6px' : '10px',
        padding: isMobile ? '8px 10px' : isTablet ? '10px 12px' : '12px 16px',
        marginTop: isMobile ? '10px' : '18px',
        color: '#222',
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
        fontSize: isMobile ? '10px' : isTablet ? '11px' : '13px',
        fontWeight: 500,
        lineHeight: 1.5
      }}>
        <div style={{ fontWeight: 900, fontSize: isMobile ? '11px' : isTablet ? '13px' : '16px', marginBottom: isMobile ? '3px' : '6px', letterSpacing: '0.3px', textTransform: 'uppercase' }}>DVP - Data Intelligence V2 </div>
        <div style={{ fontWeight: 900, fontSize: isMobile ? '11px' : isTablet ? '12px' : '15px', color: '#155724', marginBottom: isMobile ? '2px' : '4px', letterSpacing: '0.2px' }}><strong>+ $2.5M</strong></div>
        <div style={{ whiteSpace: 'pre-line', marginBottom: isMobile ? '2px' : '4px', fontSize: isMobile ? '9px' : isTablet ? '10px' : '12px' }}>
          Fleet-wide DVP & insights licensing
          Autonomy data streams included
        </div>
      </div>
    )}
      </div>
    );
  }
  return null;
};

// ---------- 3) Chart ----------

export const RevenueModelChart: React.FC = () => {
  // Responsive font sizing based on viewport width with resize listener
  const [windowWidth, setWindowWidth] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;
  
  const tickFontSize = isMobile ? 9 : isTablet ? 10 : 12;
  const labelFontSize = isMobile ? 11 : isTablet ? 12 : 14;
  const phaseLabelFontSize = isMobile ? 10 : isTablet ? 11 : 12;
  const dotRadius = isMobile ? 6 : isTablet ? 7 : 8;
  const minChartHeight = isMobile ? 280 : isTablet ? 320 : 360;

  return (
  <div style={{ width: '100%', height: '100%', minHeight: minChartHeight }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={revenueData} margin={{ top: 70, right: 30, left: 30, bottom: 25 }}>
          <defs>
            <linearGradient id="colorBase" x1="0" y1="0" x2="0" y2="1">
              <stop offset="75%" stopColor="rgb(var(--pale-peach))" stopOpacity={0.8} />
              <stop offset="95%" stopColor="rgb(var(--pale-peach))" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorDI" x1="0" y1="0" x2="0" y2="1">
              <stop offset="65%" stopColor='rgb(var(--soft-mint-green))' stopOpacity={0.8} />
              <stop offset="95%" stopColor='rgb(var(--soft-mint-green))' stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          <XAxis
            dataKey="month"
            tick={{ fontSize: tickFontSize }}
            label={{ value: 'Development Timeline (Months)', position: 'insideBottom', offset: -15, fontSize: labelFontSize, fontWeight: 'bold' }}
            domain={[0, 30]}
            ticks={[0, 6, 12, 15, 18, 24, 30]}
          />

          <YAxis
            tick={{ fontSize: tickFontSize }}
            label={{ value: 'ARR ($)', angle: -90, position: 'insideLeft', offset: -25, fontSize: labelFontSize, fontWeight: 'bold' }}
            domain={[0, 6000000]}
          />

          <Tooltip content={<CustomCallout />} cursor={{ stroke: 'rgba(0,0,0,0.08)', strokeWidth: 2, strokeDasharray: '3 3' }} />

          {/* Areas */}
          <Area type="monotone" dataKey="baseArr" stackId="1" stroke="#d76374ff" fill="url(#colorBase)" animationDuration={1200} />
          <Area type="monotone" dataKey="diArr" stackId="1" stroke="#82ca9d" fill="url(#colorDI)" animationDuration={1200} animationBegin={300} />

          {/* Phase markers */}
          {revenueData.filter((p: any) => p.month > 0).map((entry: any) => (
            <ReferenceDot key={`dot-${entry.month}`} x={entry.month} y={entry.baseArr + entry.diArr} r={dotRadius} fill={entry.color} stroke="white" strokeWidth={2}>
              <Label value={`Phase ${entry.phase}`} position="top" offset={15} fontSize={phaseLabelFontSize} fontWeight="bold" fill="#666" />
            </ReferenceDot>
          ))}


          {/* DVP milestone boxes removed; DVP V0 now only appears embedded in phase 2 callout */}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueModelChart;
