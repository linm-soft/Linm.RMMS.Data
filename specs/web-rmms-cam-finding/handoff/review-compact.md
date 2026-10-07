# Handoff compact — review

schemaVersion: 1
feature: web-rmms-cam-finding
packKind: list
role: review
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T01:00:00.000Z
taskId: task_ef16308b
contentHash: sha256:a7c3e91f0b4d62e8c5f1a9d0e3b7c4f6a2d8e1b5c9f0a4d7e6b3c1f8a5d2e0b9
changeScope: edit_page
formPattern: Mobile FIND-L/F/D ≤430 · LeaveConfirm · Pattern B
formType: phone-finding
autoApprove: ON
e2eQa: ON
review_confirm: approve
hashSkip: true

## Decisions
- changeScope: edit_page · cấm new_page / invent CamFinding*
- gates QUERY/SEC/UI-FN/BE-FN: **PASS**
- role: camFindingAccess(tuanKiem) · FAB/save/recheck gated · roleGateBanner
- dueAt: TT41 client map · editable · cấm SlaHours=24
- slaBadge: deriveSlaBadge client-only · cấm invent slaStatus
- assignCta REMOVED · API-07 keep · peer giao-viec-ql-hat
- GPS Pattern B · LeaveConfirm FIND-F · alias → /phat-hien
- entity/migration: none · DOMAIN-MAP OK · cấm ERP.* · cấm web-bff
- QA soft SLA/WRITE/LEAVE accept non-block · stock BLANK soft / custom PASS
- next: roleOnly stop (GAP-PKT-ROLE-01) · **cấm** phase=done

## Inventory (slim)
| id | controlHint | review |
|----|-------------|--------|
| fabCreate | Button | PASS gated |
| roleGateBanner | Banner | PASS |
| dueAt | Date | PASS TT41 |
| slaBadge | Badge | PASS code · soft runtime |
| assignCta | — | REMOVED PASS |
| gps | GPS+Banner | PASS Pattern B |
| leave | LeaveConfirm | PASS code · soft runtime |

## Screens / zones (ids only)
- FIND-L · FIND-F · FIND-D · roleGate · DES-LEAVE
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/ui/prototype/index.html
- mfeStdUrl= http://localhost:9301/web-rmms-cam-finding
- productRoute= /phat-hien/:sessionId*
- qa screens: S0/S1/QA-20 PASS

## API / tasks (ids only)
- FormMode↔API Live KEEP · assign UI out
- entity/migration: none
- T-FIND-* align Dev/QA · soft debt write principal

## UNCLEAR
- none

## Full paths (Read only if needed)
- findings: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/review/findings.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/STATUS.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/handoff/qa-compact.md

## Handoff next
| Role | Do |
|------|----|
| — | roleOnly=review stop · pipeline review confirmed · cấm start role khác từ task này |

## Cấm
- ERP.* · phase=done · implement · e2e ở review · start role khác

<!-- compact schemaVersion=1 role=review feature=web-rmms-cam-finding taskId=task_ef16308b -->
