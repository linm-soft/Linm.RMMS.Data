# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-cam-finding
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T00:54:00.000Z
taskId: task_ab322d01
contentHash: sha256:a7c3e91f0b4d62e8c5f1a9d0e3b7c4f6a2d8e1b5c9f0a4d7e6b3c1f8a5d2e0b9
changeScope: edit_page
formPattern: Mobile FIND-L/F/D ≤430 · LeaveConfirm · Pattern B
formType: phone-finding
autoApprove: ON
e2eQa: ON
qa_confirm: approve

## Decisions
- changeScope: edit_page · cấm new_page / invent CamFinding* product slug
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · product `/phat-hien/:sessionId*` · alias `/web-rmms-cam-finding`
- runtime: docker healthy · start:std reuse · **cấm** GAP-QA-E2E-KILL-01
- stock yarn e2e-qa: S0 FAIL soft BLANK-01 → `_capture_cam_finding.mjs` PASS
- bootstrap mo-dot → session · S0 FIND-L · S1 FIND-F due/TT41/GPS · QA-20 no assign · PNG distinct
- principal Admin=view · FAB ẩn · roleGateBanner · assignCta REMOVED
- soft: FIND-D/slaBadge · write/recheck/leave cần TUAN-DUONG
- DES-GRID/filter Kind B: WAIVE phone
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01)
- **cấm** phase=done · ERP.*

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| fabCreate | Button | ẩn view · S0 PASS |
| roleGateBanner | Banner | Admin view PASS |
| dueAt | Date | TT41 hint S1 PASS |
| slaBadge | Badge | SOFT empty list |
| assignCta | — | REMOVED PASS |
| gps | GPS+Banner | Pattern B coords PASS |
| leave | LeaveConfirm | SOFT write principal |

## Screens / zones (ids only)
- FIND-L · FIND-F · roleGate · (FIND-D soft)
- screens: specs/web-rmms-cam-finding/qa/screens/{S0,S1,QA-20}.png · manifest ok=true
- runtimeUrl=`http://localhost:9301/m/phat-hien/:sessionId*`
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/ui/prototype/index.html

## API / tasks (ids only)
- T-QA-FIND-01/DUE/ASSIGN/GPS PASS · SLA/WRITE/LEAVE SOFT
- T-QA-FILTER WAIVE · Live API KEEP · entity/migration none
- e2e runtime not static-only

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/qa/scenarios.md
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/implement/web-rmms-cam-finding.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/STATUS.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/handoff/dev-compact.md

## Handoff next
| Role | Do |
|------|----|
| review | findings · REVIEW-META · compact · **cấm** start từ task QA |

## Cấm
- ERP.* · phase=done · taskkill node/yarn rộng · start role khác · static-only PASS

<!-- compact schemaVersion=1 role=qa feature=web-rmms-cam-finding taskId=task_ab322d01 -->
