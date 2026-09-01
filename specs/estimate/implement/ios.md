# Dev — Implement — estimate (iOS)

| Field | Value |
|-------|-------|
| feature | `estimate` |
| platform | iOS |
| this role | `dev` · `/agent-dev-ios` · `T-IOS-EST` · qaFixPhase=**implement** |
| status | **done** |
| changeScope | `edit_page` |
| packKind | `sheet` → full screen `#sc-estimate` · `DES-MOB-EST` |
| taskId | `task_8ab3d7ec` |
| priorShip | `task_59d13884` |
| updatedAt | `2026-09-01T08:57:37.000Z` |

## Shipped (giữ)

| Area | Path / note |
|------|-------------|
| Screen | `Presentation/Features/Estimate/` — `EstimateView` · a11y `sc-estimate` · `input-*` · `btn-assign` · `btn-draft` |
| Entry wire | mnt-list hub/card + incident CTA → push `#sc-estimate` |
| API | `ai-vision/estimates/*` · `POST maintenance/work-orders` · `POST …/assign` · WorkType=`repair` |

## QA-fix implement (`task_8ab3d7ec`)

| # | Result |
|---|--------|
| §2 tags / entry | **PASS** · no iOS code change (tags + nav verified present) |
| §3 native login | **N/A** · root-cause = Android Maestro yaml (GAP-QA-E2E-AND-01) |
| §1 yaml | Data-only · Android `qa/e2e/android.yaml` |
| e2e | **skipped** (queued `/agent-qa-mobile`) |

## VERIFY GATE

| Gate | Result |
|------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild -scheme LinmRmms` dest **iPhone 17 Pro** | **PASS** |
| Step 4b / BFF EstimateController | **N/A** · Signed catch-all |
| e2e / start:std / mfeStdUrl | **skipped** · **cấm** |
| ERP.* | **none** |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
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
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.29.1 schemaVersion=2 workflowVersion=2026.08.29.1 versionGate=rechecked qaFixPhase=implement taskId=task_8ab3d7ec -->
