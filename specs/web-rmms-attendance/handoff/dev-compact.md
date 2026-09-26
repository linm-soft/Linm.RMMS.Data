# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-attendance
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T02:00:00.000Z
taskId: task_8abebdd3
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
autoApprove: ON
changeScope: new_page
e2eQa: queued

## Decisions
- formPattern: Mobile hub + RO report/day/log · phone ≤430 · DES-MOB-ATT · N/A ERP Modal
- mfeStdRoute=/web-rmms-attendance · mfeStdUrl http://localhost:9301/web-rmms-attendance · aliases /field/attendance*
- APIs: GET/POST/GET{id} patrol/attendance-logs · auth profile soft · report/day=client aggregate
- GPS: navigator.geolocation · deny=DES-MOB-GPS-DENY · no POST · cấm fake · toast no alert
- labels: useFormOptions('web-rmms-attendance') · ATT_LOOKUP_STATIC attendance.*
- BE: Live reuse · Step 4b N/A · Mobile.Bff catch-all · cấm ERP.* · cấm invent /attendance/*
- Build: yarn build PASS · dotnet Api PASS · Mobile.Bff catch-all verified
- next: /agent-qa* · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| heroStatus/gpsMeta | Text RO | today + GPS |
| btnCheckIn | Button | POST + GPS |
| btnReport | Button/Nav | → report |
| dayRows | ListRow+Badge | 7d aggregate |
| report/day/log | List/Detail RO | client / GET{id} |
| gpsCapture | GPS | deny disable |
| empty | Empty | [] / — |

## Screens / zones
- ATT-00…ATT-09 · DES-MOB-ATT · DES-MOB-GPS-DENY
- peerStdUrl= http://localhost:9301/web-rmms-attendance
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks
- FormMode↔API: GET/POST/GET{id} · client report/day
- T-* Dev: done · T-QA-*: pending queued
- debt: UNCLEAR-EMPTY-COPY · route requires session/log

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/implement/web-rmms-attendance.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/STATUS.md
