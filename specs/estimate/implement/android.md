# Dev — Implement — estimate (Android)

| Field | Value |
|-------|-------|
| feature | `estimate` |
| platform | Android |
| this role | `dev` · `/agent-dev-android` · `T-AND-EST-LABEL` |
| status | **done** |
| changeScope | `edit_page` · **GAP-MOB-EDIT-01** |
| packKind | `sheet` → full screen `#sc-estimate` · `DES-MOB-EST` |
| taskId | `task_2b81d5ff` |
| priorShip | prior implement **giữ** |
| updatedAt | `2026-09-01T14:51:45.000Z` |

## Delta this edit (GAP-MOB-EDIT-01)

| Area | Change |
|------|--------|
| UI | `presentation/feature/estimate/EstimateScreen.kt` — `FieldLabel` 13sp + `LabeledField` ×6 |
| Fields | assignee · qty · unitPrice · total · sla · due — labelHeader visible · `LinmTextField(title="")` **cấm** placeholder-only |
| API/BFF | **unchanged** · Step 4b **N/A** |
| Tags | `sc-estimate` · `input-*` · `btn-assign` · `btn-draft` **giữ** |

## Shipped (giữ)

| Area | Path / note |
|------|-------------|
| Screen | `presentation/feature/estimate/` — full screen · route_a |
| Entry | mnt-list hub/card + incident CTA → `#sc-estimate` |
| API | same as iOS · WorkType=`repair` |

## VERIFY GATE

| Gate | Result |
|------|--------|
| `./gradlew assembleDebug` | **PASS** |
| BFF `dotnet build` | **PASS** (shared) |
| Step 4b | **N/A** · UX-only |
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
| generatedAt | 2026-09-01T14:51:45.000Z |
| versionGate | rechecked |
| contentHash | sha256:estimate-mobile-control-hint-20260901-edit01 |
| taskId | `task_2b81d5ff` |

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.29.1 schemaVersion=2 workflowVersion=2026.08.29.1 versionGate=rechecked taskId=task_2b81d5ff -->
