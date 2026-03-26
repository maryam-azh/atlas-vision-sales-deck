# Interactive Deck

Owner: Petteri Teikari

## Framework Options for Interactive Decks

Interactive, data-driven pitch decks are absolutely the future. Let me break down the best approaches for building “deck-as-code” with live data, 3D models, and interactive elements.

### **Reveal.js Based Solutions** (Most Mature)

**Slides.com** (Reveal.js commercial)

- Can embed iframes (Streamlit apps, Three.js)
- Version control via Git
- Not truly dynamic though

**Reveal.js + Custom Build**

```jsx
// reveal-config.jsReveal.initialize({
  plugins: [ RevealHighlight, RevealNotes, RevealMath ],  embedded: true,  // Custom plugin for live data  dependencies: [{
    src: 'plugin/live-data.js',    async: true,    callback: function() {
      connectToBackend();    }
  }]
});
```

### **React-Based Deck Frameworks** (Best for Interactivity)

**MDX Deck / Spectacle**

```jsx
// deck.mdximport { RangeSlider } from './components/Slider'import { FinancialModel } from './components/FinancialModel'import { ProductDemo } from './components/ThreeJSDemo'# Our Vision
---<FinancialModel>  {({ mrr, runway }) => (
    <>      <h2>Financial Projections</h2>      <RangeSlider
        label="Growth Rate"
        onChange={(rate) => updateModel(rate)}      />      <LineChart data={projections} />      <Metric value={runway} label="Runway" />    </>  )}</FinancialModel>---<ProductDemo>  <Canvas>    <OrbitControls />    <ProductModel />  </Canvas></ProductDemo>
```

**Slidev** (Vue-based, my favorite)

- Markdown-first but supports Vue components
- Built-in presenter mode, recording
- Can embed any web tech
- Example:

```markdown
---theme: default---# Our Startup<Tweet id="1234567890" />---
<!-- Financial slide with live data --><FinancialDashboard  :api-endpoint="https://api.yourcompany.com/metrics"  :interactive="true"/>---
<!-- 3D Product Demo --><ClientOnly>  <ThreeScene>    <ProductModel :rotation-speed="0.01" />  </ThreeScene></ClientOnly>
```

### **Full Custom Interactive Experiences**

**Next.js/Remix + Framer Motion**

```jsx
// pages/deck/[slide].tsximport { Canvas } from '@react-three/fiber'import { motion } from 'framer-motion'import { useState, useEffect } from 'react'export default function Slide({ slideNumber }) {
  const [metrics, setMetrics] = useState({})
  useEffect(() => {
    // Real-time data via WebSocket    const ws = new WebSocket('wss://api.company.com/metrics')
    ws.onmessage = (e) => setMetrics(JSON.parse(e.data))
  }, [])
  return (
    <motion.div      initial={{ opacity: 0 }}      animate={{ opacity: 1 }}      exit={{ opacity: 0 }}    >      {slideNumber === 3 && (
        <Canvas>          <InteractiveFinancialModel
            data={metrics}            onScenarioChange={updateProjections}          />        </Canvas>      )}    </motion.div>  )
}
```

### The Stack I’d Build for You

**Architecture: “Deck as a Web App”**

```yaml
deck-platform:  frontend:    framework: Slidev or custom React (Next.js)    features:      - WebGL/Three.js for 3D      - D3.js/Recharts for charts      - Framer Motion for transitions      - WebSocket for real-time data  backend:    api: FastAPI or Node.js    connections:      - Notion API (company data)      - Causal/Financial Model API      - GitHub (version control)      - Google Cloud (real metrics)  deployment:    primary: Vercel/Netlify (for investors)    backup: Static export (for offline)
```

### **Implementation Example**

**1. Project Structure:**

```
pitch-deck/
├── slides/
│   ├── 01-intro.tsx
│   ├── 02-problem.tsx
│   ├── 03-solution-demo.tsx
│   ├── 04-market-size.tsx
│   ├── 05-financials.tsx
│   └── 06-team.tsx
├── components/
│   ├── InteractiveChart.tsx
│   ├── ARRGrowthSimulator.tsx
│   ├── Product3DModel.tsx
│   └── LiveMetrics.tsx
├── lib/
│   ├── notion.ts
│   ├── financial-model.ts
│   └── real-time.ts
└── public/
    └── models/
```

**2. Interactive Financial Slide:**

```tsx
// slides/05-financials.tsx
import { useState } from 'react'
import { Slider } from '@/components/ui/slider'
import dynamic from 'next/dynamic'

const FinancialChart = dynamic(
  () => import('@/components/FinancialChart'),
  { ssr: false }
)

export default function FinancialSlide({ liveData }) {
  const [assumptions, setAssumptions] = useState({
    growthRate: 15,
    churnRate: 5,
    averageContractValue: 1000
  })

  const projections = calculateProjections(assumptions, liveData)

  return (
    <div className="slide">
      <h1>Financial Projections</h1>

      <div className="controls">
        <label>
          Monthly Growth Rate: {assumptions.growthRate}%
          <Slider
            value={[assumptions.growthRate]}
            onValueChange={([v]) =>
              setAssumptions({...assumptions, growthRate: v})
            }
            max={50}
            step={1}
          />
        </label>
      </div>

      <FinancialChart
        data={projections}
        showScenarios={true}
        interactive={true}
      />

      <div className="metrics-grid">
        <MetricCard
          label="Runway"
          value={`${projections.runway} months`}
          trend={projections.runwayTrend}
        />
        <MetricCard
          label="ARR by 2025"
          value={`$${projections.arr2025}M`}
        />
      </div>
    </div>
  )
}
```

**3. 3D Product Demo Slide:**

```tsx
// components/Product3DModel.tsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Suspense } from 'react'

export function ProductDemo() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Stage preset="rembrandt" intensity={1}>
          <Model />
        </Stage>
        <OrbitControls enablePan={false} />
      </Suspense>

      {/* Overlay UI */}
      <Html position={[0, 0, 0]}>
        <div className="feature-callouts">
          <Callout position={[1, 2, 0]} text="AI-Powered" />
          <Callout position={[-1, 1, 0]} text="Real-time Sync" />
        </div>
      </Html>
    </Canvas>
  )
}
```

### Advanced Features to Include

**1. Audience Interaction**

```jsx
// Real-time pollingimport { Ably } from 'ably'function PollSlide() {
  const [votes, setVotes] = useState({})
  useEffect(() => {
    const ably = new Ably.Realtime(ABLY_KEY)
    const channel = ably.channels.get('pitch-poll')
    channel.subscribe('vote', (message) => {
      setVotes(prev => ({
        ...prev,        [message.data.option]: (prev[message.data.option] || 0) + 1      }))
    })
  }, [])
  return <LivePollChart data={votes} />}
```

**2. Dynamic Data Binding**

```tsx
// Connect to your Notion database
async function getTeamData() {
  const notion = new Client({ auth: NOTION_API_KEY })

  const response = await notion.databases.query({
    database_id: TEAM_DATABASE_ID
  })

  return response.results.map(member => ({
    name: member.properties.Name.title[0].text.content,
    role: member.properties.Role.select.name,
    photo: member.properties.Photo.url
  }))
}

// Use in slide
<TeamSlide data={await getTeamData()} />
```

**3. Presenter Mode with Analytics**

```jsx
// Track engagementfunction trackSlideEngagement(slideId, duration, interactions) {
  posthog.capture('slide_viewed', {
    slide_id: slideId,    duration_seconds: duration,    interactions: interactions,    viewer_id: getViewerId()
  })
}
// Presenter dashboard shows real-time engagement<PresenterView>  <CurrentSlide />  <ViewerEngagement /> {/* Live heatmap */}
  <Questions /> {/* Live Q&A */}
  <Notes /></PresenterView>
```

### Deployment & Sharing Strategy

**Multi-Platform Approach**

```yaml
deployment:  investor_meeting:    url: pitch.yourcompany.com    auth: magic_link    features: full_interactive  quick_share:    url: pitch.yourcompany.com/static    auth: public    features: reduced_interactivity  backup:    format: pdf_export    location: google_drive
```

**Version Control & Collaboration**

```bash
# Git workflow for deck updatesgit checkout -b feature/q4-financial-update
# Update financial projectionsgit commit -m "Update Q4 projections with latest data"git push origin feature/q4-financial-update
# Auto-deploy preview to pitch-preview.yourcompany.com
```

### My Recommendation

**Start with Slidev** + custom Vue components:

- Markdown-first (easy to write)
- Supports all the interactivity you want
- Great presenter mode
- Can export to PDF as backup
- Easy to integrate with your existing stack

**Then enhance with:**

1. **Three.js** for 3D product demos
2. **D3.js** for complex data viz
2b. **Anim.js** for animations
3. **WebSocket** connection to live data
4. **Notion API** for team/company info
5. **Deployment on Vercel** with password protection

[SaaS Mapping](https://www.notion.so/SaaS-Mapping-24f54280e8958033b3c6c210fe8e0e8d?pvs=21)
