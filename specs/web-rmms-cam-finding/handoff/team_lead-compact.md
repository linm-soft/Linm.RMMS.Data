# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-cam-finding
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T07:37:30.000Z
contentHash: sha256:a7c3e91f0b4d62e8c5f1a9d0e3b7c4f6a2d8e1b5c9f0a4d7e6b3c1f8a5d2e0b9
taskId: task_430be830
autoApprove: ON
changeScope: edit_page
team_lead_confirm: approve
devSlash: /agent-dev
e2eQa: queued

## Decisions
- changeScope: edit_page · cấm new_page · cấm invent CamFinding* / product route
- forms: FIND-L · FIND-F · FIND-D · phone 430 · DES-GRID N/A · LeaveConfirm · Pattern B
- productRoute: /phat-hien/:sessionId* KEEP · mfeStdUrl alias only · route_confirm N/A
- entity/migration: none · Step 4b skip
- Role: tuần kiểm FAB+write+recheck · roleGateBanner · cite role-gate · cấm MANAGER→QL_HAT
- dueAt: Design §5 TT41 client map · editable · cấm SlaHours=24 · UNCLEAR-DUE→Dev
- slaBadge: client derive dueAt vs now/recheckAt · cấm invent slaStatus
- REMOVE assignCta FIND-D · API-07 keep · peer giao-viec-ql-hat
- be Patrol · Mobile.Bff · cấm ERP.* · cấm web-bff · cấm Excel · cấm fake GPS
- next: /agent-dev · GAP-PKT-ROLE-01 stop · e2eQa queued QA

## Inventory (slim)
| id | controlHint | T-* |
|----|-------------|-----|
| fabCreate/save/recheck | Button | T-FIND-ROLE |
| hangMuc/dueAt | Select/Date | T-FIND-DUE |
| slaBadge | Badge | T-FIND-SLA |
| assignCta | — | T-FIND-ASSIGN-RM REMOVE |
| gps | GPS+Banner | T-FIND-GPS |
| leave | LeaveConfirm | T-FIND-LEAVE |
| photos | RouteCapture | cite files API-09 |
| roleCaps | Hidden/Banner | T-FIND-ROLE · API-10 |

## Screens / zones (ids only)
- FIND-L · FIND-F · FIND-D · DES-LEAVE · BANNER · roleGate
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/ui/prototype/index.html
- productRoute= /phat-hien/:sessionId* · mfeStdUrl alias
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: API-01..10 Live KEEP · assign UI out
- entity/migration: none
- T-FIND-ROLE/DUE/SLA/ASSIGN-RM/GPS/LEAVE → ready · owner Dev
- files: FindingList/Form/DetailPage.tsx · role-gate cite

## UNCLEAR
- UNCLEAR-FIND-DUE-CATALOG → Dev wire Design §5 table
- others CLOSED (CTX · DOMAIN · ROLE · SLA)

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/task/web-rmms-cam-finding.md
- sa compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/handoff/sa-compact.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/ui/design.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/be/solution-discovery.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/STATUS.md
- next: /agent-dev · implement/web-rmms-cam-finding.md
