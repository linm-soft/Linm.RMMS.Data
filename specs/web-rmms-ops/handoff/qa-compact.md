# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-ops
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T12:53:00.000Z
taskId: task_8c3445e6
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
autoApprove: ON
e2eQa: ON · runtime PASS

## Decisions
- changeScope: new_page
- formPattern: Mobile inbox list/full · phone 430 · no master · DES-LEAVE N/A
- Grid/DES-GRID/LinErpListFilterBar: N/A · T-QA-FILTER WAIVE
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-ops · :9301 reuse
- be: Mobile.Bff :5202 · API :5111 · Notification · cấm ERP.*
- e2e: S0 guest OP-06 · S1 staff inbox Live · QA-20 SH-02 · PNG screens/*.png
- stock yarn e2e-qa: FAIL soft port 5101/5201 → `_capture_ops.mjs`
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01)
- **cấm** phase=done

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| inboxList | List | S1 PASS Live |
| rowTitle/SentAt/Unread | Text RO / Badge | S1 OP-03/04 |
| markRead | Button/Action | unread tap ready |
| empty/guestGate/title/back/refresh | Static/Button | S0 OP-06 · chrome OP-01 |
| notifyBadge | Number RO peer | Home peer · not this page |

## Screens / zones (ids only)
- OP-00 · OP-01 · OP-02 · OP-03 · OP-04 · OP-06 · SH-02
- mfeStdUrl= http://localhost:9301/web-rmms-ops
- screens= specs/web-rmms-ops/qa/screens/{S0,S1,QA-20}.png

## API / tasks (ids only)
- Live: GET inbox 200 (S1 rows) · guestGate S0 · mark-read path wired
- T-QA-CRUD-01 · T-QA-OPS-01 = PASS · T-QA-FILTER = WAIVE
- entity/migration: none

## Debt
- stock e2e port gate · compose web-bff restart · LOOKUP_STATIC soft
- UNCLEAR: none

## Full paths (Read only if needed)
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/STATUS.md
