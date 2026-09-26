# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-attendance
packKind: list
role: sa
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T01:40:00.000Z
taskId: task_5dd47158
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: new_page · formPattern: Mobile hub + RO report/day/log · phone ≤430 · N/A ERP Modal · DES-GRID N/A
- domain: Patrol (`patrol`) · Live attendance-logs · DOMAIN-MAP row `web-rmms-attendance` applied
- mfeStdRoute: /web-rmms-attendance · mfeStdUrl http://localhost:9301/web-rmms-attendance
- productRoute: /field/attendance* · nativeCite: #sc-attendance* · DES-MOB-ATT · DES-MOB-GPS-DENY
- BFF: Mobile.Bff :5202 · mobile-bff/api/v1 · **cấm** web-bff · **cấm** ERP.* · **cấm** invent /attendance/*
- FormMode↔API: GET list · POST create · GET/{id} · report/day=client aggregate
- Body POST: userName·route·checkInAt·kmPoint?·lat·lng·inZone·status·note?
- GPS: navigator.geolocation bắt buộc Chấm vào · deny=no POST · **cấm** fake
- API Mới / entity / migration / Step 4b: **none** at SA
- labels: useFormOptions attendance.* · demo N/A · **cấm** demoDays
- Out: Face/NFC DEFER · report API invent · supervise/zone · native edits · desktop Field
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| heroStatus/gpsMeta | hero | Text RO | state + fix |
| btnCheckIn | hero | Button | POST + GPS |
| btnReport | hero | Button/Nav | → report |
| dayRows | history | ListRow+Badge | GET aggregate |
| report/day/log | chain | List/Detail RO | GET · GET/{id} |
| post.route/lat/lng | form | Text/Hidden | POST body |
| gpsCapture | GPS | Action | deny = disable |
| empty | empty | Empty | [] / hero — |

## Screens / zones (ids only)
- ATT-00 · ATT-01 · ATT-02 · ATT-03 · ATT-04 · ATT-05 · ATT-06 · ATT-07 · ATT-08 · ATT-09
- DES-MOB-ATT · DES-MOB-GPS-DENY
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-attendance
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: GET/POST/GET{id} patrol/attendance-logs · client report/day
- UNCLEAR-DOMAIN-MAP-ATT: resolved · UNCLEAR-REPORT-API: P1 client aggregate
- T-*: (team_lead) · W3 Field attendance · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-STD-ROUTE: follow STATUS mfeStdRoute · product /field/attendance*
- UNCLEAR-EMPTY-COPY: live empty/[] · cấm demoDays

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/be/solution-discovery.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/handoff/design-compact.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-attendance-real-data.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/STATUS.md
