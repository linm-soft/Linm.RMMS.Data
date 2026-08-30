# Dev — Implement — estimate (Android)

| Field | Value |
|-------|-------|
| feature | `estimate` |
| platform | Android |
| this role | `dev` · `/agent-dev-android` · `T-AND-EST` |
| status | **done** |
| changeScope | `edit_page` |
| packKind | `sheet` → full screen `#sc-estimate` · `DES-MOB-EST` |
| taskId | `task_59d13884` |
| updatedAt | `2026-08-29T04:55:00.000Z` |

## Shipped

| Area | Path / note |
|------|-------------|
| Screen | `presentation/feature/estimate/` — `EstimateScreen` · `EstimateViewModel` · `EstimateUiState` · testTag `sc-estimate` |
| Entry wire | `MntListViewModel` Hub/Estimate → navigate · `WorkStack` NavHost · Home/Incident stacks `estimate/{incidentId}` (**GAP-MOB-EST-NAV-01**) |
| Repo | **NEW** `EstimateRepository` (+ Impl/DTO) · expand Maintenance create · Incident assign · `ApiService` PUT/POST |
| DI | Hilt `@Binds` EstimateRepository · use cases inject |
| Copy | VN parity `estimate.*` (`GAP-MOB-ALIGN-01`) · back icon-only |
| Kit | TopBar / ListRow / TextField / Primary / Secondary / Toast hub |
| WorkType | `repair` · Status `new` · SLA 24h · DueAt UTC |

## VERIFY GATE

| Gate | Result |
|------|--------|
| `./gradlew :app:assembleDebug` | **PASS** |
| BFF `dotnet build` | **PASS** (reuse · no BFF code change) |
| Step 4b | **N/A** · T-BE n/a Signed |
| e2e / start:std | **skipped** (role Dev · queued QA) |
| ERP.* | **none** |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-08-29T04:55:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:estimate-mobile-control-hint-20260829 |
| taskId | `task_59d13884` |

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.29.1 schemaVersion=2 workflowVersion=2026.08.29.1 versionGate=rechecked -->
