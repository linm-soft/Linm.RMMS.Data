# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-attendance
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T02:00:00.000Z
taskId: task_5eed79c4
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
autoApprove: ON
e2eQa: ON
changeScope: new_page
mfeStdUrl: http://localhost:9301/web-rmms-attendance

## Decisions
- formPattern: Mobile hub + RO report/day/log · phone 430 · DES-MOB-ATT · Kind B WAIVE
- verdict: **PASS** · visual Aligned · Must 0
- method: start:std :9301 reuse + docker healthy + `_capture_att.mjs` S0/S1/QA-20 · LoginSheet · geo Acc=12 · deep-link fulfill
- T-QA-CRUD-01 · T-QA-ATT-01 · T-QA-GPS-01 **PASS** · T-QA-FILTER **WAIVE**
- yarn build PASS · stock e2e soft (playwright resolve) · **cấm** GAP-QA-E2E-KILL-01
- next: review · `/agent-review` · roleOnly stop · **cấm** phase=done

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| guestGate | Empty/CTA | S0 ATT-08 |
| heroStatus/gpsMeta | Text RO | S1 ±12 m |
| btnCheckIn | Button | #btn-checkin |
| btnReport | Button/Nav | #btn-report |
| dayRows/empty | List/Empty | live [] |
| login sheet | SH-02 | QA-20 |

## Screens / zones
- ATT-00…ATT-03 · ATT-08 · DES-MOB-ATT · PNG `qa/screens/{S0,S1,QA-20}.png`
- peerStdUrl= http://localhost:9301/web-rmms-attendance
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks
- VERIFY: GET attendance-logs live empty · hashes distinct · DOM Aligned
- T-QA-CRUD-01 · T-QA-ATT-01 = done
- soft: stock playwright · WDS deep-link 404 · Dev nav chrome

## UNCLEAR
- none P0 · UNCLEAR-EMPTY-COPY soft closed live

## Full paths
- qa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/STATUS.md
- prior: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/handoff/dev-compact.md
