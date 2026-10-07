# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-cam-home
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T03:25:00.000Z
taskId: task_66906f4f
contentHash: sha256:4bca94712257e93fa88e3cec4f6bb851b3aa00d7a28508932d46aef12b73441a
changeScope: edit_page
formPattern: Mobile Home+Hub+Shell ≤430 · nav-gated
formType: phone-home-hub
autoApprove: ON
e2eQa: ON
qa_confirm: approve

## Decisions
- changeScope: edit_page · cấm new_page / CamHome* product slug
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · product `/trang-chu` · `/tuan-duong` · shell
- mfeStdUrl alias `/web-rmms-cam-home` queue-only · deep-link product
- runtime: docker healthy · start:std reuse · **cấm** GAP-QA-E2E-KILL-01
- stock yarn e2e-qa: FAIL soft (S1 DUP) → `_capture_cam_home.mjs` PASS
- T-QA-HOME/CRUD PASS · S0/S1/QA-20 PNG distinct · hub NT removed · shell Plan #8
- soft: hero/tiles/supervise/assign cần principal TUAN-DUONG|HAT-* (E2E=Admin view)
- DES-GRID/filter Kind B: WAIVE phone
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01)
- **cấm** phase=done · ERP.*

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| profileName/notifyBadge | RO Live | S0 PASS |
| qaPatrolPoint/New | Nav gated | SOFT ẩn Admin |
| gridAssign/Supervise | Nav qlHat | SOFT ẩn · cite /van-de · /giam-sat |
| hub.quick.nghiemThu | — | REMOVED PASS |
| hub.quick.supervise | Nav gated | SOFT ẩn |
| shell.tab.* | Tab Plan #8 | QA-20 PASS |

## Screens / zones (ids only)
- CH-00 · HM-00/04/05/06 · UA-00 · DES-MOB-TABBAR · sc-patrol-home
- screens: specs/web-rmms-cam-home/qa/screens/{S0,S1,QA-20}.png · manifest ok=true
- runtimeUrl=`http://localhost:9301/trang-chu`
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/ui/prototype/index.html

## API / tasks (ids only)
- T-QA-HOME-01 · T-QA-CRUD-01 PASS · e2e runtime not static-only
- T-QA-HERO/TILE SOFT · debt principal caps
- Live API KEEP · entity/migration none

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/qa/scenarios.md
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/implement/web-rmms-cam-home.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/STATUS.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/handoff/dev-compact.md

## Handoff next
| Role | Do |
|------|----|
| review | findings · REVIEW-META · compact · **cấm** start từ task QA |

## Cấm
- ERP.* · phase=done · taskkill node/yarn rộng · start role khác · static-only PASS

<!-- compact schemaVersion=1 role=qa feature=web-rmms-cam-home taskId=task_66906f4f -->
