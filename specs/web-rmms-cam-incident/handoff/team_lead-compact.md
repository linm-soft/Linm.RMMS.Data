# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-cam-incident
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T02:05:00.000Z
contentHash: sha256:e515f74ca821b652154473ac30eaec7bb13c8921acf6725b739dc4eb1744b8d1
taskId: task_c3e355d0
autoApprove: ON
team_lead_confirm: approve
changeScope: edit_page

## Decisions
- changeScope: edit_page · cấm new_page · cấm invent CamIncident* / route mới
- formPattern: INC-CAP/N/D/L · Pattern B GPS · LeaveConfirm · ≤430 · DES-GRID N/A
- route_confirm: N/A keep · product /van-de* · mfeStdUrl alias only
- T-*: T-01 CAP · T-02 Create · T-03 Detail DEC-CLOSE + assign · T-04 List DEC-LIST + fab + assign · T-PERM-01 · leave/ux/resp/prod REQUIRED · Kind B WAIVE
- Role: tuần đường write+close · QL_HAT list all + workFor CTA · TK+NT RO · cite role-gate · cấm MANAGER→Giao việc
- DEC-LIST-01: client filter reporter tuần đường · QL_HAT unscoped · cấm invent reporter query
- DEC-CLOSE-01: ẩn close QL_HAT/TK/NT · tuần đường giữ · BE close KEEP
- Assign: paths.workFor → peer giao-viec-ql-hat · cấm invent assign DTO
- API Live KEEP · entity/migration none · Step 4b skip
- FormType: WAIVE LIST/FILTER/CFG/HIST Kind B · REQUIRED leave+perm+ux
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| photos | RouteCapture | tuần đường write · detail view |
| gps | GPS+Banner | Pattern B · cấm fake |
| title/type/sev | Input+Select | LOOKUP_STATIC · required title |
| create | Button | POST · tuần đường |
| fabCreate | FAB | ẩn non-tuần-đường |
| cards | List | GET · DEC-LIST-01 |
| assignCta | Button | QL_HAT only · workFor |
| close | Button | ẩn QL_HAT/TK/NT |
| roleCaps | Hidden | cite role-gate |

## Screens / zones (ids only)
- INC-CAP · INC-N · INC-D · INC-L · DES-LEAVE · roleGateBanner
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/ui/prototype/index.html
- productRoute= /van-de · /van-de/moi · /van-de/:id · mfeStdUrl alias only
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: API-01..08 Live KEEP · no path invent
- entity/migration: none
- T-01..T-04 · T-PERM-01 · T-UI-LEAVE/UX/RESP/PROD · T-QA-* queued
- files: IncidentCaptureSheet · IncidentCreatePage · IncidentDetailPage · IncidentListPage · paths.ts
- nextSlash=/agent-dev · implement=specs/web-rmms-cam-incident/implement/web-rmms-cam-incident.md

## UNCLEAR
- none open · prior UNCLEAR-INC-* CLOSED by SA

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/task/web-rmms-cam-incident.md
- sa compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/handoff/sa-compact.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/handoff/design-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/STATUS.md
