# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-cam-finding
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T02:10:00.000Z
contentHash: sha256:a7c3e91f0b4d62e8c5f1a9d0e3b7c4f6a2d8e1b5c9f0a4d7e6b3c1f8a5d2e0b9
taskId: task_726d9b3a

## Decisions
- changeScope: edit_page · cấm new_page · cấm route mới
- deltaCite: docs/plan/web-rmms-mobile/PLAN-3-VAI.md § enqueue #5 · § Tuần kiểm đánh giá SLA
- forms: FindingFormPage (FIND-F) · FindingDetailPage (FIND-D) · FindingListPage (FIND-L)
- productRoute: /phat-hien/:sessionId · /moi · /:findingId · /:findingId/sua
- mfeStdUrl alias: http://localhost:9301/web-rmms-cam-finding (không invent product route)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · phone 430px
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff :5202 · mobile-bff/api/v1 · cấm web-bff
- demo: N/A · CTX missing → PLAN+code (UNCLEAR-FIND-CTX)
- Role: tuần kiểm lập phiếu+ảnh · Xác nhận đạt / Ghi chưa đạt · nhãn Trong hạn/Quá hạn · không nút giao việc
- QL_HAT = HAT-TRUONG + HAT-PHO · cấm suy từ MANAGER-RMMS · không giao trên FIND-*
- dueAt: gợi ý TT41 Phụ lục IV theo hangMuc · sửa được · cấm SlaHours=24
- cấm: Mục IV tiền · iOS/Android · web-bff · Excel · invent CamFinding*
- Pattern B GPS: banner on Lưu/recheck · cấm fake
- REMOVE: FIND-D CTA Giao đơn vị BDTX (peer web-rmms-giao-viec-ql-hat)
- OUT: invent product route · assign UI · SLA 24h only

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| photos | ảnh | RouteCaptureControl | tuần kiểm write · detail view/recheck |
| gps | định vị | GPS + Banner | Pattern B form+recheck |
| hangMuc | hạng mục | Select | trigger due TT41 |
| dueAt | hạn | Date | suggest+edit · bdtx required |
| slaBadge | Trong/Quá hạn | Badge | derive dueAt |
| save | Lưu | Button | role tuần kiểm |
| fabCreate | FAB | Button | ẩn non-tuan-kiem |
| cards | list | List | GET findings?sessionId |
| confirmPass | Xác nhận đạt | Button | tuần kiểm · cho-kiem-tra |
| confirmFail | Ghi chưa đạt | Button | tuần kiểm |
| assignCta | Giao việc | — | REMOVE |
| roleCaps | quyền | Hidden | cite role-gate |

## Screens / zones (ids only)
- FIND-L · FIND-F · FIND-D
- reviewUrl= (Design) prototype keep list/form/detail
- peerStd deep-link= /phat-hien/:sessionId/moi
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: GET/POST/PUT findings · GET{id} · recheck · feedback · sessions · files cite
- assign-work-order: API keep · UI out
- real-data §A+§B: PASS
- T-*: edit Finding* role-gate + due suggest + SLA badge + remove assign (cite PLAN #5)

## UNCLEAR
- UNCLEAR-FIND-CTX: CTX file missing — PO create hoặc accept PLAN+code
- UNCLEAR-FIND-DOMAIN-ROW: SA add DOMAIN-MAP slug hoặc bind peer web-rmms-mobile-c
- UNCLEAR-FIND-ROLE-SOURCE: deps web-rmms-role-gate
- UNCLEAR-FIND-DUE-CATALOG: map hangMuc→ngày TT41 (client/BE)
- UNCLEAR-FIND-SLA-FIELD: derive client vs BE slaStatus

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-finding-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-finding-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-cam-finding.md (MISSING)
- plan: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/PLAN-3-VAI.md
- code: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile/src/pages/WebRmmsMobileC/FindingFormPage.tsx
- code2: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile/src/pages/WebRmmsMobileC/FindingDetailPage.tsx
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/STATUS.md
