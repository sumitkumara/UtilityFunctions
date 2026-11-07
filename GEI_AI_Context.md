# GEI Project — AI Agent Context File

> **Purpose:** This file provides a complete knowledge summary of the GEI insurance-technology delivery project for use by AI agents (Claude, Cursor, Copilot, etc.). Load this as context before asking any questions about this team, its people, its codebase, or its goals.
>
> **Last updated:** November 2026  
> **Owner:** Sumit (Issue-Renew Team)

---

## 1. Organization & Team

### Team Name
Issue-Renew Team (part of a larger insurance-technology organization using Duck Creek)

### Key People
| Name | Role |
|------|------|
| Sumit | Senior/principal-level software engineer — PPAPI optimization, BDD, AI enablement, Cybear/Slack bot |
| Praveen Mullacherry | Software engineer, Issue-Renew team |
| Hiren Bhatt | Manager / tech lead — sets direction, called PPAPI performance "one of our key areas to focus upon" |
| Raj | Collaborator on releases, Cybear channel, branch cuts |
| Samkit Saraf | Junior engineer — regularly requests PR approvals from Sumit; working on BDD and policy-duckcreek-datafix-xml repo |
| Daniel | Junior engineer — mentored on BDD by Sumit |
| Liam Kostan | Reviewer — re-implemented PPAPI fix with extra gating conditions |
| Srinivas | Peer reviewer / PR approver |
| Anna Rall | Senior leadership — wrote that "DC Latency and AHT improvement initiatives have become an urgent ask by SLT" |
| Alexander Saavedra | Gave recognition for AISDLC automation work (Cybear, Slackbot) |
| Amber Combs | Lined up as feedback source for performance review |
| Srikanth | Lined up as feedback source for performance review |
| Ramesh | Asked Sumit to analyze Sentry-vs-GOPA latency differences |
| Anu, Mytri, Kuldeep | Cross-team reviewers Sumit routes review requests to |

---

## 2. Platform & Architecture

### Core Platform
- **Duck Creek** — policy administration platform with extensive customizations
- **PPAPI (Policy and Premium API)** — in-house intermediary API layer connecting Duck Creek to downstream consumers
- Three-layer architecture: front-end channels → PPAPI → Duck Creek Core

### Key Application Areas / Domain Terminology
| Term | Meaning |
|------|---------|
| Issue / Renew | New business issuance and policy renewal workflows |
| Portfolio | Portfolio application — customer-facing policy view |
| COA | Change of Address |
| COS | Change of State |
| Data Fixes (DFs) | Manual data corrections applied to policies |
| BDD | Behavior-Driven Development — test coverage approach used by the team |
| Flutterization | Migration of features to Flutter (mobile framework) |
| IVR | Interactive Voice Response — partner channel |
| EDGE Flutter | Flutter-based Edge channel |
| #help-ppapi | Internal Slack support channel for PPAPI queries |
| team-ppapi-midstream | Slack channel and GitHub repo for team standards |
| AISuggestions | ADO-integrated AI schema for root-cause suggestions on work items |
| Cybear | Slack KB + channel bot for PPAPI (GSP pattern) |
| GSP pattern | Standard pattern for Slack bot / knowledge-base integrations |
| policy-duckcreek-datafix-xml | GitHub repo for data fix XML policies |
| policyReadOnly / retrievePolicy | PPAPI endpoints — key to the latency optimization |
| loadHistoryRq / loadPolicyRq | Duck Creek calls run on a PAS miss |
| PAS | Policy Administration System |

### Key Tools & Infrastructure
- **Azure DevOps (ADO)** — work item tracking, pipeline automation, sprint planning
- **GitHub** — branching, pull requests, commit-hash linking back to ADO
- **Cursor AI** — code understanding and knowledge base; team is actively rolling it out
- **Application Insights, Loki, Titan LOS** — observability stack referenced in AI Enablement proposal
- **Sentry** — error monitoring (analyzed vs. GOPA for latency differences)
- **GOPA** — another monitoring/endpoint system; latency differs from Sentry due to auth differences

---

## 3. Major Accomplishments (2026)

### A. PPAPI Performance Optimization (Highest Impact)
- **Problem:** `policyReadOnly/retrievePolicy` calls on a PAS miss were running `loadHistoryRq` AND `loadPolicyRq`. Roughly half the Duck Creek work per call went to loading an unused image.
- **Fix:** User Story 1347073 — optimized to run only `loadHistoryRq`. Fix is PPAPI-only, covers all Lines of Business (LOBs).
- **Delivery:** Coordinated through the Nov 12 major release + mid-cycle release week of Nov 18 2026.
- **Validation:** Results confirmed "looking promising." Liam Kostan later re-implemented with extra gating conditions ("pretty much the same implementation Sumit had"). Leadership called it a key priority.
- **Gap to fill:** Before/after latency numbers and call volume metrics (not yet captured in writing).

### B. AI Enablement & Knowledge Tooling
- **AI Codebase Knowledge Base proposal** ("Ask the Repo in Slack") — targets 58 solutions, 721 C# projects. Goal: democratize codebase knowledge via Slack.
- **PPAPI AI Enablement proposal (v1.1)** — phased roadmap using Application Insights, Loki, Titan LOS for observability-assisted triage. Success metrics: deflection rate, escalation completeness, support-interrupt reduction, channel adoption.
- **AISuggestions schema (March)** — ADO-integrated AI design storing suggested root causes for open work items.

### C. Cybear / PPAPI Bot (Partner Channel Delivery)
- Onboarded PPAPI to Cybear (KB + Slack channel bot), following GSP pattern.
- Built XML facade between Edge and Duck Creek as part of the integration.
- Stood up curated FAQ bot for PPAPI in #help-ppapi.
- Ran team demo on Oct 9, 2026. Got through onboarding and went through Cyber review path.
- Recognition from Alexander Saavedra for AISDLC automation work.

### D. BDD / Quality & Testing
- Staged the bulk update endpoint story; extended BDD tests to cover bulk update validation.
- Contributed to team-ppapi-midstream-standards repo including report generation.
- Paused feature work when needed to collaborate with Samkit on bug resolution before prod.
- Mentored Samkit and Daniel on BDD testing practices.
- Trusted PR reviewer — Samkit regularly requests approvals on policy-duckcreek-datafix-xml repo.

### E. Troubleshooting & Support
- Analyzed Sentry-vs-GOPA latency differences — traced to different auth (x-token vs. bearer) and different endpoints (policyNonPremium vs. policyReadOnly).
- Handled PPAPI support and triage in #help-ppapi including building error queries.
- Investigated transaction prorating issue (April) with cross-team collaboration.
- Contributed to Oct 30 latency incident root cause analysis.

### F. Collaboration & Trust
- Hiren asked Sumit and Raj to make the team-ppapi-midstream channel public — co-owner of team space.
- Coordinated Nov 12 major release and branch cuts.
- Lined up Amber Combs and Srikanth as feedback sources for performance review.
- Routed review requests correctly across teams (Anu → Mytri and Kuldeep).

---

## 4. 2026 Manager Goals (All 8)

These are the goals set by management. Sumit has contribution evidence for each.

| # | Goal Title | Alignment |
|---|-----------|-----------|
| 1 | Issue-Renew legal and regulatory controls delivered on time | Foundation |
| 2 | Manual fixes cut through automation and measured AI use | Foundation; AI; Retention |
| 3 | Faults visible for hotspot and attrition analysis | Retention; Data |
| 4 | Production incidents and fixes closed within SLAs | Service |
| 5 | IVR, EDGE Flutter and Sales channels receive committed domain outcomes | Tech Transformation; Service |
| 6 (Required) | Team goals, HR compliance and engagement target advanced | Leadership |
| 7 (Required) | Succession quality mindset and outcomes focus strengthened | Leadership |
| 8 | Portfolio application enhancements to support Service, Retention and Compliance | Tech Transformation; Service, Compliance |

---

## 5. Cursor AI / Knowledge Base Setup

- Sumit has prepared a `.cursorrules` file, `.cursorignore` file, and flow documentation template.
- Validation approach: start with one well-understood flow before using it to draft unfamiliar flows.
- Goal: accumulate indexed flow documentation + transcribed training materials to compound team knowledge over time.
- Three-layer architecture (channels → PPAPI → Duck Creek) makes code comprehension difficult without AI assistance.

---

## 6. Audit / Demo Work

- Sumit prepared a live demo for a third-party auditing team.
- Demo covers: data fix PR workflow — work item creation in ADO, GitHub branching, commit-hash linking back to ADO, automated pre-merge checks, peer approval (Srinivas), and deployment.
- Kept high-level per manager instruction. External-audience framing: fluent, natural-sounding, professional.

---

## 7. Writing & Document Preferences

- **Generic over specific** in professional documents — avoid specific regulatory body names, internal tool names, or product names; use broader descriptors (e.g., "compliance efforts" not "NYDFS," "observability tooling" not "Grafana").
- Contributions should be framed in outcome language, not just activity language.
- Situation / Action / Result structure preferred for performance review bullets.
- Gaps to fill (self-identified): Jan–Jul accomplishments, before/after PPAPI latency numbers, call volume for #help-ppapi, Q1–Q3 story point count.

---

## 8. Known Gaps / Items to Add

- [ ] Actual before/after latency improvement % for PPAPI optimization
- [ ] Call volume for #help-ppapi (adoption metric for Cybear/FAQ bot)
- [ ] Jan–Jul 2026 major releases, features, and incidents
- [ ] Q1–Q3 closed user story count (files reportedly include a Q1–Q3 closed user stories sheet)
- [ ] "Great job" / recognition messages from Jan–Jul period

---

## 9. Quick Reference — Repo & Channel Names

| Name | Type | Notes |
|------|------|-------|
| policy-duckcreek-datafix-xml | GitHub repo | Data fix XML policies; Samkit PRs here |
| team-ppapi-midstream-standards | GitHub repo | Team standards; Sumit contributed report generation |
| team-ppapi-midstream | Slack channel | Co-owned by Sumit and Raj; made public per Hiren |
| #help-ppapi | Slack channel | PPAPI support; FAQ bot deployed here |
| Cybear | Slack KB bot | GSP pattern; covers PPAPI; demo Oct 9 |

---

*This file was generated from project memory, conversation history, and screenshot analysis. Update it as new accomplishments are added or gaps are filled.*
