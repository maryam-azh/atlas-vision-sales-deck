# Atlas Human Risk Evaluation Framework
## AI Impact Diagnostic — Human Interaction, Adoption & Governance
### Atlas Insights | Confidential Client Framework

---

## Overview

The **Atlas Human Risk Evaluation Framework** is Atlas Insights' structured diagnostic for assessing whether an AI system's deployment is designed, governed, and managed in ways that are safe, fair, and sustainable for the people it affects and the organizations that operate it.

It is the third evaluation panel in the **Atlas Impact Assessment**, sitting alongside the Technical Risk and Financial Risk frameworks to form the complete impact diagnostic.

Where the **Atlas Technical Evaluation Framework** asks *"Is what you've built technically sound?"* and the **Atlas Financial Risk Evaluation** asks *"Does it deliver value without creating financial exposure?"*, the Human Risk Evaluation Framework asks: *"Does this AI work for people — and is the organization governing it responsibly?"*

This framework merges what were previously two separate categories — Societal Risk and Regulatory Risk — into a single integrated assessment. The merger is intentional: regulatory obligations exist precisely because of human and societal consequences, and societal harms reliably trigger regulatory exposure. Separating them created duplication and obscured accountability. This framework treats them as one coherent risk domain addressed through three sequential, interdependent lenses.

> **Primary Context:** This framework is designed for enterprise deployments where the primary users and decision-recipients are internal employees, teams, and operational units. Criteria tagged **Consumer-Facing** apply additionally when the AI system interfaces directly with external end-users (customers, citizens, patients) and should be treated as required rather than advisory in those contexts.

---

## The Triangular Layer Structure

The framework is organized as three layers from the broadest base to the narrowest apex. The logic is sequential: **solution design must be assessed before adoption effects are meaningful, and adoption must be evaluated before governance structures can be credibly tested.** A poorly designed solution (Layer 1 failures) cannot be rescued by strong change management (Layer 2), and weak adoption makes governance structures hollow (Layer 3 is only as strong as Layer 2 enables).

```
                           ▲
                          ╱ ╲
                         ╱ 3 ╲
                        ╱─────╲
                       ╱   2   ╲
                      ╱─────────╲
                     ╱     1     ╲
                    ╱─────────────╲

        Layer 1 — HUMAN-AI INTERACTION              (Base)
        Layer 2 — ADOPTION & WAYS OF WORKING
        Layer 3 — TRUST & GOVERNANCE                (Apex)
```

Each layer corresponds to a distinct organizational question and a distinct intervention type — making the framework directly actionable, not just diagnostic.

| Layer | Question | Intervention Type |
|-------|----------|-------------------|
| Layer 1: Human-AI Interaction | Is the solution designed to keep humans appropriately in control? | Solution / product design |
| Layer 2: Adoption & Ways of Working | Are people equipped and empowered to work effectively alongside AI? | Change management & capability building |
| Layer 3: Trust & Governance | Are the structures in place to govern AI responsibly and maintain stakeholder confidence? | Policy, oversight, and institutional design |

---

## Layer 1 — Human-AI Interaction

> *Is the solution designed to keep humans appropriately in control of AI-influenced decisions?*

This layer assesses the solution architecture itself — the design choices that determine how human judgment is embedded in, or excluded from, the AI-augmented workflow. It is the entry-level gate: a solution that bypasses human control by design cannot be governed into safety at a later layer.

---

### 1A — Approval & Control Workflows

These criteria assess whether the AI solution includes purposefully designed checkpoints at which humans review, approve, override, or redirect AI outputs before consequential actions occur.

| Criterion | Description | Context | Score (1–5) |
|-----------|-------------|---------|-------------|
| **Decision Authority Mapping** | Is there a documented and enforced map of which decisions the AI executes autonomously, which require human approval before action, and which are reserved for human judgment only? Is this map reviewed as the system evolves? | All | |
| **HITL Gate Design** | Are human review and approval checkpoints embedded at the appropriate decision points in the workflow? Are these gates mandatory (cannot be bypassed) or advisory? For high-stakes decisions, mandatory gates are required. | All / High-Stakes | |
| **Override Capability** | Can authorized users — employees, reviewers, managers — reject, modify, or redirect AI recommendations at the point of use? Is override capability practical and prominent, not buried in a settings menu? | All | |
| **Escalation Path Design** | Are clear escalation routes defined and accessible for cases the AI cannot handle confidently, where stakes exceed the system's remit, or where the user disagrees with the output? Does escalation reach a human with appropriate authority and context? | All | |
| **Action Reversibility (Workflow Design)** | For AI systems that trigger real-world actions (send communications, modify records, initiate transactions): are actions designed to be staged for human confirmation before irreversible execution? Is the staging step built into the workflow, not reliant on user vigilance? | Agentic | |

**Layer 1A Threshold:** Average score ≥ 3.0. HITL Gate Design scoring 1 for any high-stakes deployment is a blocker.

---

### 1B — Transparency at Point of Use

These criteria assess whether the people using or affected by the AI system have sufficient visibility into what it is doing, why, and where its limits lie — at the moment they need that information, not through separate documentation.

| Criterion | Description | Context | Score (1–5) |
|-----------|-------------|---------|-------------|
| **AI Disclosure** | Are users clearly and consistently informed that they are working with or being assisted by an AI system? For internal deployments: do employees understand the AI's role in their workflow and decisions? For consumer-facing: is disclosure prominent and not buried in terms of service? | All / Consumer-Facing | |
| **Confidence & Uncertainty Surfacing** | Does the solution actively surface uncertainty signals to users — indicating when AI outputs are high-confidence versus speculative, and when human scrutiny is especially warranted? Does it avoid presenting all outputs with uniform apparent certainty? | All | |
| **Explanation on Demand** | Can users access a meaningful, plain-language explanation of why the AI produced a specific recommendation or output — at the point of use, not through a separate process? For decisions affecting individuals: can affected parties request an explanation? | All / High-Stakes | |
| **Limitation Communication** | Are the AI system's known operating limitations — task scope, conditions of failure, population or data coverage gaps — communicated to users in the context of their work, not just in technical documentation? | All | |
| **Human Review Access** | Are users and affected parties actively informed of their ability to request human review, raise a concern, or opt out of AI-assisted processing — and is this right practically accessible, with a functioning response path? | Consumer-Facing / High-Stakes | |

**Layer 1B Threshold:** Average score ≥ 3.0.

---

### 1C — User Protection

These criteria assess whether the solution is designed to protect the people who interact with it — particularly where AI outputs may cause harm, create discriminatory experiences, or fail vulnerable users disproportionately.

| Criterion | Description | Context | Score (1–5) |
|-----------|-------------|---------|-------------|
| **Direct Harm Risk Assessment** | Has the deployment been assessed for foreseeable ways in which AI outputs or actions could directly harm users — through incorrect recommendations, harmful content, manipulative nudges, or inappropriate decisions? Is the risk level documented and mitigated in the design? | All | |
| **Discriminatory Output Detection** | Is there a mechanism at the point of use — or in close-to-real-time monitoring — to detect when AI outputs unfairly disadvantage specific employee groups, customer segments, or demographic communities? Are detections acted upon? | All | |
| **Dignity & Non-Degradation** | Does the system consistently produce outputs that are respectful and appropriate for the users it serves — including edge cases, unusual inputs, and adversarial scenarios? Has this been tested for the full range of expected user interactions? | All / Consumer-Facing | |
| **Vulnerable User Safeguards** | Are additional protections designed in for interactions with vulnerable users — including employees with low AI literacy, users in high-pressure decision contexts, or (for consumer-facing deployments) customers in financial distress, health crises, or with accessibility needs? | Consumer-Facing / High-Stakes | |

**Layer 1C Threshold:** Average score ≥ 3.0. Direct Harm Risk Assessment scoring 1 in a consumer-facing or high-stakes deployment is a blocker.

---

## Layer 2 — Adoption & Ways of Working

> *Are people equipped and empowered to work effectively and safely alongside AI?*

Layer 2 assesses the organizational change program — the training, role redesign, communication, and cultural conditions that determine whether AI deployment creates genuine capability uplift or embeds risk through uninformed and unsupported use. A well-designed solution deployed into an unprepared organization will underperform at best and create harm at worst.

---

### 2A — Training & Capability Building

These criteria assess whether the people whose work is changed by the AI deployment have received the knowledge and skills to use it well — critically, not just compliantly.

| Criterion | Description | Context | Score (1–5) |
|-----------|-------------|---------|-------------|
| **AI Literacy & Role-Specific Training** | Have affected employees received training that covers both general AI literacy (what AI is, how it works, where it fails) and specific, role-adapted guidance on the new AI-enabled workflow for their job? Is training completed before deployment, not after? | Internal | |
| **Critical Evaluation Skills** | Are employees trained to critically evaluate AI outputs — to recognize errors, identify hallucinations, question surprising recommendations, and apply domain judgment rather than defer automatically? Is this explicitly taught, not assumed? | Internal | |
| **New Workflow Proficiency** | Are employees demonstrably proficient in the new end-to-end workflow, including AI interaction points, approval steps, escalation paths, and override use? Has proficiency been assessed, not just attendance at training? | Internal | |
| **Continuous Learning Program** | Is training a one-time onboarding event or part of a sustained learning program that evolves as the system improves, expands, or encounters new failure modes? Is there a mechanism to distribute new learnings as the AI is updated? | Internal | |

**Layer 2A Threshold:** Average score ≥ 2.5. AI Literacy & Role-Specific Training scoring 1 before deployment is a blocker.

---

### 2B — Workforce Transition & Role Redesign

These criteria assess whether the organization has proactively managed the workforce consequences of AI adoption — including role changes, capability risks, and the cultural conditions required for healthy human-AI co-working.

| Criterion | Description | Context | Score (1–5) |
|-----------|-------------|---------|-------------|
| **Job Impact Assessment** | Has the organization explicitly assessed which roles are at risk of displacement, fundamental redesign, or scope reduction as a result of this deployment? Is the assessment documented and communicated to affected employees — not obscured? | Internal | |
| **Reskilling & Redeployment Pathways** | Are proactive reskilling, role transition, or redeployment pathways in place *before* deployment for roles at material risk? Are these pathways funded, staffed, and tracked — not aspirational? | Internal | |
| **Skill Atrophy Management** | Has the deployment been assessed for risk of degrading human expertise in areas that remain critical for oversight, quality assurance, or fallback during system failure? Are expertise-maintenance practices built into operating procedures? | Internal / High-Stakes | |
| **Psychological Safety** | Are employees practically empowered to question, challenge, or decline AI outputs — without professional penalty, social pressure, or cultural norms that equate AI deference with competence? Is dissent from AI recommendations treated as good judgment, not inefficiency? | Internal | |

**Layer 2B Threshold:** Average score ≥ 2.5.

---

### 2C — Change Management & Communication

These criteria assess whether the organizational change process has been managed deliberately — with clear communication, visible leadership commitment, and feedback loops that enable course correction during deployment.

| Criterion | Description | Context | Score (1–5) |
|-----------|-------------|---------|-------------|
| **Stakeholder Communication** | Have all affected stakeholders — employees, managers, customers or partners where relevant — been informed about the deployment: its purpose, impact on their role or experience, and where to raise concerns? Is communication ongoing, not a single launch announcement? | All | |
| **Feedback & Iteration Mechanisms** | Are there active, accessible channels for employees and users to report workflow issues, share practical experiences, and surface problems with AI outputs — and is this feedback reviewed and acted upon by the deployment team? | Internal | |
| **Leadership Sponsorship & Modelling** | Is there visible and active senior leadership support for the AI deployment? Are leaders visibly modelling appropriate use — including healthy skepticism of AI outputs — rather than signalling unconditional deference to AI recommendations? | Internal | |

**Layer 2C Threshold:** Average score ≥ 2.5.

---

## Layer 3 — Trust & Governance

> *Are the structures in place to govern AI responsibly, ensure accountability, and maintain the confidence of users, regulators, and stakeholders over time?*

Layer 3 addresses the institutional architecture that makes the AI's operation trustworthy and sustainable. This includes both the legal obligations the organization must meet and the governance structures that go beyond minimum compliance — the oversight bodies, accountability roles, algorithmic guardrails, and redress mechanisms that convert good intentions into reliable practice.

---

### 3A — Regulatory Compliance & Obligations

These criteria assess whether the organization has identified its legal and regulatory obligations for this deployment and is actively working to meet them — with documented status, owners, and remediation plans.

| Criterion | Description | Context | Score (1–5) |
|-----------|-------------|---------|-------------|
| **Regulatory Identification & Mapping** | Have all applicable regulations, sector-specific guidelines, and relevant voluntary frameworks been identified and mapped to this specific AI deployment? (Applicable frameworks may include: EU AI Act, GDPR, sector-specific AI regulations in financial services / healthcare / legal, and national AI guidance.) | All | |
| **Legal Risk Classification** | Has the AI system been formally classified under applicable risk frameworks — including EU AI Act risk tiers (unacceptable / high / limited / minimal) and sector-specific risk taxonomies? Is classification documented, reviewed, and defensible? | All | |
| **Compliance Status & Gap Ownership** | Is the current compliance status for each identified obligation documented? Are gaps assigned to named owners with remediation timelines? Is compliance status actively maintained — not a one-time assessment? | All | |
| **Data Protection Obligations** | Are data protection requirements relevant to the AI system implemented and evidenced — including lawful basis for processing, purpose limitation, data minimization, retention schedules, and subject rights procedures? | All | |

**Layer 3A Threshold:** Average score ≥ 3.0. Legal Risk Classification scoring 1 is a blocker.

---

### 3B — Algorithmic Guardrails & Safety Controls

These criteria assess whether the AI system operates within defined boundaries — with active controls that prevent harmful outputs, monitor for inequitable patterns, and ensure the system's behavior can be governed over its lifetime.

| Criterion | Description | Context | Score (1–5) |
|-----------|-------------|---------|-------------|
| **Output & Content Guardrails** | Are appropriate guardrails deployed to prevent the AI from producing outputs that are harmful, out-of-scope, legally non-compliant, or organizationally inappropriate? Are guardrails actively maintained as the system and its use evolves? | All | |
| **Fairness & Equity Monitoring** | Are AI outputs and downstream decisions monitored on an ongoing basis for discriminatory or inequitable patterns across user groups, employee demographics, or customer segments? Are monitoring results reviewed and acted upon — not just logged? | All | |
| **Audit Trail Governance** | Is there a sufficient, governed audit trail to reconstruct AI decisions, identify who made or approved them, and assess their impact after the fact? Does the trail satisfy both internal governance requirements and applicable regulatory audit obligations? | All / High-Stakes | |
| **Model Lifecycle Governance** | Is there a defined and enforced governance process for monitoring model performance, triggering reviews, approving updates, managing vendor changes, and retiring the system? Is lifecycle governance owned and active — not ad hoc? | All | |

**Layer 3B Threshold:** Average score ≥ 3.0. Audit Trail Governance scoring 1 for any high-stakes or regulated deployment is a blocker.

---

### 3C — Institutional Oversight & Accountability

These criteria assess whether the organization has the human governance structures — accountability roles, oversight bodies, and redress mechanisms — that give the AI system's operation genuine institutional backing rather than notional approval.

| Criterion | Description | Context | Score (1–5) |
|-----------|-------------|---------|-------------|
| **Accountability Role Assignment** | Are specific named roles or functions explicitly accountable for the AI system's governance outcomes — including both technical performance and human impact? Is there zero accountability vacuum: every consequential decision and outcome has an identifiable owner? | All | |
| **Governance Body & Escalation Authority** | Is there a governance body — formal ethics or AI committee, risk committee with AI remit, or equivalent — with genuine authority to review, challenge, modify, or halt the AI system's operation? Does it meet regularly and maintain documented decisions? | All | |
| **Grievance & Redress Mechanism** | Is there a functioning, accessible process for employees and (where relevant) customers or affected parties to contest, query, escalate, or seek remedy for AI-influenced decisions? Are complaints tracked, reviewed, and resolved — not just logged? | All / Consumer-Facing | |
| **Reputational Risk Management** | Is there a process to monitor and respond to reputational consequences of the AI deployment — including internal trust incidents, public issues, media coverage, and stakeholder concerns? Is reputational risk explicitly included in the AI risk register? | All | |

**Layer 3C Threshold:** Average score ≥ 3.0. Accountability Role Assignment scoring 1 in any production deployment is a blocker.

---

## Scoring Summary

### Per-Layer Score Table

| Layer | Sub-Domains | Total Criteria | Max Score | Pass Threshold |
|-------|-------------|----------------|-----------|----------------|
| Layer 1: Human-AI Interaction | 1A Approval & Control / 1B Transparency / 1C User Protection | 14 | 70 | Avg ≥ 3.0; HITL & harm blockers |
| Layer 2: Adoption & Ways of Working | 2A Training / 2B Workforce Transition / 2C Change Management | 11 | 55 | Avg ≥ 2.5; training blocker pre-deployment |
| Layer 3: Trust & Governance | 3A Compliance / 3B Guardrails / 3C Oversight | 12 | 60 | Avg ≥ 3.0; classification & accountability blockers |
| **Total** | | **37** | **185** | |

*This framework consolidates and supersedes the previous Atlas Societal Risk framework (Privacy Violations / People & Culture / Workflow Disruption) and the Atlas Regulatory Risk framework (Non-compliance / Organizational Reputation / Algorithmic Governance). Key elements mapped to new homes: Human-in-the-Loop → 1A; System Transparency → 1B; Override Capability → 1A; Clear Accountability → 3C; Algorithmic Governance → 3B; Non-compliance → 3A; Organizational Reputation → 3C; People & Culture → 2B–2C; Workflow Disruption → 1A + 2A.*

---

### Overall Human Risk Score

The weighted average across all three layers:

| Layer | Weight | Rationale |
|-------|--------|-----------|
| Layer 1 | 40% | Foundational — solution design failures propagate into every interaction; cannot be compensated by training or governance |
| Layer 2 | 35% | Operational — adoption readiness determines whether the designed controls are actually used |
| Layer 3 | 25% | Institutional — governance structures are essential but only as strong as the solution design and adoption program they govern |

| Score Band | Rating | Interpretation |
|------------|--------|----------------|
| 85–100 | **Strong** | Deployment demonstrates active, evidenced care for human impact and institutional accountability |
| 70–84 | **Adequate** | Core protections in place; specific gaps require monitored remediation with named owners |
| 50–69 | **Conditional** | Material gaps in human-AI design, adoption readiness, or governance; staged deployment with active remediation plan required |
| Below 50 | **Not Acceptable** | Fundamental human and governance risks unaddressed; deployment should not proceed |

---

### Scoring Approach

Human Risk criteria are assessed through structured consultant judgment, document review, stakeholder interviews, and workflow observation. A five-point rubric applies across all criteria:

| Score | Descriptor | Meaning |
|-------|------------|---------|
| 5 | **Proactive** | Comprehensive, evidenced approach; actively monitored and improved; anticipates risks before they materialize |
| 4 | **Adequate** | Meaningful measures in place and functioning; minor gaps documented and in active remediation |
| 3 | **Partial** | Some measures in place but with material gaps; issues acknowledged but not systematically addressed |
| 2 | **Acknowledged** | Risk recognized and discussed; no substantive action taken — intent without execution |
| 1 | **Absent** | No evidence of consideration; risk has not been assessed or addressed |

---

## High-Stakes Deployment Modifier

For AI systems classified as high-stakes — those involving employment decisions, credit and insurance assessment, healthcare guidance, legal proceedings, education outcomes, or public benefits — all Layer 1 and Layer 3A–3C criteria carry a **minimum pass threshold of 4.0** rather than the standard 3.0. These deployment contexts involve legally heightened duties of care and significantly greater consequences of failure.

High-stakes classification is confirmed during the Atlas Compass evaluation (Dimension 5: Ethical & Regulatory Risk) and carries forward automatically into this assessment.

For **consumer-facing deployments**, all Layer 1C criteria and the Consumer-Facing-tagged criteria in Layer 3C additionally adopt the 4.0 minimum threshold, regardless of high-stakes classification.

---

## Connection to the Atlas Evaluation Framework

### Three-Category Impact Assessment

This framework is the Human Risk panel within the Atlas three-category evaluation structure:

| Category | Framework | Question |
|----------|-----------|----------|
| **Technical Risk** | Atlas Technical Evaluation Framework | Is what you've built technically sound? |
| **Human Risk** | Atlas Human Risk Evaluation Framework *(this document)* | Does this AI work for people and is it governed responsibly? |
| **Financial Risk** | Atlas Financial Risk Evaluation Framework *(forthcoming)* | Does it deliver value without creating financial exposure? |

### Connection to Other Atlas Frameworks

| Framework | Role | How Human Risk Evaluation Connects |
|-----------|------|-------------------------------------|
| **Atlas Polaris** | Organizational readiness | Polaris Dimension 2.1 (People & Culture) maps directly to Layer 2B–2C. Polaris Dimension 3.1 (Ethical & Risk Framework) is the organizational prerequisite for Layer 3B–3C. A Polaris score below 3.0 on either dimension is a strong predictor of Layer 2–3 human risk gaps. |
| **Atlas Compass** | Use case investment decision | Compass Dimension 5 (Ethical & Regulatory Risk) triggers the high-stakes modifier and informs the baseline Layer 3A classification. |
| **Technical Evaluation Framework** | Technical risk assessment | Technical Layer 3A (Fairness) provides the evidence input for Layer 1C (Discriminatory Output Detection). Technical Layer 3C (Explainability) provides the technical capability underlying Layer 1B (Explanation on Demand). These technical capabilities are prerequisites for the human-facing criteria that depend on them. |
| **Atlas AI Roadmap Report** | Client deliverable | Human Risk scores in Layers 2B and 3C translate directly into Horizon 1 initiatives: adoption programs (2B), governance establishment (3C), and HITL redesign (1A). |

---

## MECE Summary: What Each Risk Category Owns

| Topic | Technical Risk | Human Risk | Financial Risk |
|-------|---------------|------------|---------------|
| Bias | Model-level bias metrics (demographic parity, equalized odds) | Discriminatory outcome monitoring; fairness as governance obligation | Financial loss from discriminatory practice litigation |
| Privacy | PII output leakage as technical flaw; model inversion risk | Privacy as individual right; consent design; data protection obligations | GDPR fines; data breach costs |
| Explainability | Technical capability exists (SHAP, CoT, citations) | Explanation accessible to affected users at point of use | Regulatory penalties for non-explainable high-stakes decisions |
| Human oversight | Override is technically implementable | Override is practiced meaningfully; HITL is embedded in workflow | Cost of errors from insufficient human oversight |
| Accountability | Reasoning is logged and technically traceable | Organizational accountability roles are defined and active | Liability exposure from accountability gaps |
| Compliance | Technical compliance architecture (data handling, security) | Regulatory obligations identified, classified, and managed | Financial penalties, remediation costs |
| Workforce | — | Job displacement, reskilling, psychological safety | Productivity loss, reskilling costs, attrition costs |

---

## What Needs to Improve — Open Questions for Next Draft

1. **Agentic-specific addendum:** Agentic systems (those taking autonomous real-world actions) have distinct Layer 1 risk profiles — particularly on Action Reversibility, Decision Authority Mapping, and Escalation Path Design. A dedicated agentic addendum, parallel to the one in the Technical framework, should be developed. It should link the human-facing workflow controls here with the technical safeguards in Technical Layer 2B.

2. **Consumer-facing completeness:** The current framework flags Consumer-Facing criteria but treats enterprise-internal as the default depth. For clients with significant consumer-facing deployments, Layer 1C and the external accountability criteria in Layer 3C may need expansion into a consumer-specific module.

3. **Systemic and structural risks:** The previous Societal framework included Layer 3 criteria on power concentration, long-term societal dependency, and misinformation at scale. These are not prominent in the current structure — they are implicit in Layer 3B (Guardrails) and 3C (Governance Body) but not named as criteria. For clients operating at sector scale or with public-facing AI, a structural risk addendum should be considered.

4. **Maturity calibration by organization size:** The governance criteria in Layer 3C assume a level of organizational maturity (formal committees, documented accountability) that may not exist in smaller organizations. A simplified Layer 3 track for SME deployments should be developed — focusing on minimum viable governance rather than full institutional architecture.

5. **Integration cadence with Technical framework:** Layer 1B (Transparency at Point of Use) depends on Layer 3C of the Technical framework (Explainability & Traceability) having been assessed first. A formal prerequisite note linking the two assessments — and recommending that Technical and Human Risk evaluations are conducted in sequence, not in parallel — should be added to the Impact Assessment methodology.

6. **Financial Risk cross-reference:** Several Human Risk criteria have direct financial consequences — GDPR fines (3A), litigation from discriminatory outputs (1C/3B), productivity loss from poor adoption (2A). The Financial Risk framework, when developed, should explicitly cross-reference these criteria rather than re-assess them.

---

*Atlas Insights | www.atlasinsights.ai*
*© Atlas Insights. Confidential and Proprietary. First draft — for internal review.*
*Framework references: EU AI Act (2024) Titles III–IV; GDPR Art. 22 (automated decision-making); NIST AI RMF — Govern, Map, and Manage functions (2023); ISO/IEC 42001 AI Management Systems; UNESCO Recommendation on the Ethics of AI (2021); BCG Henderson Institute AI & Society practice; McKinsey Change Management practice — ADKAR model; Prosci Change Management methodology.*
