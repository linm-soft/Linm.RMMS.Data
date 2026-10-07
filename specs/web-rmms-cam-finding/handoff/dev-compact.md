# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-cam-finding
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T00:50:00.000Z
contentHash: sha256:a7c3e91f0b4d62e8c5f1a9d0e3b7c4f6a2d8e1b5c9f0a4d7e6b3c1f8a5d2e0b9
taskId: task_8fda70d3
autoApprove: ON
changeScope: edit_page
dev_confirm: approve
e2eQa: queued

## Decisions
- changeScope: edit_page · Finding* edit · alias `/web-rmms-cam-finding` → `/phat-hien`
- T-FIND-ROLE: camFindingAccess(tuanKiem) · FAB/save/recheck · roleGateBanner
- T-FIND-DUE: tt41FindingDue map Live hangMuc · editable · cấm SlaHours=24
- T-FIND-SLA: deriveSlaBadge dueAt vs now/recheckAt · client-only
- T-FIND-ASSIGN-RM: REMOVE Giao BDTX CTA · API-07 keep
- T-FIND-GPS: Pattern B · T-FIND-LEAVE: LeaveConfirmModal
- entity/migration: none · Step 4b skip · DOMAIN-MAP OK
- build: yarn PASS · dotnet PASS
- next: /agent-qa · GAP-PKT-ROLE-01 stop · e2eQa queued QA

## Inventory (slim)
| id | controlHint | done |
|----|-------------|------|
| fabCreate/save/recheck | Button | roleCaps.tuanKiem |
| hangMuc/dueAt | Select/Date | TT41 suggest |
| slaBadge | Badge | Trong/Quá hạn |
| assignCta | — | REMOVED |
| gps | GPS+Banner | Pattern B |
| leave | LeaveConfirm | FIND-F dirty |
| roleCaps | Hidden/Banner | cite role-gate |

## Screens / zones (ids only)
- FIND-L · FIND-F · FIND-D · DES-LEAVE · BANNER · roleGate
- mfeStdUrl= http://localhost:9301/web-rmms-cam-finding
- productRoute= /phat-hien/:sessionId*
- DES-GRID: N/A

## API / tasks (ids only)
- FormMode↔API: API-01..10 Live KEEP · assign UI out
- entity/migration: none
- T-FIND-* → done · owner Dev
- files: FindingList/Form/DetailPage · camFindingAccess · tt41FindingDue · aliasRedirects

## UNCLEAR
- none open · UNCLEAR-FIND-DUE-CATALOG wired Design §5 → Live hangMuc map

## Debt
- PUT full finding fields narrow Live DTO · create dueAt OK
- QA focus: role · due · sla · no assign · Pattern B · leave

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/implement/web-rmms-cam-finding.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/STATUS.md
- next: /agent-qa · qa/scenarios.md
