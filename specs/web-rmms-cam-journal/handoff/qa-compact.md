# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-cam-journal
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T01:30:00.000Z
taskId: task_ba0d4696
contentHash: sha256:76d6d3e1ec6437552d8e12b1c18c3aa8a0fd16abdcc3ef54b3ebc783d062050e
changeScope: edit_page
formPattern: Mobile full ≤430 · JL-01 form · JL-02 list
formType: phone-journal
autoApprove: ON
e2eQa: ON
qa_confirm: approve

## Decisions
- changeScope: edit_page · cấm new_page / CamJournal* route
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · product `/nhat-ky/:id` · `/moi`
- mfeStdUrl alias `/web-rmms-cam-journal` → `/nhat-ky` · deep-link product for shots
- runtime: docker healthy · start:std reuse · **cấm** GAP-QA-E2E-KILL-01
- stock yarn e2e-qa: FAIL soft DUP → `_capture_jl.mjs` PASS
- T-QA-JL-01 PASS · S0/S1/QA-20 PNG · S1≠S0 · role-view AC
- soft: write cần jobTitle TUAN-DUONG (E2E principal = view)
- DES-GRID/filter Kind B: WAIVE phone
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01)
- **cấm** phase=done · ERP.*

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| roleGateBanner | Banner | S0/S1/QA-20 view |
| jl-cta-create* | Button | ẩn khi view |
| jl-btn-save | Button | ẩn view · soft write |
| JL-01/JL-02 | zones | form/list des-id |
| photos/gps | RouteCapture | soft write path |

## Screens / zones (ids only)
- JL-01 · JL-02 · JL-01v · JL-02v · DES-LEAVE · roleGateBanner
- screens: specs/web-rmms-cam-journal/qa/screens/{S0,S1,QA-20}.png · manifest ok=true
- runtimeUrl=`http://localhost:9301/nhat-ky/{liveSession}/moi`
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/ui/prototype/index.html

## API / tasks (ids only)
- T-QA-JL-01 PASS · e2e runtime not static-only
- T-QA-JL-WRITE SOFT · debt principal caps
- Live API KEEP · entity/migration none

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/qa/scenarios.md
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/implement/web-rmms-cam-journal.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/STATUS.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/handoff/dev-compact.md

## Handoff next
| Role | Do |
|------|----|
| review | findings · REVIEW-META · compact · **cấm** start từ task QA |

## Cấm
- ERP.* · phase=done · taskkill node/yarn rộng · start role khác · static-only PASS

<!-- compact schemaVersion=1 role=qa feature=web-rmms-cam-journal taskId=task_ba0d4696 -->
