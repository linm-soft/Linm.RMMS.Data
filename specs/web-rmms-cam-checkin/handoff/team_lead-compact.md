# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-cam-checkin
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T00:40:00.000Z
contentHash: sha256:2ff2873ea06c8d3d8e707c24a142432b3f1e356db42bbb006f594fc6b9f213db
taskId: task_595050d4
autoApprove: ON
changeScope: edit_page
route_confirm: N/A
e2eQa: queued

## Decisions
- changeScope: edit_page · cấm new_page · cấm invent CamCheckIn* / route mới
- packKind: list · forms CI-01 CheckInSheet · CI-02 PatrolDetailPage · DES-LEAVE · ≤430 · DES-GRID N/A
- productRoute: /tuan-duong/:id · /tuan-duong/:id/diem-tuan · mfeStdUrl alias only
- domain: Patrol · DOMAIN-MAP CLOSED · BFF mobile-bff/api/v1/patrol/** · cấm ERP.* · cấm web-bff
- Role: tuần đường write · QL_HAT view · TK+NT block · cite role-gate
- Pattern B GPS · leave dirty CI-01 · disabled=saving only
- entity/migration: none · Step 4b skip · Live DTO KEEP
- T-01 CheckInSheet · T-02 PatrolDetailPage · T-03 QA notes (QA runs e2e)
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued /agent-qa*

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
- files= src/pages/WebRmmsMobileA/CheckInSheet.tsx · PatrolDetailPage.tsx

## API / tasks (ids only)
- FormMode↔API: API-01..08 Live KEEP · sessions · plan-points · check-in-policy · check-ins GET/POST · files · PUT session · profile caps
- T-01: CI-01 CheckInSheet role-gate + Pattern B + leave
- T-02: CI-02 PatrolDetailPage CTA/timeline/endSession gate
- T-03: QA handoff checklist (e2e only /agent-qa*)
- entity/migration: none

## UNCLEAR
- none open

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-checkin/task/web-rmms-cam-checkin.md
- sa-compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-checkin/handoff/sa-compact.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-checkin/be/solution-discovery.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-checkin/STATUS.md
