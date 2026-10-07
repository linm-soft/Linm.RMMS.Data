# Handoff compact — po

schemaVersion: 1
feature: web-rmms-cam-checkin
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T00:24:37.695Z
contentHash: sha256:2ff2873ea06c8d3d8e707c24a142432b3f1e356db42bbb006f594fc6b9f213db
taskId: task_bbc75698

## Decisions
- changeScope: edit_page · cấm new_page · cấm route mới
- packKind: list · confirm
- deltaCite: docs/plan/web-rmms-mobile/PLAN-3-VAI.md § enqueue #2
- forms: CheckInSheet (CI-01) · PatrolDetailPage (CI-02)
- productRoute: /tuan-duong/:id · /tuan-duong/:id/diem-tuan
- mfeStdUrl alias only · cấm invent product slug
- Role: tuần đường write · QL_HAT (HAT-TRUONG/HAT-PHO) view · TK+NT block
- Pattern B GPS · leaveConfirm dirty CI-01
- DES-GRID / LinErpListFilterBar: N/A phone
- cấm: Giao việc · SLA 24h · Mục IV · Excel · ERP.* · web-bff · native
- autoApprove: ON → Design

## Inventory (slim)
| id | controlHint | AC |
|----|-------------|-----|
| photos | RouteCapture | tuần đường write · QL_HAT view |
| plan/gps/dist | Banner+Text RO | Live policy · Pattern B |
| chainageKm/Label | Input | optional POST |
| content | TextArea | optional |
| save | Button | tuần đường · disabled=saving only |
| timeline | List RO | GET check-ins · QL_HAT OK |
| ctaCheckIn/endSession | Button | ẩn non-tuần-đường |
| roleCaps | Hidden | cite role-gate |

## Screens / zones (ids only)
- CI-01 · CI-02
- reviewUrl= (Design) keep sheet/detail · role visibility · 430px
- peerStd deep-link= /tuan-duong/:id/diem-tuan

## API / tasks (ids only)
- FormMode↔API: GET sessions/{id} · plan-points · check-in-policy · check-ins GET/POST · files cite · PUT session (kết ca peer)
- T-*: edit CheckInSheet + PatrolDetailPage role-gate
- QA: §AC role · GPS B · leave · no new route

## UNCLEAR
- UNCLEAR-CI-DOMAIN-ROW: SA DOMAIN-MAP slug hoặc bind peer mobile-a
- UNCLEAR-CI-ROLE-SOURCE: deps web-rmms-role-gate caps

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-checkin/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-checkin-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-checkin-real-data.md
- prior-compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-checkin/handoff/data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-checkin/STATUS.md
