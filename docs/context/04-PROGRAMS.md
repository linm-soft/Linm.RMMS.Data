# RMMS — Program Registry & Server / AI Notes

> **Assumption:** Field hardware already available. This document is **technical reference** for outsource —
> **not** a commercial service-tier price list.  
> **Backend model:** Modular Monolith — 14 domain modules in one .NET host; split when scaling.  
> **Existing app:** Mobile/Web RMMS already live (user guide docx). Data already exists — prioritize API integrations.  
> **YOLOv8 P2 HW (required + phân tích DMS):** xem **`10-YOLO-SERVER-REQUIREMENTS.md`** (tier L4/prod — A100 bên dưới là ceiling tham khảo).

## 1. Program Groups (domain modules in mono)

### Group 1 — Asset Core (`asset-core`)
```
Mandatory foundation. Modules: 1. Asset Management, 2. GIS & Digital Twin

Server Requirements (minimum):
├── 2× Compute Node (16-core Xeon, 128 GB RAM) — .NET services + GeoServer
├── 1× PostgreSQL/PostGIS Primary (32-core, 256 GB RAM, 4× 3.84 TB NVMe RAID 10)
├── 1× PostgreSQL Replica (16-core, 128 GB RAM, 4× 3.84 TB NVMe RAID 10)
├── 1× Object Storage Node (MinIO, 4× 16 TB HDD) — asset photos, 3D tiles
├── 1× Backup Server (8× 20 TB HDD RAID 6)
└── 1× Management Switch + 2× Access Switches
    Estimated: $72,000–$95,000
```

### Group 2 — AI Inspection (`ai-inspection`)
```
Modules: 3. AI Pavement Inspection, 8. AI Predictive Maintenance,
         10. AI Repair Estimation

Server Requirements:
├── 1× GPU Server (NVIDIA A100 80GB × 2, 512 GB RAM)
│   └── YOLOv8 batch inference (post-processed patrol data)
│   └── SAM segmentation fine-tuning
│   └── XGBoost/LightGBM predictive model training
├── 1× GPU Server (optional: A6000 48GB × 4) — concurrent inference capacity
└── Additional storage: 40 TB for raw patrol image archive
    Estimated: $90,000–$130,000 (1 GPU) or $155,000–$195,000 (2 GPU)
```

### Group 3 — Field Operations (`field-ops`)
```
Modules: 4. Patrol Management, 5. Attendance & Positioning,
         6. Incident Management, 7. Maintenance Scheduling

Server Requirements:
├── 2× Compute Node (16-core Xeon, 128 GB RAM) — Inspection, Incident, Maintenance services
├── 1× PostgreSQL + TimescaleDB (16-core, 256 GB RAM) — GPS track hypertables
└── 1× Redis Node (16-core, 128 GB RAM) — real-time patrol position cache, SignalR backplane
    Estimated: $48,000–$65,000
```

### Group 4 — Command Center (`command`)
```
Modules: 9. Command & Control, 17. Executive Dashboard,
         14. Traffic Management Center

Server Requirements:
├── 2× Compute Node (16-core Xeon, 128 GB RAM) — Dashboard aggregation, real-time SignalR hubs
├── 1× Redis Cluster Node — pub/sub for live map + incident board
└── Video processing GPU (optional): 1× A4000 16GB — traffic camera stream analytics
    Estimated: $52,000–$72,000 (without GPU) or $60,000–$82,000 (with GPU)

Note: Command Center video wall, workstations, and UPS excluded — assumed available.
```

### Group 5 — Citizen & Integration (`citizen-hub`)
```
Modules: 15. Citizen Portal, 18. Open API & Integration

Server Requirements:
├── 2× Compute Node (16-core Xeon, 64 GB RAM) — Next.js SSR + BFF Gateway
├── 1× WAF/API Gateway Appliance (or cloud: Cloudflare Pro $240/mo)
└── SMS Gateway (cloud subscription $500/mo)
    Estimated: $36,000–$48,000 (hardware) + $700/mo (services)
```

### Group 6 — Drone & Reality Capture (`drone-capture`)
```
Modules: 13. Drone & Reality Capture

Server Requirements:
├── 1× GPU Server (NVIDIA A6000 48GB × 2, 256 GB RAM)
│   └── Point cloud processing (PDAL/CloudCompare)
│   └── Orthophoto stitching (ODM/WebODM)
│   └── 3D mesh reconstruction (Meshroom)
├── 1× High-capacity Object Storage Node (8× 20 TB HDD) — raw drone data archive
└── 1× Compute Node (32-core, 128 GB RAM) — photogrammetry pipeline orchestration
    Estimated: $75,000–$105,000
```

## 2. AI Models & Runtime Infrastructure

| Model | Purpose | Runtime | Server Requirement | Deployment |
|-------|---------|---------|-------------------|------------|
| YOLOv8 (custom-trained) | Pavement defect detection | ONNX → TensorRT | GPU Server (A100) | Phase 1 |
| SAM (Segment Anything) | Defect area segmentation | ONNX Runtime | GPU Server (A100) | Phase 1 |
| GPT-4o (Azure OpenAI) | AI Copilot — NL query, report gen | Cloud API | N/A (or LLM Server for self-hosted) | Phase 2 |
| Azure AI Search | RAG document retrieval | Cloud service | N/A (or Qdrant self-hosted) | Phase 2 |
| XGBoost / LightGBM | Predictive degradation model | ML.NET on CPU | Compute Node (4 vCPU) | Phase 2 |
| Azure AI Document Intelligence | OCR — sign reading, tech docs | Cloud API | N/A | Phase 2 |
| Open-weight LLM (LLaMA 3 / Qwen 2.5) | Self-hosted Copilot alternative | vLLM / TGI | LLM Server (4× A100, 1 TB RAM) | Phase 3 (optional) |
| Qdrant Vector DB | Embedding storage for Copilot RAG | Self-hosted Docker | Compute Node (2 vCPU, 8 GB) or GPU Server | Phase 2 |

### AI Model Serving Architecture

```
┌───────────────────────────────────────────────────────────────┐
│                    GPU SERVER (A100 × 2+)                      │
│                                                                │
│  ┌─────────────────┐  ┌─────────────────┐  ┌───────────────┐ │
│  │ Triton Inference │  │ SAM Service      │  │ ML.NET Host   │ │
│  │ Server           │  │ (ONNX Runtime)   │  │ (XGBoost)     │ │
│  │ YOLOv8 models    │  │ Defect segment.  │  │ Degradation   │ │
│  │ Batch: 64 imgs/s │  │ Real-time API    │  │ prediction    │ │
│  └─────────────────┘  └─────────────────┘  └───────────────┘ │
│                                                                │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │                LLM SERVER (4× A100 — Phase 3)             │  │
│  │                                                           │  │
│  │  ┌─────────────────┐  ┌─────────────────┐               │  │
│  │  │ vLLM / TGI       │  │ Qdrant Vector   │               │  │
│  │  │ LLaMA 3 70B /    │  │ Search           │               │  │
│  │  │ Qwen 2.5 72B      │  │ (RAG retrieval)  │               │  │
│  │  │ Tensor Parallel   │  │                  │               │  │
│  │  └─────────────────┘  └─────────────────┘               │  │
│  └─────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────┘
```

## 3. Environment Server Sizing

| Environment | GPU Servers | Compute Nodes | Storage Raw | Monthly Cloud (or on-prem amortized) |
|-------------|------------|---------------|-------------|--------------------------------------|
| **Dev** | 1× A6000 48GB | 3 nodes B4ms (cloud VM) | 20 TB | $1,200 (cloud) |
| **Staging** | 1× A100 80GB | 5 nodes D8s v5 | 60 TB | $5,500 (cloud) |
| **Production (Minimal)** | 1× A100 (2 GPU) | 6 nodes | 100 TB | $12,000 (on-prem amortized) |
| **Production (Standard)** | 2× A100 + 1× LLM | 10 nodes | 250 TB | $22,000 (on-prem amortized) |
| **Production (Full)** | 4× A100 + 2× LLM | 14 nodes | 600 TB | $38,000 (on-prem amortized) |

## 4. Total Server Infrastructure Investment (New Purchase)

### Phase 1 (Months 0–6) — Asset Core + Basic AI

| Category | Spec | Qty | Unit Cost | Subtotal |
|----------|------|-----|-----------|----------|
| GPU Server (A100 × 2) | 512 GB RAM, 2× 3.84 TB NVMe | 2 | $55,000 | $110,000 |
| Compute Nodes (Gen) | 32-core, 256 GB RAM, 2× 3.84 TB NVMe | 6 | $15,000 | $90,000 |
| Database Servers | 32-core, 512 GB RAM, 4× 7.68 TB NVMe | 2 | $28,000 | $56,000 |
| Storage Nodes (MinIO) | 16-core, 128 GB, 4× 16 TB HDD | 3 | $9,000 | $27,000 |
| Backup Server | 8× 20 TB HDD RAID 6 | 1 | $8,000 | $8,000 |
| Networking (Switch, Firewall) | 25 GbE spine/leaf | 1 set | $35,000 | $35,000 |
| Rack + Power + Cooling | 42U, UPS, in-row cooling | 1 set | $30,000 | $30,000 |
| **Phase 1 TOTAL** | | | | **$356,000** |

### Phase 2 (Months 6–12) — AI Expansion + Command

| Category | Spec | Qty | Unit Cost | Subtotal |
|----------|------|-----|-----------|----------|
| Additional GPU Server (A100 × 2) | +1 for concurrent inference | 1 | $55,000 | $55,000 |
| Additional Compute Nodes | +6 nodes for new services | 6 | $15,000 | $90,000 |
| Additional Database (TimescaleDB) | GPS track hypertables | 2 | $22,000 | $44,000 |
| Redis Cluster Nodes | Session cache, SignalR backplane | 3 | $12,000 | $36,000 |
| Additional Storage | +80 TB for drone data | 2 nodes | $11,000 | $22,000 |
| Additional Rack + Cooling | | 1 | $20,000 | $20,000 |
| **Phase 2 TOTAL** | | | | **$267,000** |

### Phase 3 (Months 12–18) — Self-Hosted LLM + Scale

| Category | Spec | Qty | Unit Cost | Subtotal |
|----------|------|-----|-----------|----------|
| LLM Server (4× A100 80GB, NVLink) | 1 TB RAM, 4× 7.68 TB NVMe | 1 | $210,000 | $210,000 |
| Additional GPU Server | For increased inference load | 2 | $55,000 | $110,000 |
| Additional Compute Nodes | Scale-out for 10,000 km road network | 4 | $15,000 | $60,000 |
| Additional Storage Nodes | Archive growth | 3 | $12,000 | $36,000 |
| InfiniBand Fabric | 100 GbE for multi-GPU | 1 set | $25,000 | $25,000 |
| Additional Rack + Cooling | | 1 | $25,000 | $25,000 |
| **Phase 3 TOTAL** | | | | **$466,000** |

### Grand Total (All Phases, New Purchase)

```
Phase 1 ........................................ $356,000
Phase 2 ........................................ $267,000
Phase 3 ........................................ $466,000
────────────────────────────────────────────────────────
TOTAL SERVER INFRASTRUCTURE .................... $1,089,000

+ Cloud AI Services (Azure OpenAI, annual)
  Phase 1 ......................................  $18,000
  Phase 2 ......................................  $54,000
  Phase 3 (optional if self-hosted LLM) .......       $0
────────────────────────────────────────────────────────
GRAND TOTAL (Year 1.5) ........................ $1,161,000
```

> **Excluded from above:** All field hardware — patrol vehicle kits, cameras, drones, tablets,
> handheld GPS, action cameras, NFC scanners, command center video walls, and workstations.
> These are assumed already available from existing operations.

## 5. Development Cost Estimate (Dev Team Only)

> **Scope:** Software development only. Excludes hardware procurement, field devices
> (already available), cloud subscription, and third-party AI API consumption costs.
> Assumes Vietnam-based development team, Q3 2026 market rates.

### 5.1 Team Composition & Monthly Rates

| Role | Skills Required | Rate (USD/mo) |
|------|----------------|---------------|
| Senior Backend (.NET) | C# .NET 8, ASP.NET Core, EF Core, PostgreSQL, SignalR, RabbitMQ | $2,500–$3,000 |
| Senior Frontend (React) | React 18, TypeScript, single-spa MFE, CesiumJS, MapLibre | $2,500–$3,000 |
| AI/ML Engineer | YOLOv8, SAM, ONNX Runtime, Triton Inference Server, XGBoost, GPT-4o API | $3,500–$4,500 |
| DevOps | Kubernetes, Docker, GitHub Actions CI/CD, Prometheus/Grafana, YARP | $2,200–$2,800 |
| QA Automation | Playwright/Cypress, xUnit, API testing, load testing (k6) | $1,800–$2,200 |
| PM/BA | Agile/Scrum, Jira, requirement analysis, stakeholder communication | $2,200–$2,800 |
| UI/UX Designer | Figma, design system, GIS/map UX, mobile PWA | $1,800–$2,500 |

### 5.2 Phase 1 — Core Foundation (Months 1–6)

**Scope:** Asset Management, GIS 2D, Basic AI Inspection, Patrol Management, Incident Management,
BFF Gateway, Auth/RBAC, Mobile PWA, Notification Service, Workflow Engine

| Role | Headcount | Months | Rate | Subtotal |
|------|-----------|--------|------|----------|
| Senior Backend (.NET) | 4 | 6 | $2,800 | $67,200 |
| Senior Frontend (React) | 3 | 6 | $2,800 | $50,400 |
| AI/ML Engineer | 2 | 6 | $4,000 | $48,000 |
| DevOps | 1 | 6 | $2,500 | $15,000 |
| QA Automation | 2 | 6 | $2,000 | $24,000 |
| PM/BA | 1 | 6 | $2,500 | $15,000 |
| UI/UX Designer | 1 | 4 | $2,200 | $8,800 |
| **Phase 1 Subtotal** | **14** | | | **$228,400** |

**Deliverables Phase 1:**
- 8 backend microservices (Asset, GIS, AI-Vision, Inspection, Incident, BFF Gateway, Notification, Workflow)
- 5 MFEs (Asset Management, GIS Map, AI Inspection Results, Patrol, Dashboard Overview)
- Mobile PWA (offline-first patrol app)
- CI/CD pipelines + Docker Compose dev env
- API documentation (Swagger/OpenAPI)
- Admin user management + RBAC

### 5.3 Phase 2 — AI Expansion (Months 7–12)

**Scope:** AI Predictive Maintenance, AI Repair Estimation, Maintenance Scheduling,
Contract & Budget, Drone & Reality Capture, Report Service, Command Dashboard, AI Copilot (GPT-4o + RAG)

| Role | Headcount | Months | Rate | Subtotal |
|------|-----------|--------|------|----------|
| Senior Backend (.NET) | 3 | 6 | $2,800 | $50,400 |
| Senior Frontend (React) | 3 | 6 | $2,800 | $50,400 |
| AI/ML Engineer | 2 | 6 | $4,000 | $48,000 |
| DevOps | 1 | 6 | $2,500 | $15,000 |
| QA Automation | 2 | 6 | $2,000 | $24,000 |
| PM/BA | 1 | 6 | $2,500 | $15,000 |
| UI/UX Designer | 1 | 3 | $2,200 | $6,600 |
| **Phase 2 Subtotal** | **13** | | | **$209,400** |

**Deliverables Phase 2:**
- 5 new backend services (AI-Predict, AI-Estimate, Maintenance, Contract, Drone, Report)
- 6 new/updated MFEs (Predictive Dashboard, Repair Estimation, Contract Management, Drone Portal, Report Center, AI Copilot Chat)
- RAG pipeline (Azure AI Search or Qdrant + GPT-4o)
- 3D Digital Twin (CesiumJS integration)
- Executive KPI scorecard
- SignalR real-time dashboard (command center)

### 5.4 Phase 3 — Full Scale (Months 13–18)

**Scope:** LLM Server (self-hosted), Citizen Portal, Traffic Management Center,
Open API & Integration Hub, Materials/Inventory, Attendance & Positioning, Scale-out hardening

| Role | Headcount | Months | Rate | Subtotal |
|------|-----------|--------|------|----------|
| Senior Backend (.NET) | 3 | 6 | $2,800 | $50,400 |
| Senior Frontend (React) | 2 | 6 | $2,800 | $33,600 |
| AI/ML Engineer | 2 | 6 | $4,000 | $48,000 |
| DevOps | 1 | 6 | $2,500 | $15,000 |
| QA Automation | 1 | 6 | $2,000 | $12,000 |
| PM/BA | 1 | 6 | $2,500 | $15,000 |
| UI/UX Designer | 1 | 2 | $2,200 | $4,400 |
| **Phase 3 Subtotal** | **11** | | | **$178,400** |

**Deliverables Phase 3:**
- Self-hosted LLM service (vLLM/TGI + LLaMA 3 / Qwen 2.5)
- Citizen Portal (Next.js SSG + incident reporting)
- Traffic Management Center (VMS control, congestion detection)
- Open API Gateway + Partner SDK
- ERP/CMMS/ITS/ETC connectors
- Performance optimization (load testing, scale-out to 10,000 km)
- Training + handover documentation

### 5.5 Grand Total — Development Only

```
Phase 1 (Months 1–6)  ............................ $228,400
Phase 2 (Months 7–12)  ............................ $209,400
Phase 3 (Months 13–18)  ............................ $178,400
─────────────────────────────────────────────────────────
TOTAL DEVELOPMENT COST  ............................ $616,200
```

### 5.6 Optional Add-ons

| Item | Scope | Est. Cost |
|------|-------|-----------|
| Training & Handover | 2-week on-site training for 20 users + admin manual | $12,000–$18,000 |
| 12-month Warranty Support | Bug fixes, critical patches, minor enhancements (≤2 days/change) | $3,500/mo × 12 = $42,000 |
| Custom Report Templates | 5 complex reports (PDF/Excel, scheduled delivery) | $15,000–$25,000 |
| Custom ERP Integration | SAP/Oracle connector (bidirectional sync) | $30,000–$60,000 |
| On-site Deployment Support | 2 engineers × 2 weeks at customer data center | $8,000–$12,000 |

### 5.7 Team Ramp-up & Ramp-down

```
Month:  1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18
BE:     ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ ███ ███ ███ ███ ███
FE:     ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ ███ ███ ███ ███ ███ ███
AI:     ███  ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ █
DevOps: ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ ███ ███  █   █
QA:     ███  ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ ██  ███ ███ ███ █   █   █   █
PM:     ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ ██  ██  █
Design: ████ ████ ████                                        ████ ███
────────────────────────────────────────────────────────────────────────────────
Peak Headcount: 14  (Month 4–6)
Avg Headcount:   12
Total Man-Months: ~195 MM
Blended Rate:     ~$3,160/month
```

### 5.8 Quick Comparison — Dev vs Infrastructure vs Total

| Cost Category | Amount | % of Total |
|---------------|--------|------------|
| **Development (all 3 phases)** | **$616,200** | **34%** |
| Server Hardware (all 3 phases) | $1,089,000 | 60% |
| Cloud AI Services (GPT-4o, etc.) | $72,000 | 4% |
| Training + Warranty (optional) | $54,000 | 3% |
| **Grand Total** | **~$1,831,200** | 100% |

> **Key insight:** The development cost ($616K) is approximately **one-third** of the total
> project investment. The majority of cost is in **server hardware for AI/LLM compute**
> ($1.09M). Field hardware (cameras, drones, vehicles, tablets) is excluded entirely
> as it is already available.

---

## 6. AI-Assisted Development — Token Cost Estimate

> **Scenario:** Using AI coding agents (Claude, GPT-4o, Cursor) as the primary development
> workforce, guided by a minimal human team (1–2 senior devs for architecture review,
> integration testing, and final QA sign-off).

### 6.1 Project Code Volume Baseline

| Layer | Services / Modules | Avg Files per Unit | Total Files |
|-------|-------------------|-------------------|-------------|
| Backend (.NET 8 Web API) | 14 services | 50 (controllers, services, DTOs, repos, entities, validators, migrations, configs) | **700** |
| Frontend (React MFE) | 18 modules | 35 (pages, components, hooks, services, styles) | **630** |
| Infrastructure | Docker, K8s, CI/CD, Terraform | — | **80** |
| Tests (unit + integration + E2E) | All layers | — | **400** |
| Documentation | Context docs, API docs, READMEs | — | **50** |
| **Total Files** | | | **~1,860** |

### 6.2 Token Consumption per File

| Activity | Files | Avg Iterations | Input Tokens/Iter | Output Tokens/Iter | Tokens per File |
|----------|-------|---------------|-------------------|--------------------|-----------------|
| Backend — initial generation | 700 | ×1 | 2,500 | 2,000 | 4,500 |
| Backend — refinement (3 rounds) | 700 | ×3 | 2,000 | 1,500 | 10,500 |
| Frontend — initial generation | 630 | ×1 | 3,000 | 2,500 | 5,500 |
| Frontend — refinement (4 rounds, UI heavy) | 630 | ×4 | 2,500 | 2,000 | 18,000 |
| Infrastructure — generate + refine | 80 | ×3 | 2,000 | 1,500 | 10,500 |
| Tests — generate + refine | 400 | ×2 | 1,500 | 1,200 | 5,400 |
| Documentation — generate + refine | 50 | ×3 | 4,000 | 3,000 | 21,000 |
| Architecture / planning sessions (multi-turn) | ~300 sessions | — | — | — | 30,000/session |
| Debugging / bug-fix sessions | ~200 sessions | — | — | — | 15,000/session |

### 6.3 Total Token Estimate

| Category | Tokens |
|----------|--------|
| Backend code (700 × 15,000) | 10,500,000 |
| Frontend code (630 × 23,500) | 14,805,000 |
| Infrastructure (80 × 10,500) | 840,000 |
| Tests (400 × 5,400) | 2,160,000 |
| Documentation (50 × 21,000) | 1,050,000 |
| Architecture discussions (300 × 30,000) | 9,000,000 |
| Debugging sessions (200 × 15,000) | 3,000,000 |
| **Total Token Consumption** | **~41.4M tokens** |

### 6.4 AI API Cost (Direct Token Pricing, Q3 2026)

| Model | Input $/1M | Output $/1M | Blended Rate\* | 41.4M Tokens Cost |
|-------|-----------|-------------|----------------|-------------------|
| **GPT-4o** (OpenAI) | $2.50 | $10.00 | ~$5.50 | **$228** |
| **Claude 3.5 Sonnet** (Anthropic) | $3.00 | $15.00 | ~$8.00 | **$331** |
| **Claude Opus 4** (Anthropic) | $15.00 | $75.00 | ~$40.00 | **$1,656** |
| **Gemini 2.5 Pro** (Google) | $1.25 | $10.00 | ~$4.50 | **$186** |
| **DeepSeek V3** | $0.27 | $1.10 | ~$0.60 | **$25** |

*\*Blended rate: weighted 55% input / 45% output (typical code-gen ratio). Real mix will vary.*

> **Reality check:** Raw API token cost is **$25–$330** for the entire project. The real cost
> driver is NOT tokens — it's the **human oversight** and **tooling**.

### 6.5 Realistic AI-Assisted Dev Budget

| Cost Component | Monthly | × 18 Months | Total |
|----------------|---------|-------------|-------|
| **Cursor Pro** (or equivalent AI IDE) — 3 seats | $60 | 18 | $1,080 |
| **Claude API** (Sonnet, direct calls for heavy tasks) | — | — | $400 |
| **GitHub Copilot** (or supermaven) — 3 seats | $30 | 18 | $540 |
| **1 Senior Full-Stack Dev** (architect, review, integrate AI output) | $2,800 | 18 | $50,400 |
| **1 Senior QA/DevOps** (test strategy, CI/CD, deployment, sign-off) | $2,500 | 18 | $45,000 |
| **AI tools & subscriptions total** | | | **$2,020** |
| **Human oversight total** | | | **$95,400** |
| **GRAND TOTAL — AI-Assisted** | | | **$97,420** |

### 6.6 Traditional Team vs AI-Assisted Comparison

| | Traditional Team | AI-Assisted (2 humans + AI) | Savings |
|---|---|---|---|
| Team size (peak) | 14 | 2 | −86% |
| Total man-months | 195 | 36 | −82% |
| Human cost | $616,200 | $95,400 | −84% |
| AI/tooling cost | $0 | $2,020 | — |
| **Total Development Cost** | **$616,200** | **$97,420** | **−84% ($518,780)** |
| Timeline | 18 months | 18 months\* | same |
| Risk | Low (full team) | Medium (AI quality variance, integration overhead) | — |

*\*Timeline may extend 2–4 months due to lower parallelization (2 vs 14 people).*

### 6.7 Token Cost Summary — "How much does AI development cost?"

```
Raw AI token cost (GPT-4o level):     ~$230       ← just the API bill
AI tool subscriptions (18 months):    ~$2,020     ← IDE + Copilot
Human oversight (2 senior devs):      ~$95,400    ← the real cost

TOTAL AI-ASSISTED DEVELOPMENT:        ~$97,420
vs
TRADITIONAL FULL TEAM:                ~$616,200

Savings: $518,780 (84% less)
```

> **Bottom line:** The AI tokens themselves cost less than a team dinner (~$230). The actual
> investment is in the 2 senior engineers who architect the system, review every AI-generated
> line, integrate modules, and ensure production quality. AI accelerates coding but doesn't
> replace architectural judgment, security review, or QA rigor.

---

## 7. Cloud-Only Alternative (No Hardware Purchase)

For organizations preferring zero hardware ownership:

| Tier | Azure/Cloud Services | Monthly | Annual |
|------|---------------------|---------|--------|
| Phase 1 | AKS (6× D8s v5), Azure DB for PostgreSQL (GP 8 vCore), Blob Storage 100 TB, Azure OpenAI GPT-4o (120K token/day) | $8,500 | $102,000 |
| Phase 2 | AKS (12× D16s v5), PostgreSQL HA (16 vCore), +Storage, +Azure AI Search, +Document Intelligence | $18,000 | $216,000 |
| Phase 3 | AKS (20× D32s v5), PostgreSQL HA (32 vCore), +GPU VM (NC A100 v4 × 2 for LLM), +Qdrant | $35,000 | $420,000 |

*Cloud pricing is indicative Q3 2026. On-premise amortization assumes 5-year hardware lifecycle.*
