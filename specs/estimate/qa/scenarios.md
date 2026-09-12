# QA — Scenarios — estimate

## E2E screenshots

Viewer: `/api/qldb/artifact?id=&rel=qa/scenarios.md` rewrite `screens/{caseId}.png`.

CLI **PASS** = Maestro + PNG + store px only — **not** visual vs demo. QA **Read** A3-CORE + P6-CORE vs prototype (`/review-align-ux-ios-android`). Demo `.row-icon`/`#i-*` missing on live → Must **GAP-MOB-UX-COMP-03** · log `qa/bugs/`. Skip vision → **GAP-MOB-E2E-VIS-01**.

| Case | Store | Result | Evidence |
|------|-------|--------|----------|
| A10-BFF | A10 · P11 | **PASS** | — |
| A11-LAUNCH | A11 | **PASS** | ![A11-LAUNCH](screens/A11-LAUNCH.png) |
| A9-LOGIN | A9 · P10 | **PASS** | ![A9-LOGIN](screens/A9-LOGIN.png) |
| A3-CORE | A3 · A11 | **PASS** | ![A3-CORE](screens/A3-CORE.png) |
| P6-CORE | P6 · P11 | **PASS** | ![P6-CORE](screens/P6-CORE.png) |
| P6-CORE-2 | P6 | **PASS** | ![P6-CORE-2](screens/P6-CORE-2.png) |

## Visual align (`/review-align-ux-ios-android`)

| Surface | Verdict | Notes |
|---------|---------|-------|
| A3-CORE (iOS) vs demo `#sc-estimate` | **Aligned** | TopBar · banner · asset · **labelHeader** Giao cho / Khối lượng / Đơn giá visible · AC-F-13 · keyboard covers lower (runtime OK) |
| P6-CORE / P6-CORE-2 (Android) vs demo | **Aligned** | labelHeader Khối lượng·Đơn giá·Thành tiền·SLA·Due · CTA `btn-assign`/`btn-draft` · tab work · MD5 ≠ |
| AC-F-13 / GAP-MOB-EDIT-01 | **PASS** | labelHeader above fields dual · **cấm** placeholder-only |
| Demo `.row-icon` / `#i-*` | **N/A Must** | proto `row no-icon` · tab `#i-*` = SVG SSOT · live = native glyphs |
| IME / Gboard floating bar (Android) | **N/A Must** | emulator overlay · không Must app |
| GAP-MOB-UX-COMP-03 | **closed** | Must **0** · không mở `qa/bugs` Must |
| GAP-MOB-E2E-VIS-01 | **n/a** | vision Read done |

## Closed gaps (re-QA this edit)

| ID | Result |
|----|--------|
| GAP-MOB-EDIT-01 | **closed** · AC-F-13 labelHeader dual · CORE Read |
| GAP-QA-STORE-02 | **closed** · API `:5101` forward → `:5111` · gate PASS |
| GAP-QA-P6-DUP-01 | **closed** · P6-CORE MD5 ≠ P6-CORE-2 |
| R-QA-01 | **closed** · verdict PASS |

## Runtime

- `yarn e2e-qa-mobile` · feature=`estimate` · ok:**true** · capturedAt=`2026-09-01T15:00:18.091Z`
- iOS: iPhone 17 Pro Max · Android: emulator-5554 · Maestro ON
- API compose host `:5111` · gate `:5101` via TCP forward · BFF `:5202`
- cases: A11-LAUNCH,A10-BFF,A9-LOGIN,A3-CORE,P6-CORE,P6-CORE-2
- **cấm** mfeStdUrl / yarn start:std · **cấm** kill worker (GAP-QA-E2E-KILL-01)

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-qa-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-09-01T15:03:00.000Z |
| versionGate | rechecked |
| taskId | task_0a79076c |

---
<!-- Version meta: skillVersion=2026.08.25.01 · schemaVersion=2 · workflowVersion=2026.08.29.1 · versionGate=rechecked · taskId=task_0a79076c -->
