# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-cam-incident
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T03:10:00.000Z
contentHash: sha256:e515f74ca821b652154473ac30eaec7bb13c8921acf6725b739dc4eb1744b8d1
taskId: task_a125a09f
autoApprove: ON
changeScope: edit_page
dev_confirm: approve

## Decisions
- changeScope: edit_page · cấm new_page · cấm CamIncident* / route mới
- formPattern: INC-CAP/N/D/L · Pattern B GPS · LeaveConfirm · ≤430 · DES-GRID N/A
- Role: tuần đường write+close · QL_HAT list all + workFor CTA · TK+NT RO · cite roleCaps · cấm MANAGER→Giao việc
- DEC-LIST-01: client filter reporterName≈profile · QL_HAT unscoped · cấm invent reporter query
- DEC-CLOSE-01: ẩn close QL_HAT/TK/NT · tuần đường giữ · BE close KEEP
- Assign: paths.workFor → peer giao-viec · cấm invent assign DTO
- API Live KEEP · entity/migration none · Step 4b WAIVE
- FormType: WAIVE LIST/FILTER/CFG/HIST Kind B · REQUIRED leave+perm+ux PASS
- Build: yarn build MFE PASS · BE skip (no change)
- next: /agent-qa · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| photos | RouteCapture | tuần đường write · detail view |
| gps | GPS+Banner | Pattern B · cấm fake |
| title/type/sev | Input+Select | LOOKUP_STATIC · create tuần đường |
| create | Button | POST · gated |
| fabCreate | FAB | ẩn non-tuần-đường |
| cards | List | GET · DEC-LIST-01 |
| assignCta | Button | QL_HAT · workFor |
| close | Button | ẩn QL_HAT/TK/NT |
| roleCaps | Hidden | camIncidentAccess |

## Screens / zones (ids only)
- INC-CAP · INC-N · INC-D · INC-L · DES-LEAVE · roleGateBanner
- mfeStdUrl= http://localhost:9301/web-rmms-cam-incident
- productRoute= /van-de · /van-de/moi · /van-de/:id
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: API-01..08 Live KEEP
- entity/migration: none · Step 4b WAIVE
- T-01..T-04 · T-PERM-01 · T-UI-LEAVE/UX/RESP/PROD PASS
- files: camIncidentAccess · IncidentCaptureSheet · IncidentCreatePage · IncidentDetailPage · IncidentListPage · lookupStatic · styles
- debt: E2E T-QA-* queued QA
- nextSlash=/agent-qa · implement=specs/web-rmms-cam-incident/implement/web-rmms-cam-incident.md

## UNCLEAR
- none open

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/implement/web-rmms-cam-incident.md
- task compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/handoff/team_lead-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/STATUS.md
