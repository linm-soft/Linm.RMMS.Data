# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-cam-checkin
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-30T17:31:04.000Z
contentHash: sha256:2ff2873ea06c8d3d8e707c24a142432b3f1e356db42bbb006f594fc6b9f213db
taskId: task_a3aedb65
autoApprove: ON
changeScope: edit_page
solution_confirm: approve

## Decisions
- changeScope: edit_page · cấm new_page · cấm invent CamCheckIn* / route mới
- formPattern: Sheet CI-01 Pattern B · Detail CI-02 · LeaveConfirm · ≤430 · DES-GRID N/A
- domain: Patrol · DOMAIN-MAP add `web-rmms-cam-checkin` · bind peer mobile-a · cấm ERP.* · cấm web-bff
- BFF: Mobile.Bff :5202 · mobile-bff/api/v1/patrol/** + files + auth/profile
- FormMode↔API: GET sessions/{id} · plan-points · check-in-policy · check-ins GET/POST · files · PUT session · profile caps
- entity/migration: **none** · Live DTO KEEP · Step 4b skip SA
- Role: tuần đường write · QL_HAT view · TK+NT block · cite role-gate packageCode/roleCaps
- Pattern B GPS · leave dirty CI-01 · disabled=saving only
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| photos | RouteCapture | tuần đường write · QL_HAT view |
| plan/gps/dist | Banner+Text RO | Live policy · Pattern B |
| chainageKm/Label | Input | optional POST |
| content | TextArea | optional |
| save | Button | POST check-ins · tuần đường |
| timeline | List RO | GET check-ins · QL_HAT OK |
| ctaCheckIn/endSession | Button | ẩn non-tuần-đường |
| roleCaps/roleGateBanner | Hidden/Banner | cite role-gate |

## Screens / zones (ids only)
- CI-01 · CI-02 · DES-LEAVE · roleGateBanner
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-checkin/ui/prototype/index.html
- productRoute= /tuan-duong/:id/diem-tuan · mfeStdUrl alias only
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: API-01..08 Live KEEP · no path invent
- entity/migration: none
- DOMAIN-MAP: web-rmms-cam-checkin → Patrol CLOSED
- T-*: (team_lead) edit CheckInSheet + PatrolDetailPage role-gate · devSlash=/agent-dev

## UNCLEAR
- none open · UNCLEAR-CI-DOMAIN-ROW · UNCLEAR-CI-ROLE-SOURCE CLOSED

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-checkin/be/solution-discovery.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-checkin/handoff/design-compact.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-checkin-real-data.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-checkin/STATUS.md
