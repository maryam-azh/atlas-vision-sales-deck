# Atlas Financial Risk Evaluation Framework
## AI Impact Diagnostic — Investment, Cost Governance & Value Consequence
### Atlas Insights | Confidential Client Framework

---

## Overview

The **Atlas Financial Risk Evaluation Framework** is Atlas Insights' structured diagnostic for assessing the cost exposure, financial governance, and value realization risks of an AI deployment. It asks the question that often receives the least rigorous treatment in enterprise AI programs: *"What does this actually cost, are those costs under control, and what is the financial exposure if something goes wrong?"*

Where the **Atlas Technical Evaluation Framework** asks *"Is what you've built technically sound?"* and the **Atlas Human Risk Evaluation Framework** asks *"Does it work for people and is it governed responsibly?"*, the Financial Risk Evaluation Framework asks: *"What are the cost and value risks — and are they being managed?"*

This is the third and final panel of the **Atlas Impact Assessment**, completing the three-category evaluation structure:

| Category | Framework | Core Question |
|----------|-----------|---------------|
| **Technical Risk** | Atlas Technical Evaluation Framework | Is the system technically sound? |
| **Human Risk** | Atlas Human Risk Evaluation Framework | Does it work for people and is it governed? |
| **Financial Risk** | Atlas Financial Risk Evaluation Framework *(this document)* | Are costs controlled and is the value real? |

> **MECE Boundary:** This framework assesses the *monetary dimensions* of AI deployment risk. It does not assess whether technical failures happen (Technical layer) or whether governance practices are sound (Human layer) — it assesses what those failures and governance gaps *cost*. Financial risk is the consequence layer for both Technical and Human risk: when either fails, the Financial framework quantifies the exposure. Conversely, Financial Risk also captures cost exposures that are purely economic in origin — architecture over-engineering, vendor lock-in, token cost accumulation — with no direct Technical or Human equivalent.

---

## The Triangular Layer Structure

The three layers follow a prerequisite logic: **you must understand your full cost exposure (Layer 1) before you can govern it (Layer 2), and you must govern it before you can meaningfully assess whether the investment is delivering returns or creating unacceptable financial consequence (Layer 3).**

A deployment whose total cost is unmapped cannot be governed. A deployment whose costs are ungoverned produces an ROI calculation built on unstable ground. A deployment with ungoverned costs and unmeasured returns has no financial accountability.

```
                           ▲
                          ╱ ╲
                         ╱ 3 ╲
                        ╱─────╲
                       ╱   2   ╲
                      ╱─────────╲
                     ╱     1     ╲
                    ╱─────────────╲

        Layer 1 — INVESTMENT & COST EXPOSURE        (Base)
        Layer 2 — COST GOVERNANCE & EFFICIENCY
        Layer 3 — VALUE REALIZATION & CONSEQUENCE   (Apex)
```

---

## Layer 1 — Investment & Cost Exposure

> *Does the organization have a complete, accurate picture of what this AI deployment actually costs — upfront, ongoing, and at scale?*

This is the foundational cost inventory layer. It assesses whether every significant cost dimension has been identified, modeled, and budgeted — not just the headline license or infrastructure costs, but the full economic footprint of the deployment including change program investment, governance overhead, and the architecture decisions that lock in long-run cost trajectories.

---

### 1A — Initial Investment Assessment

These criteria assess whether the upfront investment decision has been made with full financial visibility — including the make/buy/partner tradeoff, total cost of ownership, and the assumptions underlying the business case.

| Criterion | Description | Context | Score (1–5) |
|-----------|-------------|---------|-------------|
| **Build vs Buy Financial Analysis** | Has a rigorous make/buy/partner financial analysis been conducted? Does it include full TCO comparison across options — not just license fees vs. development cost, but integration, customization, migration, vendor dependency, and future optionality costs? Is the analysis based on independently validated estimates, not vendor projections alone? | All | |
| **Total Cost of Ownership (TCO) Modeling** | Is the TCO modeled over a realistic horizon (minimum 3 years)? Does it include all cost categories: capital, operational, change management, governance overhead, and decommissioning? Are both expected-case and high-cost-scenario TCOs documented? | All | |
| **Integration & Implementation Cost Scoping** | Are one-time implementation costs fully scoped and budgeted: integration engineering, data migration, infrastructure provisioning, security configuration, testing, and go-live support? Are these costs held separately from the ongoing operational budget? | All | |
| **Vendor & Contract Cost Structure** | Are licensing models, pricing tiers, volume commitments, usage-based cost structures, and contract terms fully understood before commitment? Are penalty clauses, auto-renewal terms, and exit costs explicitly reviewed and documented? | All | |
| **Business Case Assumption Validation** | Have the cost assumptions in the business case been validated against comparable real-world implementations — not derived solely from vendor case studies or analyst benchmarks? Are assumption ranges documented alongside point estimates? | All | |

**Layer 1A Threshold:** Average score ≥ 3.0. TCO Modeling scoring 1 is a blocker — no deployment decision should be made without a 3-year cost model.

---

### 1B — Operational Cost Baseline

These criteria assess whether the ongoing costs of running the AI system in production have been accurately modeled across all cost dimensions — including the GenAI-specific cost drivers (token usage, model inference) that routinely exceed initial projections.

| Criterion | Description | Context | Score (1–5) |
|-----------|-------------|---------|-------------|
| **Infrastructure Cost Modeling** | Are compute, storage, and networking costs modeled for expected production load — including peak usage, concurrency events, scaling triggers, and geographic distribution? Are costs modeled for both current and projected future scale? | All | |
| **Token & API Cost Projection** | For LLM-based deployments: are token costs (input + output + context) modeled for expected usage volumes across all use cases? Do projections include worst-case high-use and low-adoption scenarios? Are per-user, per-query, and per-workflow cost estimates available? | GenAI | |
| **Model Selection Cost Implications** | Has the choice of model (size, provider, hosting type) been evaluated for its ongoing cost implications — not just capability? Are the cost differences between model tiers (e.g., frontier vs. mid-tier vs. fine-tuned smaller model) explicitly modeled for the intended workload? | GenAI | |
| **Maintenance Cost Trajectory** | Are ongoing maintenance costs budgeted: model updates and retraining cycles, prompt engineering iterations, dependency management, API version upgrades, and integration maintenance? Does the budget account for cost growth as the system scales or expands? | All | |
| **Governance & Tooling Overhead** | Are the costs of responsible AI operation included in the financial model: monitoring platforms, evaluation tooling, audit infrastructure, compliance systems, and the personnel time required to operate them? | All | |

**Layer 1B Threshold:** Average score ≥ 3.0. Token & API Cost Projection scoring 1 for any GenAI deployment in production is a blocker.

---

### 1C — Architecture Economics

These criteria assess whether the architectural decisions that determine long-run cost structure have been evaluated with financial rigor — not just for technical fit, but for their cost implications over the deployment lifetime.

| Criterion | Description | Context | Score (1–5) |
|-----------|-------------|---------|-------------|
| **Architecture Cost-Efficiency Tradeoff** | Has the architectural choice — RAG vs. fine-tuning, agentic vs. deterministic workflow, modular vs. monolithic pipeline — been evaluated for its cost implications over a 2–3 year horizon? Are the ongoing cost differences between architectural options documented? | All | |
| **Deployment Model Cost Comparison** | Has the hosting and deployment model (cloud-managed API, self-hosted open source, hybrid, on-premise) been evaluated for total cost — including the hidden costs of self-hosting (infrastructure, DevOps overhead, security, compliance)? | All | |
| **Change Management Budget Adequacy** | Is the budget for the change program — training, adoption support, role redesign, and communication — sized appropriately for the scale and complexity of the deployment? Is it a separately protected budget line, not absorbed into project contingency? | All | |
| **Build vs Buy Reassessment Trigger** | Is there a defined financial trigger to reassess the build/buy/partner decision as the market evolves — particularly as open-source alternatives mature, vendor pricing changes, or internal capability grows? Is this built into the annual planning cycle? | All | |

**Layer 1C Threshold:** Average score ≥ 3.0.

---

## Layer 2 — Cost Governance & Efficiency

> *Are the identified cost drivers being actively monitored, attributed, controlled, and optimized — or are costs accumulating without accountability?*

Layer 2 assesses whether the organization is exercising financial governance over its AI operating costs in real time. AI costs — particularly GenAI token costs and cloud infrastructure — can escalate non-linearly with usage growth, unexpected input patterns, or architectural inefficiency. Without active cost governance, the gap between modeled and actual costs can be substantial and discovered late.

---

### 2A — Cost Monitoring & Attribution

These criteria assess whether production costs are visible, attributed, and governed with sufficient granularity to support informed decisions about scaling, optimization, and investment continuation.

| Criterion | Description | Context | Score (1–5) |
|-----------|-------------|---------|-------------|
| **Real-Time Cost Monitoring & Alerting** | Are AI running costs monitored in real time or near-real time in production? Are automated alerts configured for cost threshold breaches — particularly for token usage spikes, infrastructure auto-scaling events, and API rate limit costs? | All | |
| **Cost Attribution by Use Case & Business Unit** | Are AI operating costs attributed to specific business units, products, or use cases with sufficient granularity to enable accountability, chargeback, and informed scaling decisions? Is attribution automated or requires manual effort? | Enterprise-Scale | |
| **Token & API Cost Governance** | Is there a defined policy governing token usage — including prompt length guidelines, context window management, caching strategy, output truncation, and model selection by cost tier? Is compliance with this policy monitored? | GenAI | |
| **Cost Anomaly Detection** | Is there a mechanism to detect unexpected cost patterns — sudden usage spikes, runaway agentic loops, inefficient queries — before they produce material budget overruns? Are cost anomalies investigated and resolved? | All / Agentic | |

**Layer 2A Threshold:** Average score ≥ 2.5. Real-Time Cost Monitoring scoring 1 for any production GenAI deployment is a blocker.

---

### 2B — Cost Optimization Program

These criteria assess whether the organization is actively working to improve the cost efficiency of its AI deployment — through architectural optimization, vendor negotiation, and systematic efficiency practices.

| Criterion | Description | Context | Score (1–5) |
|-----------|-------------|---------|-------------|
| **Model & Prompt Optimization** | Is there an active program to improve the cost efficiency of AI inference — including prompt compression, few-shot reduction, output format optimization, model distillation, and routing of simpler tasks to lower-cost model tiers? Are efficiency gains tracked? | GenAI | |
| **Infrastructure Scaling & Reservation Strategy** | Are infrastructure costs optimized through reserved capacity commitments, spot instance strategies, auto-scaling policies, and right-sizing? Is scaling behavior reviewed against actual usage patterns periodically? | All | |
| **Vendor Contract & Pricing Optimization** | Are vendor contracts actively managed against actual usage data? Are volume commitment tiers being utilized efficiently? Are renewal and renegotiation cycles informed by usage analytics and competitive market benchmarks? | All | |
| **Cost Optimization Review Cadence** | Is cost optimization a standing item in the AI program's governance cadence — reviewed at a defined frequency (quarterly minimum) with documented findings and actions? Is cost efficiency explicitly a success metric alongside performance metrics? | All | |

**Layer 2B Threshold:** Average score ≥ 2.5.

---

### 2C — Adoption Cost Efficiency

These criteria assess the financial dimension of the adoption program — whether the change management investment is appropriately sized, tracked, and connected to measurable adoption outcomes that justify the expenditure.

| Criterion | Description | Context | Score (1–5) |
|-----------|-------------|---------|-------------|
| **Change Program Cost Tracking** | Are change management and adoption costs tracked against budget in real time — including training delivery, content development, coaching, communication, and role redesign activities? Are overruns detected early? | All | |
| **Adoption-to-Investment Return Link** | Is there a mechanism to assess whether change management investment is generating adoption return — i.e., are usage rates, workflow compliance, and productivity gains being measured and connected to change program spending? | All | |
| **Reskilling Cost Management** | Are the costs of workforce reskilling and transition support tracked as a distinct budget category with defined scope and completion criteria — not treated as an open-ended HR overhead? | All | |

**Layer 2C Threshold:** Average score ≥ 2.5.

---

## Layer 3 — Value Realization & Consequence Risk

> *Is the investment delivering the projected returns — and what is the financial exposure if the deployment underperforms or fails?*

Layer 3 is the apex: the fewest criteria but the highest strategic consequence. It assesses whether the economic case for the AI deployment is being validated in practice, and whether the organization has quantified and prepared for the financial consequences of underperformance, system failure, regulatory breach, and strategic dependency.

---

### 3A — ROI & Value Realization

These criteria assess whether the organization is actively measuring whether projected financial returns are being captured — and has mechanisms to detect underperformance early enough to act.

| Criterion | Description | Context | Score (1–5) |
|-----------|-------------|---------|-------------|
| **Value Realization Measurement** | Is there a defined, operational mechanism to measure whether the projected financial benefits — productivity gains, cost reduction, revenue uplift, error reduction — are being realized post-deployment? Are baselines established before deployment so measurement is meaningful? | All | |
| **Business Case vs Actual TCO Tracking** | At regular intervals (6-month minimum), is the actual total cost of ownership compared against the original business case projection? Are variances documented, explained, and incorporated into forward planning? | All | |
| **Underperformance Detection & Response Trigger** | Is there a defined financial threshold at which sustained underperformance triggers a formal review — including the options of redesign, descaling, or decommissioning? Is this trigger documented in the governance framework, not left to informal judgment? | All | |

**Layer 3A Threshold:** Average score ≥ 3.0.

---

### 3B — Cost of Failure & Strategic Exposure

These criteria assess the financial downside risk — quantifying the cost exposure from AI system failures, regulatory breaches, operational dependencies, and strategic miscalculations that cannot be fully prevented but must be financially planned for.

| Criterion | Description | Context | Score (1–5) |
|-----------|-------------|---------|-------------|
| **Cost of AI Error & Remediation** | Has the financial cost of AI errors been modeled — including remediation costs, rework, customer or employee compensation, manual correction overhead, and reputational repair? Is a financial reserve or insurance mechanism in place for material error scenarios? | All / High-Stakes | |
| **Regulatory & Legal Financial Exposure** | Has the potential financial exposure from regulatory non-compliance been quantified — including applicable fine structures (e.g., EU AI Act: up to €35M or 7% global turnover; GDPR: up to €20M or 4%), litigation costs, and mandatory remediation spend? Is this exposure included in the risk register with an owner? | All | |
| **Vendor Lock-in & Switching Cost Exposure** | Has the financial cost of vendor dependency been quantified — including switching costs, replatforming costs, data portability limitations, and the negotiating disadvantage of single-vendor dependency at contract renewal? Is diversification or exit optionality built into the architecture and contracting strategy? | All | |
| **Business Continuity Financial Impact** | Has the financial cost of AI system downtime, degraded performance, or sudden vendor unavailability been assessed — including revenue at risk, manual process fallback costs, and SLA penalty exposure? Is the business continuity plan financially stress-tested? | Enterprise-Scale / High-Stakes | |

**Layer 3B Threshold:** Average score ≥ 3.0. Regulatory & Legal Financial Exposure scoring 1 for any deployment subject to EU AI Act high-risk classification is a blocker.

---

## Scoring Summary

### Per-Layer Score Table

| Layer | Sub-Domains | Total Criteria | Max Score | Pass Threshold |
|-------|-------------|----------------|-----------|----------------|
| Layer 1: Investment & Cost Exposure | 1A Initial Investment / 1B Operational Baseline / 1C Architecture Economics | 14 | 70 | Avg ≥ 3.0; TCO & token cost blockers |
| Layer 2: Cost Governance & Efficiency | 2A Monitoring & Attribution / 2B Optimization / 2C Adoption Cost Efficiency | 11 | 55 | Avg ≥ 2.5; real-time monitoring blocker |
| Layer 3: Value Realization & Consequence | 3A ROI & Value / 3B Failure & Exposure | 7 | 35 | Avg ≥ 3.0; regulatory exposure blocker |
| **Total** | | **32** | **160** | |

### Overall Financial Risk Score

| Layer | Weight | Rationale |
|-------|--------|-----------|
| Layer 1 | 40% | Foundational — no cost governance or ROI measurement is credible without a complete cost map |
| Layer 2 | 35% | Operational — ungoverned costs accumulate non-linearly in AI deployments; active control is essential |
| Layer 3 | 25% | Strategic — value capture and consequence exposure define the financial success or failure of the program |

| Score Band | Rating | Interpretation |
|------------|--------|----------------|
| 85–100 | **Strong** | Deployment has full financial visibility, active cost governance, and credible value measurement |
| 70–84 | **Adequate** | Core financial disciplines in place; specific gaps with named owners and remediation timelines |
| 50–69 | **Conditional** | Material cost visibility or governance gaps; financial risk is uncontrolled in one or more dimensions |
| Below 50 | **Not Acceptable** | Fundamental financial risk — deployment is proceeding without adequate cost understanding or controls |

---

### Scoring Approach

Financial Risk criteria combine quantitative assessment (where cost models, monitoring data, and financial records provide objective evidence) and qualitative judgment (where the quality of financial planning and governance practices is assessed). A five-point rubric applies:

| Score | Descriptor | Meaning |
|-------|------------|---------|
| 5 | **Proactive** | Full financial visibility; active governance; stress-tested; continuously optimized |
| 4 | **Adequate** | Financial model complete and current; governance in place with minor gaps |
| 3 | **Partial** | Core cost categories identified but material gaps in modeling, governance, or measurement |
| 2 | **Acknowledged** | Financial risks recognized but not formally modeled or governed; intent without action |
| 1 | **Absent** | No financial model, no cost governance, or no consequence quantification in this area |

---

## GenAI Cost Risk Addendum

Large language model and generative AI deployments introduce cost dynamics with no classical ML equivalent. These five criteria from the framework warrant special attention in any GenAI deployment, because cost exposure can escalate rapidly without detection:

| Criterion | Layer | Risk if Score = 1 |
|-----------|-------|-------------------|
| Token & API Cost Projection | 1B | Production costs exceed budget by orders of magnitude at scale |
| Model Selection Cost Implications | 1B | Frontier model pricing applied to tasks a smaller model handles equally well |
| Token & API Cost Governance | 2A | No policy or monitoring for token usage; costs accumulate without visibility |
| Model & Prompt Optimization | 2B | Systematic inefficiency in inference cost with no improvement program |
| Cost Anomaly Detection | 2A | Runaway agent loops or prompt injection-driven cost spikes go undetected |

Any GenAI deployment with two or more of these criteria scoring 1 should be treated as carrying **High Financial Risk** regardless of overall score.

---

## MECE Cross-Reference: What Each Risk Category Owns

| Topic | Technical Risk | Human Risk | Financial Risk |
|-------|---------------|------------|---------------|
| Model selection | Performance adequacy for the task | Governance of model lifecycle; accountability for model decisions | Cost-performance tradeoff; switching cost; vendor dependency |
| AI errors & failures | Probability and nature of technical failure | Accountability structure; remediation process; human oversight | Financial cost of remediation, compensation, rework |
| Regulatory compliance | Technical architecture for compliance (data handling, security controls) | Compliance obligations identified and managed; legal classification | Financial exposure from non-compliance: fines, litigation, remediation spend |
| Adoption | — | Training quality, change management practice, psychological safety | Change program budget adequacy; adoption ROI measurement |
| Architecture | Technical fitness for purpose | Governance of architecture decisions | Cost implications of architecture choices over deployment lifetime |
| Vendor management | Technical due diligence on vendor capability | Contract governance; accountability flow-down | Pricing, lock-in, switching costs, contract optimization |
| Business continuity | Technical fallback and recovery capability | Escalation process; human response protocols | Financial cost of downtime, SLA penalties, fallback operations |

---

## Connection to Atlas Frameworks

| Framework | Role | How Financial Risk Evaluation Connects |
|-----------|------|----------------------------------------|
| **Atlas Compass** | Use case investment decision | Compass Dimension 3 (Strategic & Commercial Fit) and Dimension 6 (Financial Viability) feed directly into Layer 1A of this framework. A Compass score below 3.0 on Financial Viability should trigger a full Layer 1 assessment before investment commitment. |
| **Atlas Polaris** | Organizational readiness | Polaris Dimension 1.2 (Business Case Cohesion) maps to Layer 1A. Polaris Dimension 3.3 (Lifecycle Management) maps to Layer 2B (Cost Optimization Review Cadence). |
| **Technical Evaluation Framework** | Technical risk assessment | Technical Layer 2 (Robustness) and Layer 3 (Responsible AI) failure modes are the primary inputs to Financial Layer 3B (Cost of AI Error, Regulatory & Legal Exposure). Technical Risk scores below threshold should automatically increase the Financial Layer 3B severity assessment. |
| **Human Risk Framework** | Human and governance risk | Human Risk Layer 2 (Adoption) practice quality is a leading indicator for Financial Layer 2C (Adoption Cost Efficiency) outcomes. Human Risk Layer 3A (Regulatory Compliance) practices determine the Financial Layer 3B regulatory exposure severity. |
| **Atlas AI Roadmap Report** | Client deliverable | Financial Risk scores translate directly into Roadmap business case revisions, cost governance initiatives (Horizon 1), and TCO tracking mechanisms (Horizon 2). A Financial Risk score below 50 should trigger a Roadmap Section 3 (Investment & Risk) revision before any Horizon 1 investment approval. |

---

## What Needs to Improve — Open Questions for Next Draft

1. **Quantification thresholds:** Unlike the Technical and Human frameworks — which assess quality of practice — many Financial Risk criteria have objectively measurable counterparts (actual cost variance, fine exposure quantum, switching cost estimate). A quantitative scoring layer that converts financial model data into criteria scores directly should be developed alongside the qualitative rubric.

2. **Industry-specific cost benchmarks:** Token costs, infrastructure costs, and change management benchmarks vary substantially by industry, deployment scale, and AI system type. A benchmarking reference appendix — positioning client costs against industry norms — would make Layer 1 assessments significantly more actionable.

3. **Cost failure mode library:** Common GenAI cost failure patterns (runaway agentic loops, prompt injection-driven token abuse, underutilized reserved capacity, over-provisioned embedding infrastructure) should be documented as a reference library linked to Layer 2A criteria, enabling faster identification during assessments.

4. **ROI measurement methodology:** Layer 3A currently assesses whether value measurement exists, but does not specify how to measure it. A standardized Atlas ROI measurement methodology — including pre-deployment baseline documentation, productivity measurement approaches, and attribution methodology — should be developed as a companion tool.

5. **Integration with Atlas Compass:** Compass evaluates financial viability as a use-case selection criterion. Financial Risk evaluates it as a deployment management criterion. The handoff between the two — what financial information from Compass should automatically populate Layer 1A here — should be formalized to avoid reassessment of the same ground.

6. **Financial Risk re-assessment cadence:** Financial risk profiles change rapidly in AI — model pricing drops, usage grows, new regulatory fines emerge. A recommended re-assessment cadence (quarterly for Layer 2, semi-annual for Layers 1 and 3) should be formalized and linked to the Atlas AI Roadmap Report 18-month review schedule.

---

*Atlas Insights | www.atlasinsights.ai*
*© Atlas Insights. Confidential and Proprietary. First draft — for internal review.*
*Framework references: FinOps Foundation Cloud Cost Management Framework; Gartner TCO Modeling for AI/ML (2024); EU AI Act Title VIII (penalties and enforcement); McKinsey Global Institute — The Economic Potential of Generative AI (2023); a16z GenAI Cost Benchmarking Report (2024); MIT Sloan — Measuring AI ROI in the Enterprise.*
