# Dev — Implement — estimate (iOS)

| Field | Value |
|-------|-------|
| feature | `estimate` |
| platform | iOS |
| this role | `dev` · `/agent-dev-ios` · `T-IOS-EST-LABEL` |
| status | **done** |
| changeScope | `edit_page` · **GAP-MOB-EDIT-01** |
| packKind | `sheet` → full screen `#sc-estimate` · `DES-MOB-EST` |
| taskId | `task_2b81d5ff` |
| priorShip | `task_8ab3d7ec` · `task_59d13884` **giữ** |
| updatedAt | `2026-09-01T14:51:45.000Z` |

## Delta this edit (GAP-MOB-EDIT-01)

| Area | Change |
|------|--------|
| UI | `Presentation/Features/Estimate/EstimateView.swift` — `fieldLabel` 13pt + `labeledField` ×6 |
| Fields | assignee · qty · unitPrice · total · sla · due — labelHeader visible · `LinmTextField("")` **cấm** placeholder-only |
| API/BFF | **unchanged** · Step 4b **N/A** |
| Tags | `sc-estimate` · `input-*` · `btn-assign` · `btn-draft` **giữ** |

## Shipped (giữ)

| Area | Path / note |
|------|-------------|
| Screen | `Presentation/Features/Estimate/` — full screen · route_a |
| Entry | mnt-list hub/card + incident CTA → push `#sc-estimate` |
| API | `ai-vision/estimates/*` · `POST maintenance/work-orders` · `POST …/assign` |

## VERIFY GATE

| Gate | Result |
|------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild -scheme LinmRmms` dest **iPhone 17 Pro** | **PASS** |
| BFF `dotnet build` | **PASS** (shared) |
| Step 4b / EstimateController | **N/A** · UX-only |
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
| generatedAt | 2026-09-01T14:51:45.000Z |
| versionGate | rechecked |
| contentHash | sha256:estimate-mobile-control-hint-20260901-edit01 |
| taskId | `task_2b81d5ff` |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.29.1 schemaVersion=2 workflowVersion=2026.08.29.1 versionGate=rechecked taskId=task_2b81d5ff -->
