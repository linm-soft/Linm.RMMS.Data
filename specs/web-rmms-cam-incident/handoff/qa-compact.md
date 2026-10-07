# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-cam-incident
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T05:10:00.000Z
taskId: task_bf0fd012
contentHash: sha256:e515f74ca821b652154473ac30eaec7bb13c8921acf6725b739dc4eb1744b8d1
changeScope: edit_page
formPattern: Mobile full ≤430 · INC-CAP/N/D/L · Pattern B
formType: phone-incident
autoApprove: ON
e2eQa: ON
qa_confirm: approve

## Decisions
- changeScope: edit_page · cấm new_page / CamIncident* route
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · product `/van-de` · `/van-de/moi` · `/van-de/:id`
- mfeStdUrl alias `/web-rmms-cam-incident` **404** · queue-only · deep-link product
- runtime: docker healthy · start:std reuse · **cấm** GAP-QA-E2E-KILL-01
- stock yarn e2e-qa: FAIL soft (alias + DUP) → `_capture_cam_incident.mjs` PASS
- T-QA-INC-01 PASS · S0/S1/QA-20 PNG distinct · role-view AC
- soft: write/assign cần jobTitle TUAN-DUONG|HAT-* (E2E principal = view)
- DES-GRID/filter Kind B: WAIVE phone
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01)
- **cấm** phase=done · ERP.*

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| roleGateBanner | Banner | S0/S1/QA-20 view deny |
| fabCreate | FAB | ẩn khi view |
| create | Form INC-N | deny non-tuần-đường |
| assignCta | Button | ẩn (soft QL_HAT) |
| close | Button | ẩn DEC-CLOSE-01 |
| cards | List | Live unscoped RO |

## Screens / zones (ids only)
- INC-L · INC-N · INC-D · roleGateBanner · DES-LEAVE N/A this principal
- screens: specs/web-rmms-cam-incident/qa/screens/{S0,S1,QA-20}.png · manifest ok=true
- runtimeUrl=`http://localhost:9301/van-de`
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/ui/prototype/index.html

## API / tasks (ids only)
- T-QA-INC-01 PASS · e2e runtime not static-only
- T-QA-INC-WRITE/ASSIGN SOFT · debt principal caps
- Live API KEEP · entity/migration none

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/qa/scenarios.md
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/implement/web-rmms-cam-incident.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/STATUS.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/handoff/dev-compact.md

## Handoff next
| Role | Do |
|------|----|
| review | findings · REVIEW-META · compact · **cấm** start từ task QA |

## Cấm
- ERP.* · phase=done · taskkill node/yarn rộng · start role khác · static-only PASS

<!-- compact schemaVersion=1 role=qa feature=web-rmms-cam-incident taskId=task_bf0fd012 -->
