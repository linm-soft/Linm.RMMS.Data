# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-cam-checkin
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-30T17:18:26.000Z
contentHash: sha256:2ff2873ea06c8d3d8e707c24a142432b3f1e356db42bbb006f594fc6b9f213db
taskId: task_cdfedcf9

## Decisions
- changeScope: edit_page · cấm new_page · cấm route mới
- deltaCite: docs/plan/web-rmms-mobile/PLAN-3-VAI.md § enqueue #2
- forms: CheckInSheet (CI-01) · PatrolDetailPage (CI-02)
- productRoute: /tuan-duong/:id · /tuan-duong/:id/diem-tuan
- mfeStdUrl alias: http://localhost:9301/web-rmms-cam-checkin (không invent product route)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · phone 430px
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff :5202 · mobile-bff/api/v1 · cấm web-bff
- demo: N/A
- Role: tuần đường ghi điểm+ảnh · QL_HAT (HAT-TRUONG/HAT-PHO) chỉ xem · TK+NT không mở ca
- cấm: Giao việc trên CI-* · SLA 24h · Mục IV tiền · iOS/Android
- Pattern B GPS: banner on Lưu · cấm fake · Lưu chỉ lock saving
- OUT: Excel · invent CamCheckInController · suy QL_HAT từ MANAGER-RMMS

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| photos | ảnh | RouteCaptureControl | tuần đường write · QL_HAT view |
| plan/gps/dist | match | Text RO + Banner | policy Live |
| chainageKm/Label | lý trình | Input | optional POST |
| content | mô tả | TextArea | optional |
| save | ghi điểm | Button | role tuần đường · Pattern B |
| timeline | điểm đã ghi | List RO | GET check-ins |
| ctaCheckIn | CTA | Button | ẩn non-tuần-đường |
| roleCaps | quyền | Hidden | cite role-gate |

## Screens / zones (ids only)
- CI-01 · CI-02
- reviewUrl= (Design) prototype keep sheet/detail
- peerStd deep-link= /tuan-duong/:id/diem-tuan
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: GET sessions/{id} · plan-points · check-in-policy · check-ins GET/POST · files cite · PUT session (kết ca peer)
- real-data §A+§B: PASS
- T-*: edit CheckInSheet + PatrolDetailPage role-gate (cite PLAN-3-VAI)

## UNCLEAR
- UNCLEAR-CI-DOMAIN-ROW: SA add DOMAIN-MAP slug hoặc bind peer mobile-a
- UNCLEAR-CI-ROLE-SOURCE: deps web-rmms-role-gate packageCode/roleCaps

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-checkin-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-checkin-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-cam-checkin.md
- plan: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/PLAN-3-VAI.md
- code: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile/src/pages/WebRmmsMobileA/CheckInSheet.tsx
- code2: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile/src/pages/WebRmmsMobileA/PatrolDetailPage.tsx
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-checkin/STATUS.md
