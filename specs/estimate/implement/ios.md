# Dev — Implement — estimate (iOS)

| Field | Value |
|-------|-------|
| feature | `estimate` |
| platform | iOS |
| this role | `dev` · `/agent-dev-ios` · `T-IOS-EST` |
| status | **done** |
| changeScope | `edit_page` |
| packKind | `sheet` → full screen `#sc-estimate` · `DES-MOB-EST` |
| taskId | `task_59d13884` |
| updatedAt | `2026-08-29T04:55:00.000Z` |

## Shipped

| Area | Path / note |
|------|-------------|
| Screen | `Presentation/Features/Estimate/` — `EstimateView` · `EstimateViewModel` · `EstimateUiState` · a11y `sc-estimate` |
| Entry wire | `MntListViewModel` hub/card → push · `AppRouter` incident create/detail CTA → work tab + push (**GAP-MOB-EST-NAV-01**) |
| Repo | **NEW** `EstimateRepository` (+ Impl/DTO) · expand `MaintenanceRepository.createWorkOrder` · expand `IncidentRepository.assign` |
| API | `ApiClient.put` · paths `ai-vision/estimates/*` · `POST maintenance/work-orders` · `POST …/assign` |
| DI | `AppContainer` use cases · `AppRouter` Estimate VM |
| Copy | VN SSOT Design keys `estimate.*` |
| Kit | `LinmTopBar` · `LinmListRow` · `LinmTextField` · Primary/Secondary · Toast via Session |
| WorkType | `repair` · Status `new` · SLA 24h · DueAt UTC wire |

## VERIFY GATE

| Gate | Result |
|------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild … iPhone 17 Pro` | **PASS** |
| Step 4b / BFF EstimateController | **N/A** · live Signed · catch-all |
| e2e / start:std | **skipped** (role Dev · queued QA) |
| ERP.* | **none** |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-08-29T04:55:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:estimate-mobile-control-hint-20260829 |
| taskId | `task_59d13884` |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.29.1 schemaVersion=2 workflowVersion=2026.08.29.1 versionGate=rechecked -->
