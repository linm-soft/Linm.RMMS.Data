# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-cam-checkin
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T01:00:00.000Z
taskId: task_fb54db09
contentHash: sha256:2ff2873ea06c8d3d8e707c24a142432b3f1e356db42bbb006f594fc6b9f213db
changeScope: edit_page
formPattern: Mobile full ≤430 · CI-01 sheet · CI-02 detail
formType: phone-checkin
autoApprove: ON
e2eQa: ON
qa_confirm: approve

## Decisions
- changeScope: edit_page · cấm new_page / CamCheckIn* route
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · product `/tuan-duong/:id` · `/diem-tuan`
- mfeStdUrl alias `/web-rmms-cam-checkin` **404** · queue-only · deep-link product
- runtime: docker healthy · start:std reuse · **cấm** GAP-QA-E2E-KILL-01
- stock yarn e2e-qa: FAIL soft (alias + mapLike) → `_capture_ci.mjs` PASS
- T-QA-CI-01 PASS · S0/S1/QA-20 PNG distinct · role-block AC
- soft: write/view cần jobTitle TUAN-DUONG|HAT-* (E2E principal = block)
- DES-GRID/filter Kind B: WAIVE phone
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01)
- **cấm** phase=done · ERP.*

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| roleGateBanner | Banner | S0/S1/QA-20 block danger |
| ctaCheckIn/endSession | Button | ẩn khi block |
| sheet-checkin | Sheet | S1 block · Hủy |
| ci-btn-save | Button | ẩn block · soft write |
| timeline | List RO | soft · block hides |
| photos/gps | RouteCapture | soft write path |

## Screens / zones (ids only)
- CI-01 · CI-02 · DES-LEAVE · roleGateBanner
- screens: specs/web-rmms-cam-checkin/qa/screens/{S0,S1,QA-20}.png · manifest ok=true
- runtimeUrl=`http://localhost:9301/tuan-duong/{liveSession}/diem-tuan`
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-checkin/ui/prototype/index.html

## API / tasks (ids only)
- T-QA-CI-01 PASS · e2e runtime not static-only
- T-QA-CI-WRITE/VIEW SOFT · debt principal caps
- Live API KEEP · entity/migration none

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-checkin/qa/scenarios.md
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-checkin/implement/web-rmms-cam-checkin.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-checkin/STATUS.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-checkin/handoff/dev-compact.md

## Handoff next
| Role | Do |
|------|----|
| review | findings · REVIEW-META · compact · **cấm** start từ task QA |

## Cấm
- ERP.* · phase=done · taskkill node/yarn rộng · start role khác · static-only PASS

<!-- compact schemaVersion=1 role=qa feature=web-rmms-cam-checkin taskId=task_fb54db09 -->
