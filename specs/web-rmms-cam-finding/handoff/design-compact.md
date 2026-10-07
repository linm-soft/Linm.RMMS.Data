# Handoff compact — design

schemaVersion: 1
feature: web-rmms-cam-finding
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T00:45:00.000Z
contentHash: sha256:a7c3e91f0b4d62e8c5f1a9d0e3b7c4f6a2d8e1b5c9f0a4d7e6b3c1f8a5d2e0b9
taskId: task_4b5dbcef
autoApprove: ON
design_confirm: approve

## Decisions
- changeScope: edit_page · cấm new_page · cấm invent product route
- forms: FIND-L · FIND-F · FIND-D · phone 430 · DES-GRID N/A
- productRoute: /phat-hien/:sessionId · /moi · /:findingId · /:findingId/sua
- mfeStdUrl alias only · deep-link product /phat-hien*
- reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/ui/prototype/index.html
- Role: tuần kiểm write+recheck · FAB gated · non-TK RO
- REMOVE assignCta FIND-D · giao = peer web-rmms-giao-viec-ql-hat
- dueAt: TT41 suggest by hangMuc · editable · cấm SlaHours=24
- slaBadge: Trong hạn/Quá hạn · derive dueAt · cấm Mục IV tiền
- Pattern B GPS · LeaveConfirmModal FIND-F · cấm fake GPS
- be Patrol · Mobile.Bff · cấm ERP.* · cấm web-bff · cấm Excel · cấm native
- demo N/A · hash skip · cấm re-scan GAP-DES-DEMO-RESCAN-01

## Inventory (slim)
| id | controlHint | note |
|----|-------------|------|
| fabCreate | FAB | hide non-TK |
| hangMuc | Select | trigger due TT41 |
| dueAt | Date | suggest+edit |
| photos | RouteCapture | TK write |
| gps | GPS+Banner | Pattern B |
| save | Button | TK only |
| cards | List | sessionId |
| slaBadge | Badge | Trong/Quá hạn |
| confirmPass/Fail | Button | TK recheck |
| assignCta | — | REMOVE |
| roleCaps | Hidden | role-gate |
| feedback* | Form | keep da-giao |

## Screens / zones (ids only)
- FIND-00 · FIND-L · FIND-F · FIND-D · DES-LEAVE · BANNER · TOAST · roleGate
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/ui/prototype/index.html
- peerStd deep-link= /phat-hien/:sessionId*
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- GET/POST/PUT findings · GET{id} · recheck · feedback · sessions · files
- assign-work-order: API keep · UI out
- T-*: edit Finding* role-gate + due catalog + SLA badge + remove assign

## UNCLEAR (open → next)
- UNCLEAR-FIND-DOMAIN-ROW → SA
- UNCLEAR-FIND-ROLE-SOURCE → deps role-gate
- UNCLEAR-FIND-DUE-CATALOG → Dev (Design §5 table chốt)
- UNCLEAR-FIND-SLA-FIELD → SA

## Full paths
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/ui/prototype/index.html
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-finding-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-finding-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/STATUS.md
- next: sa · be/solution-discovery.md
