# Atlas Technical Evaluation Framework
## AI Solution Diagnostic — First Draft
### Atlas Insights | Confidential Client Framework

---

## Overview

The **Atlas Technical Evaluation Framework** is Atlas Insights' structured diagnostic for assessing the technical quality, robustness, and responsible design of an AI solution. It operates at the level of a specific deployed or near-deployment AI system — a model, pipeline, workflow, or agent — rather than at the organizational or use-case selection level.

Where **Atlas Polaris** asks *"Is your organization ready for AI?"* and **Atlas Compass** asks *"Should you build this AI project?"*, the Technical Evaluation Framework asks: *"Is what you've built actually good — technically, operationally, and responsibly?"*

It is the diagnostic engine of the **Evaluation** phase shown in the Atlas Insights service model — the tool that produces the risk profile and prioritized mitigation plan referenced in the Impact Assessment framework.

> **Scope:** Applies to any AI solution regardless of architecture — classical ML models, fine-tuned LLMs, RAG pipelines, hardcoded rule-augmented systems, and fully agentic multi-step workflows. Agentic-specific criteria are flagged throughout.

---

## The Triangular Layer Structure

The framework is organized as a triangle — three layers stacked from broad base to narrow apex. The structure encodes a diagnostic prerequisite logic: **you cannot meaningfully assess a higher layer if the layer beneath it has not been verified.** A system that cannot perform its core task has no meaningful responsible AI story. A system that performs accurately but fails under real-world conditions is not robust enough to warrant governance assessment.

```
                           ▲
                          ╱ ╲
                         ╱ 3 ╲
                        ╱─────╲
                       ╱   2   ╲
                      ╱─────────╲
                     ╱     1     ╲
                    ╱─────────────╲

        Layer 1 — CORE TECHNICAL PERFORMANCE   (Base)
        Layer 2 — ROBUSTNESS & OPERATIONAL INTEGRITY
        Layer 3 — RESPONSIBLE AI PRINCIPLES    (Apex)
```

Each layer contains criteria across three solution dimensions — **Model**, **Data**, and **Workflow** — ensuring coverage of the full solution stack, not just the model in isolation.

### Why this shape?

The base is the widest because technical performance criteria are the most numerous and the most granular — they form the measurement foundation for everything above. The apex is the narrowest because responsible AI criteria operate at a higher level of abstraction and depend on the lower layers being assessed first. The middle layer bridges them: robustness criteria are more operational than foundational performance, but more concrete than governance.

---

## Layer 1 — Core Technical Performance

> *Does the solution do what it claims to do, with sufficient quality to be worth deploying?*

This is the entry-level diagnostic gate. A solution that does not pass Layer 1 criteria should not progress to Layers 2 or 3 — it requires fundamental rework first.

---

### 1A — Model Performance

These criteria assess whether the model at the core of the solution achieves the task it was designed for, at a quality threshold sufficient for the intended use case.

| Criterion | Description | Applies To | Score (1–5) |
|-----------|-------------|------------|-------------|
| **Task Accuracy** | Does the model achieve the target performance metric for its task type? (Classification: F1/AUC; Generation: BLEU/ROUGE/human eval; Regression: RMSE/MAE; Retrieval: MRR/NDCG) | All | |
| **Calibration** | Does the model's expressed confidence match its actual accuracy? A model that is 80% confident should be right ~80% of the time. Poorly calibrated models create false certainty in downstream decisions. | All | |
| **Baseline Comparison** | Does the model meaningfully outperform the pre-AI baseline (human process, rule-based system, or naive model)? Is the performance delta large enough to justify the deployment cost? | All | |
| **Task Scope Adherence** | Does the model stay within its intended task scope, or does it hallucinate, confabulate, or produce outputs outside its operational domain? | LLM / Generative | |
| **Tool Use Accuracy** | Does the agent call the correct tools, with correct parameters, in the correct sequence? Are tool outputs correctly interpreted? | Agentic | |

**Layer 1A Threshold:** Average score ≥ 3.0. Any individual criterion scoring 1 is a blocker.

---

### 1B — Data Quality

These criteria assess the quality, provenance, and fitness-for-purpose of the data used to train, fine-tune, retrieve from, or evaluate the solution.

| Criterion | Description | Applies To | Score (1–5) |
|-----------|-------------|------------|-------------|
| **Completeness** | Is the dataset sufficiently complete for the intended task? Are missing values, gaps, or sparse coverage likely to degrade model performance in production? | All | |
| **Accuracy & Consistency** | Is the ground truth or label quality sufficient? Are labels consistent across annotators, time periods, and data sources? | Supervised / RAG | |
| **Provenance & Lineage** | Can the source of every training, fine-tuning, or retrieval dataset be traced? Are data licensing, consent, and usage rights documented? | All | |
| **Distribution Alignment** | Does the training/fine-tuning data distribution match the expected production distribution? Are there known distribution gaps (geography, language, time period, user type)? | All | |
| **Retrieval Corpus Quality** | Is the knowledge base accurate, current, deduplicated, and appropriately scoped for the retrieval task? | RAG / Agentic | |

**Layer 1B Threshold:** Average score ≥ 3.0. Provenance scoring 1 is a blocker (compliance risk).

---

### 1C — Solution Workflow Performance

These criteria assess the end-to-end solution — the full pipeline from input to output — rather than the model in isolation.

| Criterion | Description | Applies To | Score (1–5) |
|-----------|-------------|------------|-------------|
| **Latency** | Does end-to-end response time meet the requirements of the use case? (Real-time interaction: <2s; Batch processing: throughput-based; Agentic multi-step: acceptable step latency) | All | |
| **Output Consistency** | Given the same or similar inputs, does the solution produce outputs of consistent quality and format? Is stochasticity controlled appropriately for the use case? | All | |
| **Integration Reliability** | Do all upstream inputs (data feeds, APIs, user inputs) and downstream outputs (actions, stored results, UI) function correctly under normal operating conditions? | All | |
| **Step Completion Rate** | For multi-step workflows or agents: what proportion of task invocations reach a valid completed state without getting stuck, looping, or producing null outputs? | Agentic | |
| **Context Management** | For long-context or multi-turn systems: is relevant context correctly maintained, retrieved, and prioritized across the full interaction? Is context window overflow handled gracefully? | LLM / Agentic | |

**Layer 1C Threshold:** Average score ≥ 3.0. Latency or integration scoring 1 is a blocker.

---

## Layer 2 — Robustness & Operational Integrity

> *Does the solution keep working — reliably, safely, and consistently — under real-world conditions?*

Layer 2 assesses what happens beyond the ideal case. Production AI systems face distribution shift, unexpected inputs, edge cases, and operational stress. These criteria determine whether the solution is production-grade or merely demo-grade.

---

### 2A — Stability Under Real-World Conditions

| Criterion | Description | Applies To | Score (1–5) |
|-----------|-------------|------------|-------------|
| **Data Drift Sensitivity** | Has the solution been tested for performance degradation under input data distribution shifts? Is there a monitoring mechanism to detect drift in production? | All | |
| **Concept Drift Sensitivity** | Has the solution been tested for performance degradation when the underlying concept or task evolves over time (e.g., language patterns change, business rules evolve)? | All | |
| **Adversarial Robustness** | Has the solution been tested against adversarial inputs? For LLMs: prompt injection, jailbreak attempts, instruction override. For classical ML: adversarial feature perturbation. | All | |
| **Edge Case Coverage** | Has a systematic edge case analysis been conducted? Are known failure modes documented? Is the system's behavior in edge cases safe (graceful failure vs. silent error)? | All | |

---

### 2B — Failure Behavior & Recovery

| Criterion | Description | Applies To | Score (1–5) |
|-----------|-------------|------------|-------------|
| **Graceful Degradation** | When the model or pipeline encounters inputs it cannot handle well, does it fail gracefully (e.g., low-confidence flag, fallback to human, error message) rather than silently or catastrophically? | All | |
| **Error Detection & Handling** | Are system errors — API failures, timeout events, malformed inputs, out-of-scope queries — detected and handled with appropriate recovery logic? | All | |
| **Fallback Mechanism** | Is there a defined fallback path when the AI system fails or produces low-confidence outputs? Does this fallback route to a human, a simpler rule, or a safe default? | All | |
| **Action Reversibility** | For systems that take real-world actions (send emails, modify records, execute transactions): are actions reversible or staged for human review before irreversible execution? | Agentic | |
| **Loop & Termination Safety** | Does the agent have a hard limit on the number of steps, tool calls, or time before it terminates? Is infinite looping or runaway execution prevented? | Agentic | |

---

### 2C — Monitoring & Observability

| Criterion | Description | Applies To | Score (1–5) |
|-----------|-------------|------------|-------------|
| **Performance Monitoring** | Are production performance metrics (accuracy, latency, error rate) actively monitored in real time or near-real time? | All | |
| **Data Quality Monitoring** | Are upstream data feeds monitored for quality degradation, missing values, or schema changes that could affect model performance? | All | |
| **Output Logging** | Are model inputs and outputs logged at a sufficient level of detail to enable post-hoc investigation of errors, bias incidents, and unexpected behavior? | All | |
| **Alert & Incident Response** | Are automated alerts configured for threshold breaches? Is there a documented incident response playbook for AI system failures? | All | |

**Layer 2 Threshold:** Average score ≥ 2.5 across 2A–2C. Action Reversibility scoring 1 for agentic systems is a blocker.

---

## Layer 3 — Responsible AI Principles

> *Does the solution operate within the ethical, legal, and accountability standards required for responsible deployment?*

Layer 3 is the apex — the narrowest layer with the highest strategic consequence. These criteria assess the solution against Responsible AI principles from both a **development** perspective (how it was built) and a **usage** perspective (how it operates in context). They draw on ISO/IEC 42001, the EU AI Act risk framework, NIST AI RMF, and BCG's AI ethics practice.

---

### 3A — Fairness & Bias (Development Principles)

| Criterion | Description | Applies To | Score (1–5) |
|-----------|-------------|------------|-------------|
| **Protected Attribute Bias** | Has the model been tested for differential performance across protected demographic attributes (gender, age, ethnicity, disability, geography)? Are disparate impact levels documented and within acceptable thresholds? | All | |
| **Training Data Bias** | Has the training data been audited for known historical biases, representation imbalances, or proxy variables that may introduce unfair outcomes? | All | |
| **Output Fairness** | Do the model's outputs — decisions, recommendations, generated content — treat comparable cases comparably? Are there documented cases of systematically unfair output patterns? | All | |

---

### 3B — Privacy & Security (Development Principles)

| Criterion | Description | Applies To | Score (1–5) |
|-----------|-------------|------------|-------------|
| **PII Output Leakage** | Does the model expose or reproduce PII in its outputs — including memorized training data, retrieved documents, or generated content that reconstructs personal information? This is a technical flaw in the model or pipeline, not a compliance assessment. | All | |
| **Training Data Contamination** | Has the training or fine-tuning dataset been screened for harmful, toxic, or inappropriate content that degrades model safety or quality? (Copyright and licensing compliance is assessed in the Regulatory layer.) | All | |
| **Model Extraction & Inversion Risk** | Has the system been assessed for vulnerability to model extraction attacks (stealing the model via querying) or model inversion attacks (inferring training data from outputs)? | All | |
| **Prompt / Input Injection** | Has the system been tested for prompt injection vulnerabilities — where malicious inputs in user content or retrieved data can override system instructions or exfiltrate information? | LLM / Agentic | |

---

### 3C — Explainability & Traceability (Technical Capability)

| Criterion | Description | Applies To | Score (1–5) |
|-----------|-------------|------------|-------------|
| **Output Explainability** | Does the system have a technical mechanism to produce explanations of its outputs — e.g., feature attribution, attention weights, chain-of-thought, or retrieval source citation? This assesses the presence of the explainability capability, not whether it is required. | All | |
| **Uncertainty Quantification** | Does the system have a technical mechanism to measure and surface its own confidence or uncertainty — e.g., probability scores, abstention thresholds, ensemble variance? Does it avoid presenting all outputs with uniform apparent certainty? | All | |
| **Reasoning Traceability** | For agentic systems: are the individual reasoning steps, tool calls, inputs, and outputs logged in sufficient technical detail to reconstruct the decision path after the fact? This assesses logging capability, not governance of that log. | Agentic | |

**Layer 3 Threshold:** Average score ≥ 3.0 across 3A–3C. Any criterion scoring 1 in a solution classified as high-risk under the EU AI Act is a hard blocker.

> **Note on scope:** Human oversight design, override capability, clear accountability, and auditability requirements are not assessed here. These belong to the **Societal Risk** layer (People & Culture, Workflow Disruption) and **Regulatory Risk** layer (Algorithmic Governance, Non-compliance) of the Impact Assessment respectively. This framework assesses whether the *technical capability* for explainability and traceability exists — not whether governance structures mandate or use it.

---

## Scoring Summary

### Per-Layer Score Table

| Layer | Sub-Domains | Total Criteria | Max Score | Pass Threshold |
|-------|-------------|----------------|-----------|----------------|
| Layer 1: Core Technical Performance | 1A Model / 1B Data / 1C Workflow | 15 | 75 | Avg ≥ 3.0; no individual blocker |
| Layer 2: Robustness & Operational Integrity | 2A Stability / 2B Failure / 2C Monitoring | 13 | 65 | Avg ≥ 2.5; no agentic blocker |
| Layer 3: Technical Responsible AI | 3A Fairness / 3B Privacy & Security / 3C Explainability & Traceability | 10 | 50 | Avg ≥ 3.0; no high-risk blocker |
| **Total** | | **38** | **190** | |

*Criteria removed to maintain MECE boundaries with Societal and Regulatory risk layers: System Transparency (→ Societal), Human-in-the-Loop Design (→ Societal), Override Capability (→ Societal), Clear Accountability (→ Regulatory), Auditability (→ Regulatory), PII compliance framing (→ Regulatory), Training data copyright/licensing (→ Regulatory).*

### Overall Technical Health Score

The Overall Technical Health Score is the weighted average across all three layers:

| Layer | Weight | Rationale |
|-------|--------|-----------|
| Layer 1 | 40% | Foundational — no score above is meaningful if this fails |
| Layer 2 | 35% | Operational gate — production readiness depends on robustness |
| Layer 3 | 25% | Strategic — high consequence but depends on layers 1–2 |

| Score Band | Rating | Interpretation |
|------------|--------|----------------|
| 85–100 | **Strong** | Solution meets or exceeds technical quality standards across all layers |
| 70–84 | **Adequate** | Solution is deployable with specific monitored remediation items |
| 50–69 | **Conditional** | Material gaps in one or more layers; phased deployment or redesign required |
| Below 50 | **Not Ready** | Significant remediation needed before any production deployment |

---

## Agentic System Addendum

Agentic AI systems — those that autonomously plan, use tools, and take real-world actions across multi-step workflows — require additional attention on six criteria flagged throughout the framework. These criteria collectively address the unique risk profile of autonomous action:

| Criterion | Layer | Risk if Score = 1 |
|-----------|-------|-------------------|
| Tool Use Accuracy | 1A | Incorrect actions taken in the world |
| Step Completion Rate | 1C | Workflows that never complete or silently stall |
| Action Reversibility | 2B | Irreversible real-world harm with no recovery path |
| Loop & Termination Safety | 2B | Runaway execution, cost overruns, system abuse |
| Prompt / Input Injection | 3B | Malicious content hijacks the agent's behavior |
| Reasoning Traceability | 3C | No audit trail for autonomous decisions |

Any agentic system with two or more of these criteria scoring 1 should be classified as **Not Production Ready** regardless of overall score.

---

## Connection to Atlas Frameworks

| Framework | Role | How Technical Evaluation Connects |
|-----------|------|----------------------------------|
| **Atlas Compass** | Use case investment decision | Compass Dimension 1 (Feasibility & Performance) uses Layer 1 criteria as its technical sub-assessment. A Compass score on Feasibility below 3 should trigger a full Technical Evaluation. |
| **Atlas Polaris** | Organizational readiness | Polaris Dimension 3.3 (Lifecycle Management / MLOps) maps directly to Layer 2C (Monitoring & Observability). Polaris Dimension 3.1 (Ethical & Risk Framework) maps to Layer 3 overall. |
| **Impact Assessment** | Risk profiling | The Technical Evaluation Framework produces the evidence base for the Impact Assessment's Technical Risk profile — specifically Bias/Drift/Contamination (Layer 3A–3B), System Failure (Layer 2B), and Traceability/Transparency (Layer 3C). |
| **Atlas Catalog** | Execution services | Layer scores below threshold map to Catalog service tracks: Layer 1 gaps → GenAI Workflow Design; Layer 2 gaps → MLOps & Data Advisory; Layer 3 gaps → AI Governance & Responsible AI programs. |

---

## What Needs to Improve — Open Questions for Next Draft

1. **Criterion count:** 38 criteria is still substantial for a half-day diagnostic. Consider which Layer 1 criteria can be scored via automated tooling (accuracy metrics, latency benchmarks) rather than consultant judgment, reducing the live assessment burden.

2. **Scoring method:** Layer 1 criteria are quantitative — accuracy, latency, calibration have objective thresholds. Layers 2–3 are qualitative. The framework should formalize a hybrid approach: objective evidence for Layer 1, structured assessor rubrics for Layers 2–3.

3. **Threshold calibration:** Pass thresholds need to be use-case-sensitive. A high-risk medical AI warrants Avg ≥ 4.0 on Layer 3; an internal document summarization tool may be fine at 2.5. A risk-tier modifier table should be added in the next draft.

4. **Agentic module:** Agentic-specific criteria now appear in Layers 1, 2, and 3. Consider whether these are better consolidated into a self-contained agentic addendum scored separately, rather than flagged inline.

5. **Layer 2C / Polaris overlap:** Monitoring & Observability assesses whether monitoring is *implemented* at the solution level. Polaris assesses whether the *organizational capability* for monitoring exists. These are distinct but should be explicitly linked — a Polaris Score ≥ 3 on Lifecycle Management should be a prerequisite for Layer 2C assessment rather than a parallel check.

6. **MECE completeness check:** Now that the Technical layer is bounded, the Societal and Regulatory layers need their own equivalent frameworks to ensure the full Impact Assessment is collectively exhaustive. The criteria removed from Layer 3 (Human oversight, Accountability, Auditability, PII compliance) need explicit homes in those frameworks.

---

*Atlas Insights | www.atlasinsights.ai*
*© Atlas Insights. Confidential and Proprietary. First draft — for internal review.*
*Framework references: ISO/IEC 42001 AI Management Systems; EU AI Act (2024); NIST AI Risk Management Framework (2023); BCG Responsible AI Practice; Google PAIR Exploratory Research.*
