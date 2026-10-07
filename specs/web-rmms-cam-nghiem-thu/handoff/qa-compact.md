# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-cam-nghiem-thu
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T02:45:00.000Z
taskId: task_0324ce40
contentHash: sha256:c4e8a1b9d2f57306e8a0c1d4b7f9e2a5c8d0f3b6a9e1c4d7f0b2e5a8c1d4f7b0
changeScope: edit_page
formPattern: Mobile full ≤430 · NT-L/F · Pattern B
formType: phone-nghiem-thu
autoApprove: ON
e2eQa: ON
qa_confirm: approve

## Decisions
- changeScope: edit_page · cấm new_page / CamNghiemThu* product slug
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · product `/nghiem-thu` · `/moi` · `/:id`
- mfeStdUrl alias `/web-rmms-cam-nghiem-thu` **404** · queue-only · deep-link product
- runtime: docker healthy · start:std reuse · **cấm** GAP-QA-E2E-KILL-01
- stock yarn e2e-qa: FAIL soft (S1 BLANK) → `_capture_cam_nghiem_thu.mjs` PASS
- T-QA-FORM/CRUD PASS · S0/S1/QA-20 PNG distinct · role-view AC
- soft: write/hidden cần jobTitle NGHIEM-THU|TUAN-DUONG (E2E principal = view)
- DES-GRID/filter Kind B: WAIVE phone
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01)
- **cấm** phase=done · ERP.*

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| roleGateBanner | Banner | S0/QA-20 view |
| btnCreate | Button | ẩn khi view |
| save | Button | ẩn detail RO |
| cards | List | Live NT-03 |
| linkRo | Nav RO | findings + sessions |
| photos/gps | RouteCapture+GPS | RO no write |

## Screens / zones (ids only)
- NT-L · NT-F · NT-RO-LINK · NT-11 · roleGateBanner
- screens: specs/web-rmms-cam-nghiem-thu/qa/screens/{S0,S1,QA-20}.png · manifest ok=true
- runtimeUrl=`http://localhost:9301/nghiem-thu`
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/ui/prototype/index.html

## API / tasks (ids only)
- T-QA-FORM-01 · T-QA-CRUD-01 PASS · e2e runtime not static-only
- T-QA-NT-WRITE/HIDDEN SOFT · debt principal caps
- Live API KEEP · entity/migration none

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/qa/scenarios.md
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/implement/web-rmms-cam-nghiem-thu.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/STATUS.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/handoff/dev-compact.md

## Handoff next
| Role | Do |
|------|----|
| review | findings · REVIEW-META · compact · **cấm** start từ task QA |

## Cấm
- ERP.* · phase=done · taskkill node/yarn rộng · start role khác · static-only PASS

<!-- compact schemaVersion=1 role=qa feature=web-rmms-cam-nghiem-thu taskId=task_0324ce40 -->
