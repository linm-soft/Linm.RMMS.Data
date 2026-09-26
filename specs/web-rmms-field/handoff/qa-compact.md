# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-field
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T02:55:00.000Z
taskId: task_9d470b8b
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
autoApprove: ON
e2eQa: ON · runtime PASS

## Decisions
- changeScope: new_page
- formPattern: Mobile Field hub / full · phone 430 · no master form · DES-GRID N/A
- Grid/DES-GRID/LinErpListFilterBar: N/A · T-QA-FILTER WAIVE
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-field · :9301 reuse
- be: Mobile.Bff :5202 · API :5111 · cấm ERP.*
- e2e: S0 guest · S1 staff LoginSheet · QA-20 SH-02 · PNG screens/*.png
- stock yarn e2e-qa: FAIL soft port 5101/5201 → `_capture_field.mjs`
- Live S1: GET patrol/sessions → sessionHint + door badges
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01)
- **cấm** phase=done

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| guestGate | Static/Button | S0 PASS · → home login |
| doorPatrol/Inspect | Button/Nav | S1 PASS · Live badge |
| syncBtn+badge | Button/Number RO | S1 PASS · queue |
| tiles×7 | Button/Nav | S1 PASS |
| sessionHint | Text RO | S1 Live sessions |

## Screens / zones (ids only)
- FL-00 · FL-01 · FL-02 · FL-03 · SH-02
- mfeStdUrl= http://localhost:9301/web-rmms-field
- screens= specs/web-rmms-field/qa/screens/{S0,S1,QA-20}.png

## API / tasks (ids only)
- Live: GET patrol/sessions = staff badge (S1)
- T-QA-CRUD-01 · T-QA-FL-01 = PASS · T-QA-FILTER = WAIVE
- entity/migration: none

## Debt
- stock e2e port gate · WDS deep-link fulfill · playwright junction
- UNCLEAR: none

## Full paths (Read only if needed)
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field/STATUS.md
