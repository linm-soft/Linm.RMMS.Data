# Handoff compact — po

schemaVersion: 1
feature: web-rmms-cam-finding
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T02:15:00.000Z
contentHash: sha256:a7c3e91f0b4d62e8c5f1a9d0e3b7c4f6a2d8e1b5c9f0a4d7e6b3c1f8a5d2e0b9
taskId: task_8dca9e79
autoApprove: ON
e2eQa: queued

## Decisions
- changeScope: edit_page · cấm new_page · cấm route mới
- packKind: list · phone 430px · DES-GRID N/A
- forms: FIND-L FindingListPage · FIND-F FindingFormPage · FIND-D FindingDetailPage
- productRoute: /phat-hien/:sessionId · /moi · /:findingId · /:findingId/sua
- mfeStdUrl alias only · cấm invent product route
- Role: tuần kiểm lập+ảnh+recheck · nhãn Trong/Quá hạn · không nút giao
- QL_HAT = HAT-TRUONG+HAT-PHO · cấm MANAGER-RMMS · giao = peer giao-viec-ql-hat
- dueAt: TT41 Phụ lục IV theo hangMuc · editable · cấm SlaHours=24
- SLA: Đạt/Chưa đạt + Trong hạn/Quá hạn · cấm Mục IV tiền
- Pattern B GPS · cấm fake · leaveConfirm FIND-F dirty
- REMOVE assignCta FIND-D · API assign keep UI out
- CTX: PO created · UNCLEAR-FIND-CTX RESOLVED
- be Patrol · bff Mobile.Bff · cấm ERP.* · cấm web-bff · cấm Excel · cấm native
- deltaCite: PLAN-3-VAI enqueue #5 · Tuần kiểm đánh giá SLA

## Inventory (slim)
| id | controlHint | AC |
|----|-------------|-----|
| photos | RouteCapture | TK write |
| gps | GPS+Banner | Pattern B |
| hangMuc | Select | due TT41 |
| dueAt | Date | suggest+edit |
| slaBadge | Badge | Trong/Quá hạn |
| save | Button | TK only |
| fabCreate | FAB | hide non-TK |
| cards | List | sessionId |
| confirmPass/Fail | Button | TK recheck |
| assignCta | — | REMOVE |
| roleCaps | Hidden | role-gate |
| feedback* | Form | keep da-giao |

## Screens / zones
- FIND-L · FIND-F · FIND-D
- reviewUrl= (Design) keep L/F/D prototype
- peerStd deep-link= /phat-hien/:sessionId/moi

## API / tasks
- GET/POST/PUT findings · GET{id} · recheck · feedback · sessions · files
- assign-work-order: API keep · UI out
- T-*: edit Finding* role-gate + due catalog + SLA badge + remove assign

## UNCLEAR (open → next)
- UNCLEAR-FIND-DOMAIN-ROW → SA
- UNCLEAR-FIND-ROLE-SOURCE → deps role-gate
- UNCLEAR-FIND-DUE-CATALOG → Design/Dev
- UNCLEAR-FIND-SLA-FIELD → SA

## Full paths
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/po/requirement.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-cam-finding.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-finding-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-finding-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/STATUS.md
- next: design · ui/design.md
