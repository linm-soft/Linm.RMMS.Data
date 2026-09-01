# Dev — Implement — estimate (Android)

| Field | Value |
|-------|-------|
| feature | `estimate` |
| platform | Android |
| this role | `dev` · `/agent-dev-android` · `T-AND-EST` · qaFixPhase=**implement** |
| status | **done** |
| changeScope | `edit_page` |
| packKind | `sheet` → full screen `#sc-estimate` · `DES-MOB-EST` |
| taskId | `task_8ab3d7ec` |
| priorShip | `task_59d13884` |
| updatedAt | `2026-09-01T08:57:37.000Z` |

## Shipped (giữ)

| Area | Path / note |
|------|-------------|
| Screen | `presentation/feature/estimate/` — `EstimateScreen` · testTag `sc-estimate` · `input-*` · `btn-assign` · `btn-draft` · `row-from-incident` |
| Entry wire | `WorkStack` / Home / Incident `estimate/{incidentId}` · mnt-list hub/card |
| API | EstimateRepository · Maintenance create · Incident assign · WorkType=`repair` |

## QA-fix implement (`task_8ab3d7ec`)

| # | Result |
|---|--------|
| §1 Maestro login harden | **DONE** · `specs/estimate/qa/e2e/android.yaml` · CTA trước+sau Enter · `id: sc-home` PRIMARY 45s · `"Trang Chủ"` secondary · scrollUntilVisible `btn-draft` trước P6-CORE-2 · **cấm** hideKeyboard |
| §2 tags / entry | **PASS** · no native change |
| §3 native login/nav | **skipped** · app tags/nav PRESENT · fix = yaml |
| e2e | **skipped** (queued `/agent-qa-mobile` · close GAP-QA-E2E-AND-01 / STORE-03 / P6-DUP) |

## VERIFY GATE

| Gate | Result |
|------|--------|
| `./gradlew :app:assembleDebug` | **PASS** |
| BFF `dotnet build` | **PASS** (no BFF code change) |
| Step 4b | **N/A** · T-BE n/a Signed |
| e2e / start:std / mfeStdUrl | **skipped** · **cấm** |
| ERP.* | **none** |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-09-01T08:57:37.000Z |
| versionGate | rechecked |
| contentHash | sha256:estimate-mobile-control-hint-20260829 |
| taskId | `task_8ab3d7ec` |
| qaFixPhase | implement |

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.29.1 schemaVersion=2 workflowVersion=2026.08.29.1 versionGate=rechecked qaFixPhase=implement taskId=task_8ab3d7ec -->
