# Atlas Vision Pitch Deck — Comprehensive Analysis

---

## Slide 1 — Hero

| Notes | # | Issue | Severity |
|-------|---|-------|----------|
|addressed | 1 | **Subtitle says "AI-Powered Robotics"** but ground robotics only arrives in Phase 4 (Q1 2028+). The near-term product is a mobile app/scanner, not a robot. The lead claim is misleading. | High |
| ignore | 2 | **Brand inconsistency**: The deck is "Atlas Vision" but the contact on the Team slide reads `sales@atlasinsights.ai` / `www.atlasinsights.ai`. Two different brand names in the same deck. | High |
| addressed | 3 | **Mission statement** says "revolutionize quality control with AI inspection technology" while the black callout box describes "autonomous intelligent agents … across the automotive supply chain." These are not the same scope — quality control ≠ full supply chain. | Medium |
|addressed: highlighted self-improving pipeline | 4 | **No differentiation hook** on the hero — no mention of what makes this defensible (moat, IP, data flywheel). It reads as a description, not a pitch. | Medium |

---

## Slide 2 — The Problem

| Notes | # | Issue | Severity |
|-------|---|-------|----------|
| add a reference to: https://automated-vehicle-inspection.michelin.com/resources/how-is-ai-revolutionizing-car-inspections/#:~:text=To%20reproduce%20human%20cognition%2C%20AI,inspected%20per%20year%20worldwide%20%5B4%5D| 1 | **"550M+ vehicles inspected manually each year"** — 10% of 550M = 55M vehicles. No source cited. This is the deck's foundational market claim and it needs attribution. | High |
| addressed, changed to qualitative statements| 2 | **"Up to 30% of defects undetected"** — no source. This is the core pain-point stat that justifies the product; unsubstantiated it will be challenged in any serious meeting. | High |
|addressed, changed to qualitative statements | 3 | **"Hundreds of millions annually"** in error costs is vague to the point of meaninglessness. A specific figure (e.g., $X per vehicle × Y vehicles) would be far more credible. | Medium |
| ignore| 4 | **Image captions are empty**. The `<p>` tags under both images contain only code comments — no overlay text is rendered. The images appear unlabeled on screen. | Low |
| removed| 5 | Scope mismatch: headline says **Pre-Delivery Inspection (PDI)** but Phase 1 of the roadmap targets rental and used-car inspection — a different segment. The problem being described doesn't cleanly match the first product being sold. | Medium |

---

## Slide 3 — The Solution

| Notes | # | Issue | Severity |
|-------|---|-------|----------|
| addressed| 1 | **Three pillars are inconsistent in abstraction level.** "Mobile & Agentic" and "Robotic & Autonomous" describe the product; "Customer Centric" describes the team's service model. One of these is not like the others, and it signals lack of product scalability. | High |
| addressed| 2 | **Subtitle says "Mobile Autonomy Powered by AI"** — the Hero says "AI-Powered Robotics." Two different core identities on slides 1 and 3. | Medium |
| ignored| 3 | The UserJourney component (5 steps: Capture → Detect → Reason → Verify → Integrate) is well structured, but **"VERIFY" relies on human collaboration** described as continuous learning input. This means the "less than 1 minute" speed claim likely excludes the VERIFY step, which is not disclosed. | Medium |

---

## Slide 4 — Solution Architecture

| Notes | # | Issue | Severity |
|-------|---|-------|----------|
|addressed | 1 | **RLHF appears in two separate layers**: Layer 4 (Learning Layer — "RLHF Pipeline") and Layer 5 (Human Interface — "RLHF"). RLHF is a training method, not an interface component. This is an architecture duplication that will raise questions from any technical reviewer. | High |
| addressed| 2 | **"Autonomous Mobility Control"** is listed in the Edge Layer (present-tense product), but ground robots don't appear until Phase 4 (2028+). The architecture implies the robot hardware layer exists now. | High |
| cannot see the issue on this slide| 3 | **VLMs for real-time edge inference at under 1 minute per vehicle** is technically challenging. No mention of quantization, distillation, on-device model strategy, or latency targets. The architecture shows inference migrating on-device "gradually" (Roadmap Foundation section) — which contradicts the current-state speed claims. | High |
| help to fix this issue| 4 | The architecture has 7 layers with bidirectional arrows but **no clear data ownership or privacy boundary** is shown, despite "Governance & Security" being listed as a module. Enterprise buyers (especially in EU) will immediately ask about GDPR/data residency. | Medium |
| ignore| 5 | Layer ordering label: the component classified as "AI CORE" is `order: 3` but visually positioned "top-center" in the architecture diagram, which creates ambiguity about the processing flow direction. | Low |

---

## Slide 5 — Product Roadmap

| Notes | # | Issue | Severity |
|-------|---|-------|----------|
| shift all timelines by 2 quarters, starting at Q4 2026. For all phases, add notes on prerequisites: for phase 1 include readiness level assessment, prototype completion, resource availability | 1 | **Phase 1 launches Q2 2026 — that is in weeks (today is March 30, 2026).** No mention of current readiness level, prototype completion, or pilot customers. Investors will immediately ask what exists today. | Critical |
| rename to match pricing chart| 2 | **Phase numbering is inconsistent between roadmap and pricing chart.** The roadmap labels the VPC phase as "Phase 3" but the pricing chart calls the same phase "Phase 2.5." A reviewer cross-referencing the two slides will be confused. | High |
| ok extend timeline | 3 | **Phase 2 timeline (Q3 2026–Q1 2027 = ~6 months) for enterprise workshop integration** is very aggressive for a first deployment that includes "New Ways of Working" and "Workshop Process Redesign." Enterprise change management alone typically takes 6–12 months. | Medium |
| addressed| 4 | The roadmap subtitle says **"From mobile only workshop inspection to robotic fleet inspections"** but Phase 1 targets rental/used-car — not workshops. Internal inconsistency within the same slide. | Medium |
| suggest a fix this issue| 5 | **Four foundation modules** (Integration Management, Containerized Scaling, Cost-aware Architecture, Governance Engine) are presented without any timeline or phasing. It's unclear which are available at Phase 1 vs built later. | Medium |
|fix the value prop  | 6 | "Cost-aware Architecture: Inference gradually migrates on device once performance is stable" — this directly conflicts with the **"<1 min inspection"** promise in the Value Prop, since cloud inference latency + round-trip is far slower than the stated target. | High |

---

## Slide 6 — Pricing & Partnership

| Notes | # | Issue | Severity |
|-------|---|-------|----------|
| | 1 | **Y-axis label reads "Platform Value Scale"** — completely undefined. Is this ARR? TCV? Cumulative revenue? Any investor reviewing this chart will need to know what the unit is before it means anything. | Critical |
| | 2 | **Consultancy revenue starts at Month 0 ($150K)** before any product revenue exists. This implies advisory/consultancy contracts are already signed, but this is never mentioned elsewhere in the deck. If real, it's a strong proof point that's being buried. | High |
| | 3 | **Phase numbering mismatch**: This chart uses "Phase 2.5" for the VPC deployment; the roadmap slide uses "Phase 3." Same product, different phase labels. | High |
| | 4 | **Technology revenue jumps 5× in 6 months** (Month 6: $500K → Month 12: $2.5M). No explanation of what drives this inflection — number of customers, price increase, upsells? It looks like an arbitrary curve. | High |
| | 5 | Price ranges say "Setup" / "Multi-site Monthly" / "Custom" with **no actual figures**. Calling this a "Pricing" slide while showing zero prices weakens the commercial credibility of the deck. | Medium |
| | 6 | **X-axis domain stops at 24 months** but Phase 4 (robotics) in the roadmap extends "Q1 2028 onwards" — which from today is ~22 months, so it barely appears. The chart effectively omits the highest-value product tier. | Medium |

---

## Slide 7 — Value Proposition

| Notes | # | Issue | Severity |
|-------|---|-------|----------|
| | 1 | **This slide appears AFTER the Pricing slide** in the deck order (App.tsx array: `[Slide1, Slide2, Slide4, Slide5, Slide7, Slide9, Slide6, Slide11]`). A prospect sees the price before understanding the value. This is backwards. | High |
| | 2 | **Speed claim contradiction**: Card text says "Cut inspection time from 20+ minutes to **seconds**" but the hover/expanded state shows "20+ min → **<1 min**." These are not the same — seconds vs. a full minute is a 60× difference in claim strength. | High |
| | 3 | **"95%+ AI Trust"** is not a defined metric. Is it precision, recall, F1, mAP? "Trust" is a marketing word, not a performance benchmark. Enterprise and fleet operators will ask for a confusion matrix or at minimum a standard metric name. | Medium |
| | 4 | **"4+ Markets / All Segments"** hover card — no markets are named (Slide3_Market is commented out from the deck). The claim is unanchored with no context. | Medium |

---

## Slide 8 — The Team

| Notes | # | Issue | Severity |
|-------|---|-------|----------|
| | 1 | **"Nihon Hidankyo"** (linked to Wikipedia) is not a person — it is the Japanese organization of atomic bomb survivors that won the **2024 Nobel Peace Prize**. It is listed as a co-founder/Automotive & Operations lead. This will instantly destroy credibility with any recipient who recognizes the name. | Critical |
| | 2 | **"Narges Mohammadi"** (linked to Wikipedia) is the Iranian human rights activist who won the **2023 Nobel Peace Prize** and is currently imprisoned in Iran. Listed as "Agentic Visual AI" team member. | Critical |
| | 3 | **"Ales Bialiatski"** (linked to Wikipedia) is the Belarusian human rights activist who won the **2022 Nobel Peace Prize** and is also currently imprisoned. Listed as "Partner Success." | Critical |
| | 4 | **"María Corina Machado"** (linked to Wikipedia) is the Venezuelan opposition political leader. Listed as "Enterprise Deployment." | Critical |
| | 5 | All four of the above are **real living public figures** whose Wikipedia photos are being used as placeholder team members in a commercial deck. This is an ethical and reputational liability — if this deck reaches any investor or customer, the company's credibility is gone immediately. These must be replaced with real team members or anonymized placeholders before any external distribution. | Critical |
| | 6 | Maryam Azh is the only person with a real LinkedIn link. The co-founder "Nihon Hidankyo" has a Wikipedia link instead of LinkedIn. | High |

---

## Structural / Cross-Slide Issues

| Notes | # | Issue | Severity |
|-------|---|-------|----------|
| | 1 | **Slide 3 (Market), Slide 8 (GTM), Slide 10 (Ask/CTA) are all commented out.** The deck has no market sizing (TAM/SAM/SOM), no go-to-market strategy, and no funding ask. These are three of the five most important slides in any pitch. | Critical |
| | 2 | **No traction slide** anywhere — no pilots, letters of intent, early customers, or revenue. Given Phase 1 is weeks away, even a single pilot customer name or LOI would dramatically strengthen the deck. | High |
| | 3 | **No competitive landscape slide**. The deck never acknowledges any competitors (e.g., UVeye, Ravin AI, Tractable, DAMALYTICS). Sophisticated investors will assume the founders either don't know the space or are hiding something. | High |
| | 4 | The hero title says **"Atlas Vision"** but the product naming within the deck uses "Atlas Vision Lite," "Atlas Vision Restore," "Atlas Vision Suite," and "Atlas Ground Robotic Vision Suite" — **four product names** that could be simplified for clarity. | Low |

---

## Summary — Critical Actions Before External Distribution

1. Replace all placeholder team members with real people — this is a show-stopper
2. Re-enable or rebuild Market, GTM, and Ask slides
3. Move Value Proposition before Pricing in the slide order
4. Unify phase numbering between Roadmap and Pricing slides
5. Define the Y-axis on the pricing chart
6. Resolve "Robotics" vs "Mobile" vs "AI Agents" as the core product identity
7. Source all market statistics (550M vehicles, 30% miss rate, cost figures)
