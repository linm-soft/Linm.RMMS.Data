# Handoff compact — review

schemaVersion: 1
feature: web-rmms-attendance
packKind: list
role: review
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T02:10:00.000Z
taskId: task_12c30c40
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
review_confirm: approve
autoApprove: ON
changeScope: new_page
verdict: PASS
mfeStdUrl: http://localhost:9301/web-rmms-attendance

## Decisions
- formPattern: Mobile hub + RO report/day/log · phone 430 · DES-MOB-ATT · Kind B WAIVE
- QUERY: GET/POST/GET{id} patrol/attendance-logs · client aggregate · cấm invent /attendance/* · cấm demoDays
- SEC: guest gate · GPS deny=no POST · toast · cấm ERP.* · cấm alert
- UI-FN: ATT-00…08 · report/day/log · aliases /field/attendance* · QA S0/S1/QA-20 Aligned
- BE-FN: Patrol Live · Mobile.Bff catch-all · Step 4b N/A
- Must P0: 0 · soft: stock playwright · WDS deep-link · Dev nav chrome
- hash skip: yes · SSOT unchanged
- next: terminal · roleOnly stop (GAP-PKT-ROLE-01) · phase=done

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| guestGate | Empty/CTA | ATT-08 |
| heroStatus/gpsMeta | Text RO | GPS gate |
| btnCheckIn | Button | POST+GPS |
| btnReport | Button/Nav | → report |
| dayRows/empty | List/Empty | 7d agg |
| report/day/log | List/Detail RO | client/GET{id} |

## Screens / zones
- ATT-00…ATT-08 · DES-MOB-ATT · DES-MOB-GPS-DENY
- peerStdUrl= http://localhost:9301/web-rmms-attendance
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks
- FormMode↔API: GET/POST/GET{id} · client report/day
- T-* Dev/QA: done · review PASS
- soft debt: GAP-QA-E2E-STOCK-PLAYWRIGHT · WDS deep-link · Dev nav chrome

## UNCLEAR
- none P0

## Full paths
- findings: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/review/findings.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/STATUS.md
- prior: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/handoff/qa-compact.md
