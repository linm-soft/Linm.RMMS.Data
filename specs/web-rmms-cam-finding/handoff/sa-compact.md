# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-cam-finding
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T07:40:00.000Z
contentHash: sha256:a7c3e91f0b4d62e8c5f1a9d0e3b7c4f6a2d8e1b5c9f0a4d7e6b3c1f8a5d2e0b9
taskId: task_f16b7447
autoApprove: ON
changeScope: edit_page
solution_confirm: approve

## Decisions
- changeScope: edit_page · cấm new_page · cấm invent CamFinding* / route mới
- formPattern: FIND-F Pattern B · FIND-L · FIND-D · LeaveConfirm · ≤430 · DES-GRID N/A
- domain: Patrol · DOMAIN-MAP add `web-rmms-cam-finding` · bind peer mobile-c · cấm ERP.* · cấm web-bff
- BFF: Mobile.Bff :5202 · mobile-bff/api/v1/patrol/findings** + sessions + files + auth/profile
- FormMode↔API: GET/POST/PUT findings · GET{id} · recheck · feedback · sessions · files · profile caps
- assign-work-order: API keep · UI out (peer giao-viec-ql-hat)
- entity/migration: **none** · Live DTO KEEP · Step 4b skip SA · cấm invent slaStatus
- SLA: **client derive** dueAt vs now/recheckAt → Trong hạn/Quá hạn
- dueAt: Design §5 TT41 client map · Dev wire · editable · cấm SlaHours=24
- Role: tuần kiểm write+capture+recheck · FAB gated · cite role-gate tuanKiem/QL_HAT
- Pattern B GPS · leave dirty FIND-F · lock=saving|photoBusy
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| photos | RouteCapture | TK write · detail view/recheck |
| gps | GPS+Banner | Pattern B form+recheck |
| hangMuc | Select | trigger due TT41 |
| dueAt | Date | suggest+edit · Live field |
| slaBadge | Badge | client derive only |
| save | Button | POST/PUT · TK |
| fabCreate | FAB | hide non-TK |
| cards | List | GET findings?sessionId |
| confirmPass/Fail | Button | POST recheck · TK |
| assignCta | — | REMOVE |
| feedback* | Form | keep da-giao |
| roleCaps | Hidden/Banner | cite role-gate |

## Screens / zones (ids only)
- FIND-L · FIND-F · FIND-D · DES-LEAVE · BANNER · roleGate
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/ui/prototype/index.html
- productRoute= /phat-hien/:sessionId* · mfeStdUrl alias only
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: API-01..10 Live KEEP · no path invent
- entity/migration: none
- DOMAIN-MAP: web-rmms-cam-finding → Patrol CLOSED
- T-FIND-ROLE/DUE/SLA/ASSIGN-RM/GPS/LEAVE → team_lead · devSlash=/agent-dev

## UNCLEAR
- none open SA · DOMAIN-ROW · ROLE-SOURCE · SLA-FIELD CLOSED
- UNCLEAR-FIND-DUE-CATALOG → Dev (Design §5)

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/be/solution-discovery.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/handoff/design-compact.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-finding-real-data.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/STATUS.md
