# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-attendance
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T01:42:00.000Z
taskId: task_ac1434fc
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
team_lead_confirm: approve
autoApprove: ON
changeScope: new_page
route_confirm: approve

## Decisions
- formPattern: Mobile hub + RO report/day/log · phone ≤430 · DES-MOB-ATT · N/A ERP Modal · useFormOptions / attendance.*
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-attendance · mfeStdUrl http://localhost:9301/web-rmms-attendance · product /field/attendance*
- be: Mobile.Bff :5202 mobile-bff/api/v1 · Patrol attendance-logs · cấm ERP.* · cấm invent /attendance/* · Step 4b skip · T-BE N/A
- DOMAIN-MAP web-rmms-attendance → Patrol resolved
- FormType: T-UI-LIST→T-UI-ATT-01 · FILTER/CFG/UISCHEMA/LKP/LEAVE WAIVE · FORM→T-UI-ATT-02 · GAP-TL-FORMTYPE-01 PASS
- T-*: T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 · T-UI-ATT-01..03 · T-UI-ACT/FIELD/PROD/UX/RESP/HIST · T-QA-CRUD-01 · T-QA-ATT-01
- HARD: GPS deny=no POST · report/day=client aggregate · cấm demoDays · Face/NFC DEFER
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

## Inventory (slim)
| id | controlHint | T-* |
|----|-------------|-----|
| heroStatus/gpsMeta | Text RO | T-UI-ATT-01/02 |
| btnCheckIn | Button | T-UI-ATT-02 |
| btnReport | Button/Nav | T-UI-ATT-01 |
| dayRows | ListRow+Badge | T-UI-ATT-01 |
| report/day/log | List/Detail RO | T-UI-ATT-03 |
| post.route/lat/lng | Text/Hidden | T-UI-ATT-02 |
| gpsCapture | GPS | T-UI-ATT-02 |
| empty | Empty | T-UI-ATT-01/03 |

## Screens / zones
- ATT-00…ATT-09 · DES-MOB-ATT · DES-MOB-GPS-DENY
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-attendance
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks
- FormMode↔API: GET/POST/GET{id} patrol/attendance-logs · GET auth/profile · client report/day
- entity/migration: none · T-BE N/A
- T-* pending · devSlash=/agent-dev · qaSlash=/agent-qa*

## UNCLEAR
- UNCLEAR-STD-ROUTE: Dev follow STATUS mfeStdRoute · product /field/attendance*
- UNCLEAR-EMPTY-COPY: Dev/QA live [] · cấm demoDays

## Full paths
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/task/web-rmms-attendance.md
- sa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/STATUS.md
