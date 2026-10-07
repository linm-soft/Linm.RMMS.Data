# Handoff compact — design

schemaVersion: 1
feature: web-rmms-cam-checkin
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T00:30:00.000Z
contentHash: sha256:2ff2873ea06c8d3d8e707c24a142432b3f1e356db42bbb006f594fc6b9f213db
taskId: task_8376ddfd
design_confirm: approve
autoApprove: ON

## Decisions
- changeScope: edit_page · cấm new_page · cấm route mới
- forms: CheckInSheet (CI-01) · PatrolDetailPage (CI-02)
- productRoute: /tuan-duong/:id · /tuan-duong/:id/diem-tuan
- mfeStdUrl: alias only · cấm invent product slug
- Role: tuần đường write · QL_HAT view · TK+NT block
- Pattern B GPS · leaveConfirm dirty CI-01 · disabled=saving only
- DES-GRID / LinErpListFilterBar: N/A phone
- real_view_parity: v1
- cấm: Giao việc · SLA · Mục IV · Excel · ERP.* · web-bff · fake GPS · CamCheckIn*
- reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-checkin/ui/prototype/index.html

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| photos | RouteCapture | tuần đường write · QL_HAT view |
| plan/gps/dist | Banner+Text RO | Live policy · Pattern B |
| chainageKm/Label | Input | optional POST |
| content | TextArea | optional |
| save | Button | tuần đường · saving only |
| timeline | List RO | GET check-ins · QL_HAT OK |
| ctaCheckIn/endSession | Button | ẩn non-tuần-đường |
| roleGateBanner | Banner | view-only / block |
| roleCaps | Hidden | cite role-gate |

## Screens / zones (ids only)
- CI-01 · CI-02 · DES-LEAVE · roleGateBanner
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-checkin/ui/prototype/index.html
- peerStd deep-link= /tuan-duong/:id/diem-tuan

## API / tasks (ids only)
- FormMode↔API: GET sessions/{id} · plan-points · check-in-policy · check-ins GET/POST · files cite · PUT session
- T-*: edit CheckInSheet + PatrolDetailPage role-gate
- handoff SA: UNCLEAR-CI-DOMAIN-ROW · UNCLEAR-CI-ROLE-SOURCE

## UNCLEAR
- UNCLEAR-CI-DOMAIN-ROW: SA DOMAIN-MAP slug hoặc bind peer mobile-a
- UNCLEAR-CI-ROLE-SOURCE: deps web-rmms-role-gate caps

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-checkin/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-checkin/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-checkin-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-checkin-real-data.md
- prior-compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-checkin/handoff/po-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-checkin/STATUS.md
