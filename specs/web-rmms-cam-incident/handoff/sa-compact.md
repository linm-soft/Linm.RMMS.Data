# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-cam-incident
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T01:52:00.000Z
contentHash: sha256:e515f74ca821b652154473ac30eaec7bb13c8921acf6725b739dc4eb1744b8d1
taskId: task_d0623a44
autoApprove: ON
changeScope: edit_page
solution_confirm: approve

## Decisions
- changeScope: edit_page · cấm new_page · cấm invent CamIncident* / route mới
- formPattern: INC-CAP/N/D/L · Pattern B GPS · LeaveConfirm · ≤430 · DES-GRID N/A
- domain: Incident · DOMAIN-MAP add `web-rmms-cam-incident` · bind peer web-rmms-incident · cấm ERP.* · cấm web-bff
- BFF: Mobile.Bff :5202 · mobile-bff/api/v1/incident/** + patrol/sessions + asset-types + files + auth/profile
- FormMode↔API: GET/POST incidents · GET{id} · close · sessions · asset-types · files · profile caps
- entity/migration: **none** · Live DTO KEEP · Step 4b skip SA
- Role: tuần đường write+close · QL_HAT list all + assign CTA · TK+NT RO · cite role-gate packageCode/roleCaps
- DEC-LIST-01: không invent reporter query · tuần đường client filter reporterName≈profile · QL_HAT unscoped
- DEC-CLOSE-01: ẩn close QL_HAT/TK/NT · tuần đường giữ close · BE close KEEP
- Assign: nav paths.workFor peer giao-viec-ql-hat · cấm invent assign DTO
- Pattern B GPS · leave dirty INC-CAP/N · disabled=creating|saving only
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

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
- DOMAIN-MAP: web-rmms-cam-incident → Incident CLOSED
- T-*: (team_lead) edit Incident* role-gate + assign CTA + DEC-LIST/CLOSE · devSlash=/agent-dev

## UNCLEAR
- none open · UNCLEAR-INC-DOMAIN-ROW · ROLE-SOURCE · LIST-FILTER · CLOSE-VS-ASSIGN CLOSED

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/be/solution-discovery.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/handoff/design-compact.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-incident-real-data.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/STATUS.md
